import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { HEADERS_NAMES } from '@zeroquest/constants';
import { getRequestHeader } from '@zeroquest/nest-shared';
import { CustomRequest } from '@zeroquest/types';
import { EnvironmentVariables } from '@/config/configuration';
import { SKIP_FINGERPRINT_KEY } from './fingerprint.decorator';

const getFingerprintHeader = (req: CustomRequest): string | undefined => {
  return getRequestHeader(req, HEADERS_NAMES.FINGERPRINT);
};

@Injectable()
export class FingerprintGuard implements CanActivate {
  private readonly logger = new Logger(FingerprintGuard.name);
  private readonly isDev: boolean;
  private readonly swaggerEnabled: boolean;

  constructor(
    private readonly reflector: Reflector,
    private readonly config: ConfigService<EnvironmentVariables>,
  ) {
    const appConfig = this.config.getOrThrow('app', { infer: true });
    this.isDev = !appConfig.isProduction;
    this.swaggerEnabled = appConfig.swaggerEnabled;
  }

  canActivate(context: ExecutionContext): boolean {
    const isFingerprintSkipped = this.reflector.getAllAndOverride<boolean>(
      SKIP_FINGERPRINT_KEY,
      [context.getHandler(), context.getClass()],
    );

    const req = context.switchToHttp().getRequest<CustomRequest>();
    if (req.method === 'OPTIONS') {
      return true;
    }

    const clientType = getRequestHeader(req, HEADERS_NAMES.CLIENT_TYPE);
    if (this.isDev && this.swaggerEnabled && clientType === 'swagger') {
      this.logger.debug("Swagger client type")
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
