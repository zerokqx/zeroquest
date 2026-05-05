import {
  Controller,
  Get,
  Query,
} from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { WalletService } from './wallet.service';
import { type AuthServiceTypes, walletPaterns } from '@zeroquest/types';
import { CreditWalletDto } from './dto/credit-wallet.dto';
import { DebitWalletDto } from './dto/debit-wallet.dto';
import { AuthPayload } from '@zeroquest/nest-shared';
import { WalletEntity } from './entities/wallet.entity';
import { ApiCookieAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Wallet')
@ApiCookieAuth('zeroquestAccess')
@Controller('wallets')
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

  @Get('my')
  async getMyWallet(
    @Query('id') id: string,
    @AuthPayload() payload: AuthServiceTypes.JwtPayload,
  ) {
    const data = await this.walletService.findOneByUserId(id, payload.sub);
    return new WalletEntity(data);
  }
}
