import { Module } from '@nestjs/common';
import { SubscribeService } from './subscribe.service';
import { SubscribeController } from './subscribe.controller';
import { SubscribeRepository } from './subscribe.repository';
import { ThreeXUiModule } from '@/domains/network/three-x-ui/three-x-ui.module';
import { WalletModule } from '@/domains/billing/wallet/wallet.module';
import { PolicyModule } from '@/domains/content/policy/policy.module';

@Module({
  imports: [ThreeXUiModule, WalletModule, PolicyModule],
  controllers: [SubscribeController],
  providers: [SubscribeService, SubscribeRepository],
  exports: [SubscribeService],
})
export class SubscribeModule {}
