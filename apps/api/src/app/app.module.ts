import { Module } from '@nestjs/common';
import configuration from '../config/configuration';
import { CacheModule } from '@nestjs/cache-manager';
import { AuthModule } from '../auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
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
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { AuthGuard, ClientTypeGuard, RoleGuard } from '@zeroquest/nest-shared';
import { WalletModule } from '@/wallet/wallet.module';

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
    }),
    ZeroquestConfigModule.forRoot([configuration]),
    ThrottlerModule.forRoot({
      throttlers: [
        { ttl: 1000, limit: 5 },
        { ttl: 60000, limit: 100 },
        { ttl: 3600000, limit: 1000 },
      ],
    }),
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
    WalletModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    { provide: APP_GUARD, useClass: ClientTypeGuard },
    { provide: APP_GUARD, useClass: AuthGuard },
    { provide: APP_GUARD, useClass: RoleGuard },
  ],
})
export class AppModule {}
