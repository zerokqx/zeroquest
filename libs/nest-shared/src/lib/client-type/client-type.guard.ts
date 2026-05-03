import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  Logger,
} from '@nestjs/common';
import { CACHE_MANAGER, type Cache } from '@nestjs/cache-manager';
import { Reflector } from '@nestjs/core';
import { PrismaService } from '@zeroquest/db';
import type { Request } from 'express';
import { env } from 'process';

import { HEADERS_NAMES } from '@zeroquest/constants';
import { CLIENT_TYPE_KEY } from './client-type.decorator';

const extractClientTypeFromRequest = (request: Request): string | undefined => {
  const clientType = request.headers[HEADERS_NAMES.CLIENT_TYPE];
  return Array.isArray(clientType) ? clientType[0] : clientType;
};

@Injectable()
export class ClientTypeGuard implements CanActivate {
  private readonly logger = new Logger(ClientTypeGuard.name);
  private static readonly CLIENT_TYPE_CACHE_TTL_MS = 10 * 60 * 1000;
  private static readonly CLIENT_TYPE_CACHE_KEY_PREFIX = 'client-type:exists:';

  constructor(
    private readonly reflector: Reflector,
    private readonly prisma: PrismaService,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {}

  private toCacheKey(clientType: string) {
    return `${ClientTypeGuard.CLIENT_TYPE_CACHE_KEY_PREFIX}${clientType}`;
  }

  private async checkClientTypeExistence(clientType: string): Promise<boolean> {
    const cacheKey = this.toCacheKey(clientType);
    const fromCache = await this.cacheManager.get<boolean>(cacheKey);

    if (typeof fromCache === 'boolean') {
      this.logger.debug(
        `Проверка clientType из cache: clientType=${clientType}, exists=${fromCache}`,
      );
      return fromCache;
    }

    const exists = !!(await this.prisma.clientType.findUnique({
      where: { name: clientType },
      select: { id: true },
    }));

    await this.cacheManager.set(
      cacheKey,
      exists,
      ClientTypeGuard.CLIENT_TYPE_CACHE_TTL_MS,
    );

    this.logger.debug(
      `Проверка clientType из БД: clientType=${clientType}, exists=${exists}`,
    );
    return exists;
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const allowedClientTypes = this.reflector.getAllAndOverride<string[]>(
      CLIENT_TYPE_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!allowedClientTypes?.length) {
      return true;
    }

    this.logger.debug(
      `Роут ограничен типами клиентов: ${allowedClientTypes.join(', ')}`,
    );

    const request = context.switchToHttp().getRequest<Request>();
    const clientType = extractClientTypeFromRequest(request);
    this.logger.debug(`Получен заголовок x-client-type: ${clientType}`);

    if (!clientType) {
      this.logger.warn('Запрос отклонён: отсутствует заголовок x-client-type');
      throw new BadRequestException('Client type is not defined');
    }

    const clientTypeExists = await this.checkClientTypeExistence(clientType);
    if (!clientTypeExists) {
      this.logger.warn(
        `Отклонён несуществующий в БД clientType: ${clientType}`,
      );
      throw new BadRequestException('Invalid client type');
    }

    const mode = env.NODE_ENV;
    if (
      typeof mode === 'string' &&
      mode === 'development' &&
      clientType === 'swagger'
    ) {
      (request as Request & { clientType?: string }).clientType = clientType;
      return true;
    }

    if (!allowedClientTypes.includes(clientType)) {
      this.logger.warn(
        `Отклонён неподдерживаемый clientType: ${clientType}. Ожидалось: ${allowedClientTypes.join(', ')}`,
      );
      throw new BadRequestException('Invalid client type');
    }

    (request as Request & { clientType?: string }).clientType = clientType;

    return true;
  }
}
