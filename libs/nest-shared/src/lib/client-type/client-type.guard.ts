import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import type { Request } from 'express';

import { CLIENT_TYPE_KEY } from './client-type.decorator';
import { env } from 'process';

const extractClientTypeFromRequest = (request: Request): string | undefined => {
  const clientType = request.headers['x-client-type'];
  return Array.isArray(clientType) ? clientType[0] : clientType;
};

@Injectable()
export class ClientTypeGuard implements CanActivate {
  private readonly logger = new Logger(ClientTypeGuard.name);

  constructor(private readonly reflector: Reflector) {}

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

    const mode = env.NODE_ENV;
    if (
      typeof mode === 'string' &&
      mode === 'development' &&
      clientType === 'swager'
    )
      return true;
    if (!clientType) {
      this.logger.warn('Запрос отклонён: отсутствует заголовок x-client-type');
      throw new BadRequestException('Client type is not defined');
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
