import type { Request } from 'express';
import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { BanService } from './ban.service';
import { RESPONSE_CODES } from '@zeroquest/constants';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '@zeroquest/nest-shared';

@Injectable()
export class BanGuard implements CanActivate {
  constructor(
    private readonly banService: BanService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }
    const req = context.switchToHttp().getRequest<Request>();

    if (!req.user) throw new UnauthorizedException('dawdaw');
    const isBanned = await this.banService.isBanned(req.user.id);
    if (isBanned)
      throw new ForbiddenException({
        message: 'You are banned',
        code: RESPONSE_CODES.BANNED,
      });

    return true;
  }
}
