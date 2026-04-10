import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { InboundModule } from './inbound/inbound.module';
import { UserModule } from './user/user.module';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
  imports: [InboundModule, UserModule],
})
export class PrismaModule {}
