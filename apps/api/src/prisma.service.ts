import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from '@/config/configuration';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(config: ConfigService<EnvironmentVariables>) {
    const adapter = new PrismaPg({
      connectionString: config.get('postgres')?.url,
    });
    super({ adapter });
  }
}
