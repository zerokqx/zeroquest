import {type Request} from "express"
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { SessionRedisService } from './session-redis.service';
import { Observable } from 'rxjs';

export class SessionGuard implements CanActivate {
  constructor(private readonly sessionService: SessionRedisService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest<Request>()
    const user = req.user()
    const session = this.sessionService.getSession();

    return true
  }
}
