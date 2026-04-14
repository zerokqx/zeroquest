import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletController } from './wallet.controller';
import {ZeroquestDbModule} from "@zeroquest/db"
import { WalletRepository } from './wallet.repository';

@Module({
  imports:[ZeroquestDbModule],
  controllers: [WalletController],
  providers: [WalletService, WalletRepository],
})
export class WalletModule {}
