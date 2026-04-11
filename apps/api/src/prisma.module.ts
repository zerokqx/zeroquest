import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { InboundModule } from './inbound/inbound.module';
import { UserModule } from './user/user.module';
import { SessionModule } from './session/session.module';
import { TokenModule } from './token/token.module';
import { ThreeXUiModule } from './three-x-ui/three-x-ui.module';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
  imports: [InboundModule, UserModule, SessionModule, TokenModule, ThreeXUiModule],
})
export class PrismaModule {}
