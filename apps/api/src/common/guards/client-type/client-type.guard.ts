import { PrismaService } from '@/prisma.service';
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
import { log } from 'console';

const extractClientTypeFromRequest = (req: Request): string | undefined => {
  const clientType = req.headers['x-client-type'];
  log(clientType);
  return Array.isArray(clientType) ? clientType[0] : clientType;
};

@Injectable()
export class ClientTypeGuard implements CanActivate {
  private readonly logger = new Logger(ClientTypeGuard.name);
  constructor(
    private readonly prisma: PrismaService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const allowedClientTypes = this.reflector.getAllAndOverride<string[]>(
      CLIENT_TYPE_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!allowedClientTypes?.length) {
      return true;
    }
    this.logger.debug(`Allowed client types: ${allowedClientTypes.join(', ')}`);

    const request = context.switchToHttp().getRequest();
    const clientType = extractClientTypeFromRequest(request);
    this.logger.debug(`Passed client type: ${clientType}`);
    if (clientType) {
      if (
        allowedClientTypes.includes(clientType) &&
        (await this.prisma.clientType.findUnique({
          where: { name: clientType },
        }))
      ) {
        request.clientType = clientType;
        return true;
      } else throw new BadRequestException('Invalid client type');
    }
    throw new BadRequestException('Client type is not defined');
  }
}
