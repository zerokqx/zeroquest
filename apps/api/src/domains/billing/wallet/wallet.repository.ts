import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import {
  Prisma,
  PrismaService,
  User,
  Wallet,
  WalletHistoryType,
} from '@zeroquest/db';
import {
  WALLET_RESPONSE_TYPE,
  type WalletServiceTypes,
} from '@zeroquest/types';

@Injectable()
export class WalletRepository {
  private readonly logger = new Logger(WalletRepository.name);

  constructor(private readonly prisma: PrismaService) {}

  private walletWhereByUserId(userId: User['id']): Prisma.WalletWhereInput {
    return {
      user: {
        is: {
          id: userId,
        },
      },
    };
  }

  private findWalletByUserIdOrThrow(
    client: PrismaService | Prisma.TransactionClient,
    userId: User['id'],
  ) {
    return client.wallet.findFirstOrThrow({
      where: this.walletWhereByUserId(userId),
    });
  }

  private invalidAmountResponse(
    method: string,
    userId: string,
    amount: number,
  ) {
    this.logger.warn(
      `${method} rejected invalid amount: userId=${userId}, amount=${amount}`,
    );
    return {
      ok: false,
      type: WALLET_RESPONSE_TYPE.INCORRECT_VALUE,
    } as WalletServiceTypes.WalletEventResponse;
  }

  private unexpectedErrorResponse(
    method: string,
    userId: string,
    amount: number,
    error: unknown,
  ) {
    const message = error instanceof Error ? error.message : String(error);
    this.logger.error(
      `${method} unexpected error: userId=${userId}, amount=${amount}, message=${message}`,
    );
    return {
      ok: false,
      type: WALLET_RESPONSE_TYPE.UNEXPECTED_ERROR,
    } as WalletServiceTypes.WalletEventResponse;
  }

  private async changeBalanceByUserId(params: {
    method: 'debitByUserId' | 'creditByUserId';
    userId: User['id'];
    amount: Wallet['balance'];
    historyType: WalletHistoryType;
    operation: 'increment' | 'decrement';
    onUpdateMissType:
      | typeof WALLET_RESPONSE_TYPE.NOT_ENOUGH_FUNDS
      | typeof WALLET_RESPONSE_TYPE.UNEXPECTED_ERROR;
    onUpdateMissLog: string;
  }) {
    const {
      method,
      userId,
      amount,
      historyType,
      operation,
      onUpdateMissType,
      onUpdateMissLog,
    } = params;

    this.logger.debug(`${method} called: userId=${userId}, amount=${amount}`);
    if (amount <= 0) {
      return this.invalidAmountResponse(method, userId, amount);
    }

    try {
      return await this.prisma.$transaction(async (tx) => {
        const where: Prisma.WalletWhereInput = {
          ...this.walletWhereByUserId(userId),
          ...(operation === 'decrement' ? { balance: { gte: amount } } : {}),
        };
        const updated = await tx.wallet.updateMany({
          where,
          data: {
            balance: {
              [operation]: amount,
            },
          },
        });
        this.logger.debug(
          `${method} updateMany result: userId=${userId}, amount=${amount}, updatedCount=${updated.count}, operation=${operation}`,
        );
        if (updated.count !== 1) {
          this.logger.warn(onUpdateMissLog);
          return {
            ok: false,
            type: onUpdateMissType,
          } satisfies WalletServiceTypes.WalletEventResponse;
        }

        const wallet = await this.findWalletByUserIdOrThrow(tx, userId);
        await tx.walletHistory.create({
          data: {
            amount,
            balance: wallet.balance,
            type: historyType,
            wallet: {
              connect: {
                id: wallet.id,
              },
            },
          },
        });
        this.logger.log(
          `${method} success: userId=${userId}, amount=${amount}, balance=${wallet.balance}`,
        );
        return {
          ok: true,
          type: WALLET_RESPONSE_TYPE.SUCCESS,
        } as WalletServiceTypes.WalletEventResponse;
      });
    } catch (error) {
      return this.unexpectedErrorResponse(method, userId, amount, error);
    }
  }

