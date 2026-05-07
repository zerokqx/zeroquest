import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import configuration, { EnvironmentVariables } from '../config/configuration';
import { CacheModule } from '@nestjs/cache-manager';
import { AuthModule } from '../domains/access/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { InboundModule } from '@/domains/network/inbound/inbound.module';
import { UserModule } from '@/domains/access/user/user.module';
import { BullModule } from '@nestjs/bullmq';
import { PaymentModule } from '@/domains/billing/payment/payment.module';
import { PlanModule } from '@/domains/billing/plan/plan.module';
import { SubscribeModule } from '@/domains/billing/subscribe/subscribe.module';
import { ClientTypeModule } from '@/domains/access/client-type/client-type.module';
import { ZeroquestConfigModule } from '@zeroquest/config';
import { ZeroquestDbModule } from '@zeroquest/db';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { ClientTypeGuard, RoleGuard } from '@zeroquest/nest-shared';
import { WalletModule } from '@/domains/billing/wallet/wallet.module';
import { ScheduleModule } from '@nestjs/schedule';
import { BillingModule } from '@/domains/billing/billing/billing.module';
import { PolicyModule } from '@/domains/content/policy/policy.module';
import { CsrfGuard } from '@/domains/security/csrf/csrf.guard';
import { CsrfModule } from '@/domains/security/csrf/csrf.module';
import { JwtAuthGuard } from '@/domains/access/auth/auth.guard';
import { ConfigService } from '@nestjs/config';
import KeyvRedis from '@keyv/redis';
import { FingerprintGuard } from '@/domains/security/fingerprint/fingerprint.guard';
import { IpInfoMiddleware } from '@/domains/network/ipinfo/ipinfo.middleware';
import { IpInfoModule } from '@/domains/network/ipinfo/ipinfo.module';
import { RedisModule } from '@/common/modules/redis.module';
import { BanModule } from '@/domains/access/ban/ban.module';
import { TotpModule } from '@/domains/security/totp/totp.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    CacheModule.registerAsync({
      inject: [ConfigService],
      isGlobal: true,
      useFactory: async (config: ConfigService<EnvironmentVariables>) => {
        const redis = config.get('redis', { infer: true });
        if (!redis?.url) {
          throw new Error('REDIS_HOST, REDIS_PORT and REDIS_URL must be set');
        }

        return {
          stores: [new KeyvRedis(redis.url)],
          ttl: 30_000,
        };
      },
    }),
    ZeroquestConfigModule.forRoot([configuration]),
    ThrottlerModule.forRoot({
      throttlers: [
        { ttl: 60000, limit: 100 },
        { ttl: 3600000, limit: 1000 },
      ],
    }),
    BullModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService<EnvironmentVariables>) => {
        const redis = config.get('redis', { infer: true });
        if (!redis?.host || !redis.port || !redis.url) {
          throw new Error('REDIS_HOST, REDIS_PORT and REDIS_URL must be set');
        }

        return {
          connection: {
            host: redis.host,
            port: redis.port,
            ...(redis.password ? { password: redis.password } : {}),
          },
        };
      },
    }),
    PlanModule,
    AuthModule,
    BanModule,
    ZeroquestDbModule,
    InboundModule,
    UserModule,
    PaymentModule,
    SubscribeModule,
    ClientTypeModule,
    WalletModule,
    BillingModule,
    PolicyModule,
    CsrfModule,
    IpInfoModule,
    RedisModule,
    TotpModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    {
      provide: APP_GUARD,
      useClass: FingerprintGuard,
    },
    {
      provide: APP_GUARD,
      useClass: CsrfGuard,
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    { provide: APP_GUARD, useClass: ClientTypeGuard },
    { provide: APP_GUARD, useClass: RoleGuard },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(IpInfoMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
