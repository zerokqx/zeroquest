import { Injectable } from '@nestjs/common';
import { WalletRepository } from './wallet.repository';
import { CreditWalletDto } from './dto/credit-wallet.dto';
import { DebitWalletDto } from './dto/debit-wallet.dto';

@Injectable()
export class WalletService {
  constructor(private readonly walletRepository: WalletRepository) {}
  async credit({ amount, userId }: CreditWalletDto) {
    return this.walletRepository.creditByUserId(userId, amount);
  }

  async debit({ amount, userId }: DebitWalletDto) {
    return this.walletRepository.debitByUserId(userId, amount);
  }
}