  notEnoughFunds() {
    throw new BadRequestException({
      ok: false,
      type: WALLET_RESPONSE_TYPE.NOT_ENOUGH_FUNDS,
    } satisfies WalletServiceTypes.WalletEventResponse);
  }
  async canHeldMany(userId: User['id'], amount: Wallet['balance']) {
    const wallet = await this.findWalletByUserIdOrThrow(this.prisma, userId);
    return wallet.balance >= amount;
  }
  async availabelBalance(userId: User['id']) {
    const wallet = await this.findWalletByUserIdOrThrow(this.prisma, userId);
    return wallet.balance - wallet.held;
  }
  async unheldMoney(userId: User['id'], amount: Wallet['held']) {
    return this.prisma.$transaction(async (tx) => {
      await tx.wallet.updateMany({
        where: this.walletWhereByUserId(userId),
        data: {
          held: {
            decrement: amount,
          },
        },
      });
      return this.findWalletByUserIdOrThrow(tx, userId);
    });
  }
  async heldMoney(userId: User['id'], amount: Wallet['held']) {
    const balance = await this.canHeldMany(userId, amount);
    if (!balance) this.notEnoughFunds();
    return this.prisma.$transaction(async (tx) => {
      await tx.wallet.updateMany({
        where: this.walletWhereByUserId(userId),
        data: {
          held: {
            increment: amount,
          },
        },
      });
      return this.findWalletByUserIdOrThrow(tx, userId);
    });
  }

  async debitFromHeldByUserId(userId: User['id'], amount: Wallet['balance']) {
    this.logger.debug(
      `debitFromHeldByUserId called: userId=${userId}, amount=${amount}`,
    );
    if (amount <= 0) {
      return this.invalidAmountResponse('debitFromHeldByUserId', userId, amount);
    }
    try {
      return await this.prisma.$transaction(async (tx) => {
        const updated = await tx.wallet.updateMany({
          where: {
            ...this.walletWhereByUserId(userId),
            held: { gte: amount },
            balance: { gte: amount },
          },
          data: {
            held: {
              decrement: amount,
            },
            balance: {
              decrement: amount,
            },
          },
        });

        if (updated.count !== 1) {
          this.logger.warn(
            `debitFromHeldByUserId rejected: not enough held funds or wallet missing: userId=${userId}, amount=${amount}`,
          );
          return {
            ok: false,
            type: WALLET_RESPONSE_TYPE.NOT_ENOUGH_FUNDS,
          } as WalletServiceTypes.WalletEventResponse;
        }

        const wallet = await this.findWalletByUserIdOrThrow(tx, userId);
        await tx.walletHistory.create({
          data: {
            amount,
            balance: wallet.balance,
            type: WalletHistoryType.REFUND,
            wallet: {
              connect: {
                id: wallet.id,
              },
            },
          },
        });

        this.logger.log(
          `debitFromHeldByUserId success: userId=${userId}, amount=${amount}, balance=${wallet.balance}, held=${wallet.held}`,
        );
        return {
          ok: true,
          type: WALLET_RESPONSE_TYPE.SUCCESS,
        } as WalletServiceTypes.WalletEventResponse;
      });
    } catch (error) {
      return this.unexpectedErrorResponse(
        'debitFromHeldByUserId',
        userId,
        amount,
        error,
      );
    }
  }

  async debitByUserId(userId: User['id'], amount: Wallet['balance']) {
    const balance = await this.availabelBalance(userId);
    if (balance < amount) this.notEnoughFunds();
    return this.changeBalanceByUserId({
      method: 'debitByUserId',
      userId,
      amount,
      historyType: WalletHistoryType.DEBIT,
      operation: 'decrement',
      onUpdateMissType: WALLET_RESPONSE_TYPE.NOT_ENOUGH_FUNDS,
      onUpdateMissLog: `debitByUserId not enough funds or wallet missing: userId=${userId}, amount=${amount}`,
    });
  }

  async creditByUserId(userId: User['id'], amount: Wallet['balance']) {
    return this.changeBalanceByUserId({
      method: 'creditByUserId',
      userId,
      amount,
      historyType: WalletHistoryType.CREDIT,
      operation: 'increment',
      onUpdateMissType: WALLET_RESPONSE_TYPE.UNEXPECTED_ERROR,
      onUpdateMissLog: `creditByUserId unexpected updatedCount: userId=${userId}, amount=${amount}`,
    });
  }

  async giveBonusByUserId(userId: User['id'], amount: Wallet['balance']) {
    return this.changeBalanceByUserId({
      method: 'creditByUserId',
      userId,
      amount,
      historyType: WalletHistoryType.BONUS,
      operation: 'increment',
      onUpdateMissType: WALLET_RESPONSE_TYPE.UNEXPECTED_ERROR,
      onUpdateMissLog: `giveBonusByUserId unexpected updatedCount: userId=${userId}, amount=${amount}`,
    });
  }
}
