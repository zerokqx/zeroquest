import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ClientTypeModule } from './client-type/client-type.module';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
  imports: [ClientTypeModule],
})
export class PrismaModule {}
