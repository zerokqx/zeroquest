/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import {
  ClassSerializerInterceptor,
  Logger,
  ValidationPipe,
} from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app/app.module';
import cookieParser from 'cookie-parser';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { logger } from './logger.config';
import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from './config/configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger,
  });
  const config = app.get<ConfigService<EnvironmentVariables>>(ConfigService);
  const appConfig = config.getOrThrow('app', { infer: true });
  const globalPrefix = appConfig.globalPrefix;
  const isProduction = appConfig.isProduction;
  const swaggerEnabled = appConfig.swaggerEnabled;
  const corsOrigins = appConfig.corsOrigins;

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
  const backend = config.get('backend', { infer: true });
  const port = Number(backend?.port ?? 3000);
  if (!isProduction && swaggerEnabled) {
    const config = new DocumentBuilder()
      .setTitle('Zeroquest API')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
  }
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  const host = backend?.host ?? '127.0.0.1';
  await app.listen(port, host);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );
}

bootstrap();
