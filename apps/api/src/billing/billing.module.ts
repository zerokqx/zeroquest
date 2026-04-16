import { Module } from '@nestjs/common';
import { BillingService } from './billing.service';
import { ZeroquestDbModule } from '@zeroquest/db';
import { WalletModule } from '@/wallet/wallet.module';
import { ThreeXUiModule } from '@/three-x-ui/three-x-ui.module';
import { SubscribeModule } from '@/subscribe/subscribe.module';

@Module({
  imports: [ZeroquestDbModule, WalletModule, ThreeXUiModule,
SubscribeModule,
  ],
  providers: [BillingService],
})
export class BillingModule {}
