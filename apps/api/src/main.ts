/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import {
  ClassSerializerInterceptor,
  Logger,
  ValidationPipe,
} from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { env } from 'process';
import cookieParser from 'cookie-parser';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { logger } from './logger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger,
  });
  const globalPrefix = 'api';
  const isProduction = process.env.NODE_ENV === 'production';
  const swaggerEnabled = process.env.SWAGGER_ENABLED === 'true';
  const corsOrigins = (
    process.env.CORS_ORIGINS ??
    'http://localhost:4200,http://127.0.0.1:4200,http://localhost:80,http://127.0.0.1:80'
  )
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);

  app.setGlobalPrefix(globalPrefix);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );
  app.use(cookieParser());
  app.enableCors({
    origin: corsOrigins,
    credentials: true,
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'x-client-type',
      'x-csrf-token',
      'X-Requested-With',
    ],
  });
  const port = Number(
    process.env.API_PORT ??
      process.env.BACKEND_PORT ??
      process.env.PORT ??
      3000,
  );
  // app.connectMicroservice({
  //   transport: Transport.REDIS,
  //   options: {
  //     host: 'localhost',
  //     port: Number(env.REDIS_PORT),
  //   },
  // });

  // await app.startAllMicroservices();
  if (!isProduction && swaggerEnabled) {
    const config = new DocumentBuilder()
      .setTitle('Zeroquest API')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
  }
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );
}

bootstrap();
