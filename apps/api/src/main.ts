/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { env } from 'process';
import cookieParser from 'cookie-parser';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { logger } from './logger.config';
import { SniffInterceptor } from '@zeroquest/nest-shared';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger,
  });
  const globalPrefix = 'api';
  const config = new DocumentBuilder()
    .setTitle('Zeroquest API')
    .setVersion('1.0')
    .build();
  app.setGlobalPrefix(globalPrefix);
  app.useGlobalPipes(new ValidationPipe({
    transform:true,
    whitelist:true,
  }));
  app.useGlobalInterceptors(new SniffInterceptor());
  app.use(cookieParser());
  app.enableCors();
  const port = Number(
    process.env.API_PORT ??
      process.env.BACKEND_PORT ??
      process.env.PORT ??
      3000,
  );
  app.connectMicroservice({
    transport: Transport.REDIS,
    options: {
      host: 'localhost',
      port: Number(env.REDIS_PORT),
    },
  });

  await app.startAllMicroservices();
  SwaggerModule.setup('docs', app, () =>
    SwaggerModule.createDocument(app, config),
  );
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );
}

bootstrap();
