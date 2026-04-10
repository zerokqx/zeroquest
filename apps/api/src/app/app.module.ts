import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from '../config/configuration';

import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '../auth/auth.module';
import { PrismaModule } from '@/prisma.module';
import { APP_GUARD } from '@nestjs/core';
import { ClientTypeGuard } from '@/common/guards/client-type/client-type.guard';
import { AuthGuard } from '@/auth/auth.guard';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { env } from 'process';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env', '.env.example'],
      load: [configuration],
    }),
    ClientsModule.register([
      {
        name: 'JWT_SERVICE',
        transport: Transport.REDIS,
        options: {
          host: 'localhost',
          port: Number(env.REDIS_PORT),
        },
      },
    ]),
    AuthModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_GUARD, useClass: ClientTypeGuard },
    { provide: APP_GUARD, useClass: AuthGuard },
  ],
})
export class AppModule {}
