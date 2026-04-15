import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ZeroquestConfigModule } from '@zeroquest/config';
import { WalletModule } from '../wallet/wallet.module';

@Module({
  imports: [ZeroquestConfigModule.forRoot(), WalletModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
