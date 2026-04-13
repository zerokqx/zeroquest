import { Module } from '@nestjs/common';
import { ThreeXUiService } from './three-x-ui.service';
import { ThreeXUiController } from './three-x-ui.controller';

@Module({
  controllers:[ThreeXUiController],
  providers: [ThreeXUiService],
  exports:[ThreeXUiService]
})
export class ThreeXUiModule {}
