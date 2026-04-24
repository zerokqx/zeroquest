import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import configuration from '../config/configuration';
import { CacheModule } from '@nestjs/cache-manager';
import { AuthModule } from '../domains/access/auth/auth.module';
import { APP_GUARD, APP_INTERCEPTOR, Reflector } from '@nestjs/core';
import { InboundModule } from '@/domains/network/inbound/inbound.module';
import { UserModule } from '@/domains/access/user/user.module';
import { BullModule } from '@nestjs/bullmq';
import { QueueModule } from '@/queue.module';
import { PaymentModule } from '@/domains/billing/payment/payment.module';
import { PlanModule } from '@/domains/billing/plan/plan.module';
import { ThreeXUiModule } from '@/domains/network/three-x-ui/three-x-ui.module';
import { SubscribeModule } from '@/domains/billing/subscribe/subscribe.module';
import { ClientTypeModule } from '@/domains/access/client-type/client-type.module';
import { ZeroquestConfigModule } from '@zeroquest/config';
import { ZeroquestDbModule } from '@zeroquest/db';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { AuthGuard, ClientTypeGuard, RoleGuard } from '@zeroquest/nest-shared';
import { WalletModule } from '@/domains/billing/wallet/wallet.module';
import { ScheduleModule } from '@nestjs/schedule';
import { BillingModule } from '@/domains/billing/billing/billing.module';
import { PolicyModule } from '@/domains/content/policy/policy.module';
import { CsrfGuard } from '@/domains/access/auth/csrf.guard';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    CacheModule.register({
      isGlobal: true,
    }),
    ZeroquestConfigModule.forRoot([configuration]),
    ThrottlerModule.forRoot({
      throttlers: [
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
    BillingModule,
    PolicyModule,
  ],
  providers: [
    {
    provide: APP_GUARD,
    useClass: CsrfGuard
    },
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
