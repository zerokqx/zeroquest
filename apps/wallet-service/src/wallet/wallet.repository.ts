import { Injectable } from '@nestjs/common';
import { PrismaService, User, Wallet, WalletHistoryType } from '@zeroquest/db';
import { WALLET_RESPONSE_TYPE, type WalletServiceTypes } from '@zeroquest/types';

@Injectable()
export class WalletRepository {
  constructor(private readonly prisma: PrismaService) {}

  async debitByUserId(userId: User['id'], amount: Wallet['balance']) {
    if (amount <= 0) {
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
        if (updated.count !== 1) {
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
        return {
          ok: true,
          type: WALLET_RESPONSE_TYPE.SUCCESS,
        } as WalletServiceTypes.WalletEventResponse;
      });
    } catch {
      return {
        ok: false,
        type: WALLET_RESPONSE_TYPE.UNEXPECTED_ERROR,
      } as WalletServiceTypes.WalletEventResponse;
    }
  }

  async creditByUserId(userId: User['id'], amount: Wallet['balance']) {
    if (amount <= 0) {
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
        if (updated.count !== 1) {
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
        return {
          ok: true,
          type: WALLET_RESPONSE_TYPE.SUCCESS,
        } as WalletServiceTypes.WalletEventResponse;
      });
    } catch {
      return {
        ok: false,
        type: WALLET_RESPONSE_TYPE.UNEXPECTED_ERROR,
      } as WalletServiceTypes.WalletEventResponse;
    }
  }
}
