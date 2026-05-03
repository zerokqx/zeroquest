import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { HEADERS_NAMES } from '@zeroquest/constants';
import { CustomRequest } from '@zeroquest/types';
import { SKIP_FINGERPRINT_KEY } from './fingerprint.decorator';

const getFingerprintHeader = (req: CustomRequest): string | undefined => {
  const header = req.get(HEADERS_NAMES.FINGERPRINT)?.trim();
  return header || undefined;
};

@Injectable()
export class FingerprintGuard implements CanActivate {
  private readonly logger = new Logger(FingerprintGuard.name);

  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const isFingerprintSkipped = this.reflector.getAllAndOverride<boolean>(
      SKIP_FINGERPRINT_KEY,
      [context.getHandler(), context.getClass()],
    );

    const req = context.switchToHttp().getRequest<CustomRequest>();
    if (req.method === 'OPTIONS') {
      return true;
    }

    const fingerprint = getFingerprintHeader(req);
    if (fingerprint) {
      req.fingerprint = fingerprint;
    }

    if (isFingerprintSkipped) {
      return true;
    }

    if (!fingerprint) {
      this.logger.warn(
        `Missing ${HEADERS_NAMES.FINGERPRINT} for ${req.method} ${req.originalUrl}`,
      );
      throw new UnauthorizedException('Not found fingerprint header');
    }

    return true;
  }
}
