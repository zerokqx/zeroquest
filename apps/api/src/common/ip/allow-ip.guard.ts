import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  Logger,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import type { Request } from 'express';
import { ALLOW_IP_KEY } from './allow-ip.decorator';

const normalizeIp = (value?: string | null) => {
  if (!value) {
    return null;
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return null;
  }

  return trimmed.startsWith('::ffff:') ? trimmed.slice(7) : trimmed;
};

const getCandidateIps = (request: Request) => {
  const forwardedForHeader = request.headers['x-forwarded-for'];
  const forwardedFor = Array.isArray(forwardedForHeader)
    ? forwardedForHeader[0]
    : forwardedForHeader;

  const forwardedIps = forwardedFor
    ?.split(',')
    .map((ip) => normalizeIp(ip))
    .filter((ip): ip is string => Boolean(ip)) ?? [];

  const directIps = [request.ip, request.socket.remoteAddress]
    .map((ip) => normalizeIp(ip))
    .filter((ip): ip is string => Boolean(ip));

  return [...new Set([...forwardedIps, ...directIps])];
};

@Injectable()
export class AllowIpGuard implements CanActivate {
  private readonly logger = new Logger(AllowIpGuard.name);

  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const allowedIps = this.reflector.getAllAndOverride<string[]>(
      ALLOW_IP_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!allowedIps?.length) {
      return true;
    }

    const request = context.switchToHttp().getRequest<Request>();
    const candidateIps = getCandidateIps(request);
    const normalizedAllowedIps = allowedIps
      .map((ip) => normalizeIp(ip))
      .filter((ip): ip is string => Boolean(ip));

    const isAllowed = candidateIps.some((ip) => normalizedAllowedIps.includes(ip));

    if (!isAllowed) {
      this.logger.warn(
        `IP access denied: route=${request.originalUrl}, candidates=${candidateIps.join(', ') || 'unknown'}, allowed=${normalizedAllowedIps.join(', ')}`,
      );
      throw new ForbiddenException('IP is not allowed');
    }

    return true;
  }
}
