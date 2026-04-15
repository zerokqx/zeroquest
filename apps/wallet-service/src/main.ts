/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

import cookieParser from 'cookie-parser';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.REDIS,
    options: { host: 'localhost', port: 5102 },
  });
  const globalPrefix = 'wallet-service';

  const config = new DocumentBuilder()
    .setTitle('Zeroquest Wallet-Service')
    .setVersion('1.0')
    .build();
  const port = Number(
    process.env.WALLET_SERVICE_PORT ?? process.env.PORT ?? 3000,
  );
  await app.listen();
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );
}

bootstrap();
