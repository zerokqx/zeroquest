import { Injectable } from '@nestjs/common';
import { CreditWalletDto } from './dto/credit-wallet.dto';
import { DebitWalletDto } from './dto/debit-wallet.dto';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import {
  WalletCreditEvent,
  WalletDebitEvent,
  walletPaternsForProcessor,
} from '@zeroquest/types';
import { WalletRepository } from './wallet.repository';

@Injectable()
export class WalletService {
  constructor(
    private readonly walletReposiory: WalletRepository,
    @InjectQueue('wallet') private readonly walletQueue: Queue,
  ) {}

  async creditWithQueue(data: CreditWalletDto) {
    return this.walletQueue.add(
      walletPaternsForProcessor.CREDIT,
      data as WalletCreditEvent,
    );
  }

  async debitWithQueue(data: DebitWalletDto) {
    return this.walletQueue.add(
      walletPaternsForProcessor.DEBIT,
      data as WalletDebitEvent,
    );
  }

  async credit({ userId, amount }: CreditWalletDto) {
    return this.walletReposiory.creditByUserId(userId, amount);
  }

  async debit({ userId, amount }: DebitWalletDto) {
    return this.walletReposiory.debitByUserId(userId, amount);
  }

  async debitFromHeld({ userId, amount }: DebitWalletDto) {
    return this.walletReposiory.debitFromHeldByUserId(userId, amount);
  }

  async heldMoney({ userId, amount }: DebitWalletDto) {
    return this.walletReposiory.heldMoney(userId, amount);
  }

  async unheldMoney({ userId, amount }: DebitWalletDto) {
    return this.walletReposiory.unheldMoney(userId, amount);
  }
}
