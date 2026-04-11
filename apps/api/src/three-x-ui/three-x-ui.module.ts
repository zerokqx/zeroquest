import { Module } from '@nestjs/common';
import { ThreeXUiService } from './three-x-ui.service';

@Module({
  providers: [ThreeXUiService],
  exports:[ThreeXUiService]
})
export class ThreeXUiModule {}
