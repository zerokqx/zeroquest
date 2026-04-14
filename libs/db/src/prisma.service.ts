import { Injectable } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from './generated/client';
import { DbEnvironmentVariables } from './config/configuration';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(config: ConfigService<DbEnvironmentVariables>) {
    const adapter = new PrismaPg({
      connectionString: config.getOrThrow('postgres', { infer: true }).url,
    });
    super({ adapter });
  }
}
