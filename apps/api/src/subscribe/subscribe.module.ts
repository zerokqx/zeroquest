import { Module } from '@nestjs/common';
import { SubscribeService } from './subscribe.service';
import { SubscribeController } from './subscribe.controller';
import { SubscribeRepository } from './subscribe.repository';
import { ThreeXUiModule } from '@/three-x-ui/three-x-ui.module';
import { WalletModule } from '@/wallet/wallet.module';
import { PolicyModule } from '@/policy/policy.module';

@Module({
  imports: [ThreeXUiModule, WalletModule, PolicyModule],
  controllers: [SubscribeController],
  providers: [SubscribeService, SubscribeRepository],
  exports: [SubscribeService],
})
export class SubscribeModule {}
