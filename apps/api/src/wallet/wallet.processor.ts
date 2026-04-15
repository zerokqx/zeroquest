import { Processor, WorkerHost } from '@nestjs/bullmq';
import {
  WalletCreditEvent,
  WalletDebitEvent,
  walletPaternsForProcessor,
  type WalletPaternsForProcessor,
} from '@zeroquest/types';
import { Job } from 'bullmq';
import { WalletRepository } from './wallet.repository';

@Processor('wallet')
export class WalletProcessor extends WorkerHost {
  constructor(private readonly walletRepository: WalletRepository) {
    super();
  }
  override async process(
    job: Job<
      WalletCreditEvent | WalletDebitEvent,
      void,
      WalletPaternsForProcessor
    >,
  ): Promise<any> {
    if (job.name === walletPaternsForProcessor.CREDIT) {
      const data = job.data as WalletCreditEvent;
      return await this.walletRepository.creditByUserId(
        data.userId,
        data.amount,
      );
    }

    if (job.name === walletPaternsForProcessor.DEBIT) {
      const data = job.data as WalletDebitEvent;
      return await this.walletRepository.debitByUserId(
        data.userId,
        data.amount,
      );
    }
  }
}
