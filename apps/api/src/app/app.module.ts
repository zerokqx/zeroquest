import { Module } from '@nestjs/common';
import configuration from '../config/configuration';
import { CacheModule } from '@nestjs/cache-manager';
import { AuthModule } from '../auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
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
import { ZeroquestConfigModule } from '@zeroquest/config';
import { ZeroquestDbModule } from '@zeroquest/db';
import {
  AuthGuard,
  ClientTypeGuard,
  RoleGuard,
} from '@zeroquest/nest-shared';

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
    }),
    ZeroquestConfigModule.forRoot([configuration]),
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
    ZeroquestDbModule,
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
