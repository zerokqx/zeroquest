import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from '../config/configuration';
import { PrismaService } from '../prisma.service';


@Global()
@Module({
  imports: [ConfigModule.forFeature(config)],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class ZeroquestDbModule {}
