import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { WalletService } from './wallet.service';
import { walletPaterns } from '@zeroquest/types';
import { CreditWalletDto } from './dto/credit-wallet.dto';
import { DebitWalletDto } from './dto/debit-wallet.dto';

@Controller()
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @MessagePattern(walletPaterns.credit)
  credit(@Payload() creditWalletDto: CreditWalletDto) {
    return this.walletService.creditWithQueue(creditWalletDto);
  }

  @MessagePattern(walletPaterns.debit)
  debit(@Payload() debitWalletDto: DebitWalletDto) {
    return this.walletService.debitWithQueue(debitWalletDto);
  }
}
