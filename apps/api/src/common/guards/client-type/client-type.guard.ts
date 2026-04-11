import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
} from '@nestjs/common';
import { Request } from 'express';

import { Reflector } from '@nestjs/core';
import { CLIENT_TYPE_KEY } from './client-type.decorator';

const extractClientTypeFromRequest = (req: Request): string | undefined => {
  const clientType = req.headers['x-client-type'];
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

    const request = context.switchToHttp().getRequest();
    const clientType = extractClientTypeFromRequest(request);
    this.logger.debug(`Получен заголовок x-client-type: ${clientType}`);
    if (clientType) {
      if (allowedClientTypes.includes(clientType)) {
        request.clientType = clientType;
        return true;
      }
      this.logger.warn(
        `Отклонён неподдерживаемый clientType: ${clientType}. Ожидалось: ${allowedClientTypes.join(', ')}`,
      );
      throw new BadRequestException('Invalid client type');
    }
    this.logger.warn('Запрос отклонён: отсутствует заголовок x-client-type');
    throw new BadRequestException('Client type is not defined');
  }
}
