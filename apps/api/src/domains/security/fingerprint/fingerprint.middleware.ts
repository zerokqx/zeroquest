import { NextFunction, Request, Response } from 'express';
import {
  Injectable,
  Logger,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { HEADERS_NAMES } from '@zeroquest/constants';
import { CustomRequest } from '@zeroquest/types';

const getFingerPrint = (req: Request): string | undefined => {
  const header = req.get(HEADERS_NAMES.FINGERPRINT)?.trim();
  return header || undefined;
};

@Injectable()
export class FingerprintMiddleware implements NestMiddleware {
  private readonly logger = new Logger(FingerprintMiddleware.name);

  use(req: CustomRequest, _res: Response, next: NextFunction) {
    if (req.method === 'OPTIONS') {
      next();
      return;
    }

    const fingerprint = getFingerPrint(req);
    if (!fingerprint) {
      this.logger.warn(
        `Missing ${HEADERS_NAMES.FINGERPRINT} for ${req.method} ${req.originalUrl}`,
      );
      throw new UnauthorizedException('Not found fingerprint header');
    }

    req.fingerprint = fingerprint;
    next();
  }
}
