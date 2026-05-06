import { type Request } from 'express';
import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { SessionService } from './session.service';
import { AuthServiceTypes } from '@zeroquest/types';
import { Session } from './dto/schemas/session.schema';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '@zeroquest/nest-shared';
import { RESPONSE_CODES } from '@zeroquest/constants';

/**
 * @description Должен вызываться после `auth.guard` что бы получить `req.user`
 */
@Injectable()
export class SessionGuard implements CanActivate {
  private readonly logger = new Logger(SessionGuard.name);
  constructor(
    private readonly sessionService: SessionService,
    private readonly reflector: Reflector,
  ) {}

  validateToken(
    session: Session,
    { type, ct, jti, sid, sub }: AuthServiceTypes.JwtPayloadSchemaType,
  ) {
    if (type === 'access') {
      return (
        session.ajti === jti &&
        session.ct === ct &&
        session.uid === sub &&
        session.sid === sid
      );
    }

    if (type === 'refresh') {
      return (
        session.rjti === jti &&
        session.ct === ct &&
        session.uid === sub &&
        session.sid === sid
      );
    }

    throw new BadRequestException('Token type is not defined');
  }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }
    const req = context.switchToHttp().getRequest<Request>();

    this.logger.debug(req.user);
    if (!req.user) throw new UnauthorizedException('User id not defined');

    const session = await this.sessionService.getSession(req.user.sid);
    if (!session)
      throw new ForbiddenException({
        message: 'Session is not defined',
        code: RESPONSE_CODES.SESSION_NOT_EXISTS,
      });

    if (!this.validateToken(session, req.user))
      throw new UnauthorizedException();

    this.logger.debug(`Успешная валидация сессии sid=${session.sid}`);
    return true;
  }
}
