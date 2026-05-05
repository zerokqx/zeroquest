import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletController } from './wallet.controller';
import { ZeroquestDbModule } from '@zeroquest/db';
import { WalletRepository } from './wallet.repository';
import { WalletProcessor } from './wallet.processor';
import { BullModule } from '@nestjs/bullmq';
import { WalletAdminController } from './wallet-admin.controller';

@Module({
  imports: [
    ZeroquestDbModule,
    BullModule.registerQueue({
      name: 'wallet',
    }),
  ],
  controllers: [WalletController, WalletAdminController],
  providers: [WalletService, WalletRepository, WalletProcessor],
  exports: [WalletService],
})
export class WalletModule {}
