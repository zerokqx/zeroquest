import { Module } from '@nestjs/common';
import { InboundService } from './inbound.service';
import { InboundController } from './inbound.controller';
import { ThreeXUiModule } from '@/three-x-ui/three-x-ui.module';

@Module({
  imports:[ThreeXUiModule],
  controllers: [InboundController],
  providers: [InboundService],
})
export class InboundModule {}
