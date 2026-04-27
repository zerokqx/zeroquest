import { Processor, WorkerHost } from '@nestjs/bullmq';
import {
  WalletCreditEvent,
  WalletDebitEvent,
  walletPaternsForProcessor,
  WalletServiceTypes,
  type WalletPaternsForProcessor,
} from '@zeroquest/types';
import { Job } from 'bullmq';
import { WalletRepository } from './wallet.repository';

@Processor('wallet', {
  concurrency: 3,
  limiter: {
    duration: 1000,
    max: 50,
  },
})
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
  ): Promise<WalletServiceTypes.WalletEventResponse> {
    switch (job.name) {
      case walletPaternsForProcessor.CREDIT: {
        const data = job.data as WalletCreditEvent;
        return await this.walletRepository.creditByUserId(
          data.userId,
          data.amount,
        );
      }
      case walletPaternsForProcessor.DEBIT: {
        const data = job.data as WalletDebitEvent;
        return await this.walletRepository.debitByUserId(
          data.userId,
          data.amount,
        );
      }
    }
  }
}
