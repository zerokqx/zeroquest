import { Injectable, Logger } from '@nestjs/common';
import { PrismaService, User, Wallet, WalletHistoryType } from '@zeroquest/db';
import { WALLET_RESPONSE_TYPE, type WalletServiceTypes } from '@zeroquest/types';

@Injectable()
export class WalletRepository {
  private readonly logger = new Logger(WalletRepository.name);

  constructor(private readonly prisma: PrismaService) {}

  async debitByUserId(userId: User['id'], amount: Wallet['balance']) {
    this.logger.debug(`debitByUserId called: userId=${userId}, amount=${amount}`);
    if (amount <= 0) {
      this.logger.warn(
        `debitByUserId rejected invalid amount: userId=${userId}, amount=${amount}`,
      );
      return {
        ok: false,
        type: WALLET_RESPONSE_TYPE.INCORRECT_VALUE,
      } as WalletServiceTypes.WalletEventResponse;
    }
    try {
      return await this.prisma.$transaction(async (tx) => {
        const updated = await tx.wallet.updateMany({
          where: {
            userId,
            balance: { gte: amount },
          },
          data: {
            balance: {
              decrement: amount,
            },
          },
        });
        this.logger.debug(
          `debitByUserId updateMany result: userId=${userId}, amount=${amount}, updatedCount=${updated.count}`,
        );
        if (updated.count !== 1) {
          this.logger.warn(
            `debitByUserId not enough funds or wallet missing: userId=${userId}, amount=${amount}, updatedCount=${updated.count}`,
          );
          return {
            ok: false,
            type: WALLET_RESPONSE_TYPE.NOT_ENOUGH_FUNDS,
          } as WalletServiceTypes.WalletEventResponse;
        }

        const wallet = await tx.wallet.findUniqueOrThrow({
          where: { userId },
        });
        await tx.walletHistory.create({
          data: {
            amount,
            balance: wallet.balance,
            type: WalletHistoryType.DEBIT,
            wallet: {
              connect: {
                id: wallet.id,
              },
            },
          },
        });
        this.logger.log(
          `debitByUserId success: userId=${userId}, amount=${amount}, balance=${wallet.balance}`,
        );
        return {
          ok: true,
          type: WALLET_RESPONSE_TYPE.SUCCESS,
        } as WalletServiceTypes.WalletEventResponse;
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      this.logger.error(
        `debitByUserId unexpected error: userId=${userId}, amount=${amount}, message=${message}`,
      );
      return {
        ok: false,
        type: WALLET_RESPONSE_TYPE.UNEXPECTED_ERROR,
      } as WalletServiceTypes.WalletEventResponse;
    }
  }

  async creditByUserId(userId: User['id'], amount: Wallet['balance']) {
    this.logger.debug(`creditByUserId called: userId=${userId}, amount=${amount}`);
    if (amount <= 0) {
      this.logger.warn(
        `creditByUserId rejected invalid amount: userId=${userId}, amount=${amount}`,
      );
      return {
        ok: false,
        type: WALLET_RESPONSE_TYPE.INCORRECT_VALUE,
      } as WalletServiceTypes.WalletEventResponse;
    }
    try {
      return await this.prisma.$transaction(async (tx) => {
        const updated = await tx.wallet.updateMany({
          where: {
            userId,
          },
          data: {
            balance: {
              increment: amount,
            },
          },
        });
        this.logger.debug(
          `creditByUserId updateMany result: userId=${userId}, amount=${amount}, updatedCount=${updated.count}`,
        );
        if (updated.count !== 1) {
          this.logger.warn(
            `creditByUserId unexpected updatedCount: userId=${userId}, amount=${amount}, updatedCount=${updated.count}`,
          );
          return {
            ok: false,
            type: WALLET_RESPONSE_TYPE.UNEXPECTED_ERROR,
          } as WalletServiceTypes.WalletEventResponse;
        }

        const wallet = await tx.wallet.findUniqueOrThrow({
          where: { userId },
        });
        await tx.walletHistory.create({
          data: {
            amount,
            balance: wallet.balance,
            type: WalletHistoryType.CREDIT,
            wallet: {
              connect: {
                id: wallet.id,
              },
            },
          },
        });
        this.logger.log(
          `creditByUserId success: userId=${userId}, amount=${amount}, balance=${wallet.balance}`,
        );
        return {
          ok: true,
          type: WALLET_RESPONSE_TYPE.SUCCESS,
        } as WalletServiceTypes.WalletEventResponse;
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      this.logger.error(
        `creditByUserId unexpected error: userId=${userId}, amount=${amount}, message=${message}`,
      );
      return {
        ok: false,
        type: WALLET_RESPONSE_TYPE.UNEXPECTED_ERROR,
      } as WalletServiceTypes.WalletEventResponse;
    }
  }
}
