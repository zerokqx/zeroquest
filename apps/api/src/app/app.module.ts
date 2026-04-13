import { Module } from '@nestjs/common';
import configuration from '../config/configuration';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '../auth/auth.module';
import { PrismaModule } from '@/prisma.module';
import { APP_GUARD } from '@nestjs/core';
import { ClientTypeGuard } from '@/client-type/client-type.guard';
import { AuthGuard } from '@/auth/auth.guard';
import { RoleGuard } from '@/common/role/role.guard';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { env } from 'process';
import { InboundModule } from '@/inbound/inbound.module';
import { UserModule } from '@/user/user.module';
import { BullModule } from '@nestjs/bullmq';
import { QueueModule } from '@/queue.module';
import { PaymentModule } from '@/payment/payment.module';
import { PlanModule } from '@/plan/plan.module';
import { ThreeXUiModule } from '@/three-x-ui/three-x-ui.module';
import { SubscribeModule } from '@/subscribe/subscribe.module';
import { ClientTypeModule } from '@/client-type/client-type.module';

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env', '.env.example'],
      load: [configuration],
    }),
    ClientsModule.register([
      {
        name: 'SUBSCRIBE_SERVICE',
        transport: Transport.REDIS,
        options: {
          host: 'localhost',
          port: Number(env.REDIS_PORT),
          wildcards: true,
        },
      },
    ]),
    BullModule.forRoot({
      connection: {
        host: 'localhost',
        port: Number(process.env.REDIS_PORT),
      },
    }),
    PlanModule,
    AuthModule,
    PrismaModule,
    InboundModule,
    UserModule,
    QueueModule,
    PaymentModule,
    ThreeXUiModule,
    SubscribeModule,
    ClientTypeModule,
  ],
  providers: [
    { provide: APP_GUARD, useClass: ClientTypeGuard },
    { provide: APP_GUARD, useClass: AuthGuard },
    { provide: APP_GUARD, useClass: RoleGuard },
  ],
})
export class AppModule {}
