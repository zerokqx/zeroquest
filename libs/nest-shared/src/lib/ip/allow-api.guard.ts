import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  Logger,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { isIP } from 'node:net';
import type { Request } from 'express';

import { ALLOW_IP_KEY } from './allow-ip.decorator';

const DEFAULT_TRUSTED_PROXY_IPS = ['127.0.0.1', '::1'];

const normalizeIp = (value?: string | null) => {
  if (!value) {
    return null;
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return null;
  }

  const normalized = trimmed.startsWith('::ffff:') ? trimmed.slice(7) : trimmed;
  return normalized.includes(':') ? normalized.toLowerCase() : normalized;
};

const readHeader = (headerValue: string | string[] | undefined) => {
  if (!headerValue) {
    return null;
  }

  const value = Array.isArray(headerValue) ? headerValue[0] : headerValue;
  return normalizeIp(value);
};

const readForwardedFor = (request: Request) => {
  const forwardedForHeader = request.headers['x-forwarded-for'];
  const forwardedFor = Array.isArray(forwardedForHeader)
    ? forwardedForHeader[0]
    : forwardedForHeader;

  if (!forwardedFor) {
    return null;
  }

  const firstIp = forwardedFor.split(',')[0];
  return normalizeIp(firstIp);
};

const toIpv4Int = (ip: string) =>
  ip.split('.').reduce((acc, part) => (acc << 8) + Number(part), 0) >>> 0;

const toIpv4BigInt = (ip: string) => BigInt(toIpv4Int(ip));

const expandIpv6Token = (token: string): string[] | null => {
  if (!token.includes('.')) {
    return [token];
  }

  if (isIP(token) !== 4) {
    return null;
  }

  const v4 = toIpv4Int(token);
  return [((v4 >>> 16) & 0xffff).toString(16), (v4 & 0xffff).toString(16)];
};

const toExpandedIpv6Parts = (ip: string): string[] | null => {
  const segments = ip.split('::');
  if (segments.length > 2) {
    return null;
  }

  const parseSegment = (segment: string) => {
    if (!segment) {
      return [] as string[];
    }

    const raw = segment.split(':');
    if (raw.some((part) => part.length === 0)) {
      return null;
    }

    const expanded = raw
      .map((part) => expandIpv6Token(part))
      .flatMap((parts) => parts ?? []);

    if (raw.some((part) => expandIpv6Token(part) === null)) {
      return null;
    }

    return expanded;
  };

  const head = parseSegment(segments[0] ?? '');
  if (head === null) {
    return null;
  }

  if (segments.length === 1) {
    return head.length === 8 ? head : null;
  }

  const tail = parseSegment(segments[1] ?? '');
  if (tail === null) {
    return null;
  }

  const missing = 8 - (head.length + tail.length);
  if (missing < 1) {
    return null;
  }

  return [...head, ...Array(missing).fill('0'), ...tail];
};

const toIpv6BigInt = (ip: string): bigint | null => {
  const parts = toExpandedIpv6Parts(ip);
  if (!parts) {
    return null;
  }

  let value = 0n;

  for (const part of parts) {
    const parsed = Number.parseInt(part, 16);
    if (!Number.isFinite(parsed) || parsed < 0 || parsed > 0xffff) {
      return null;
    }

    value = (value << 16n) + BigInt(parsed);
  }

  return value;
};

const isInCidr = (ip: string, cidr: string) => {
  const [networkIp, prefixRaw] = cidr.split('/');
  if (!networkIp || !prefixRaw) {
    return false;
  }

  const normalizedNetworkIp = normalizeIp(networkIp);
  if (!normalizedNetworkIp) {
    return false;
  }

  const version = isIP(normalizedNetworkIp);
  if (version !== 4 && version !== 6) {
    return false;
  }

  if (isIP(ip) !== version) {
    return false;
  }

  const prefix = Number.parseInt(prefixRaw, 10);
  const maxPrefix = version === 4 ? 32 : 128;
  if (!Number.isInteger(prefix) || prefix < 0 || prefix > maxPrefix) {
    return false;
  }

  const ipValue = version === 4 ? toIpv4BigInt(ip) : toIpv6BigInt(ip);
  const networkValue =
    version === 4
      ? toIpv4BigInt(normalizedNetworkIp)
      : toIpv6BigInt(normalizedNetworkIp);

  if (ipValue === null || networkValue === null) {
    return false;
  }

  const bits = BigInt(maxPrefix);
  const prefixBits = BigInt(prefix);
  const mask =
    prefix === 0
      ? 0n
      : ((1n << bits) - 1n) ^ ((1n << (bits - prefixBits)) - 1n);

  return (ipValue & mask) === (networkValue & mask);
};

const matchesAllowed = (candidateIp: string, allowedIp: string) => {
  if (allowedIp.includes('/')) {
    return isInCidr(candidateIp, allowedIp);
  }

  return candidateIp === allowedIp;
};

@Injectable()
export class AllowApiGuard implements CanActivate {
  private readonly logger = new Logger(AllowApiGuard.name);

  constructor(
    protected readonly reflector: Reflector,
    protected readonly configService: ConfigService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const nodeEnv = this.configService.get<string>('NODE_ENV');
    const appIsProduction =
      this.configService.get<boolean>('app.isProduction') === true;
    const isProduction = nodeEnv === 'production' || appIsProduction;

    if (!isProduction) {
      return true;
    }

    const allowedIps = this.reflector.getAllAndOverride<string[]>(
      ALLOW_IP_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!allowedIps?.length) {
      return true;
    }

    const request = context.switchToHttp().getRequest<Request>();
    const remoteIp = normalizeIp(request.socket.remoteAddress);
    const trustedProxyIps = (
      this.configService.get<string>('ALLOW_API_TRUSTED_PROXIES') ??
      DEFAULT_TRUSTED_PROXY_IPS.join(',')
    )
      .split(',')
      .map((ip) => normalizeIp(ip))
      .filter((ip): ip is string => Boolean(ip));
    const isTrustedProxy =
      remoteIp !== null && trustedProxyIps.includes(remoteIp);

    const proxyCandidateIps = isTrustedProxy
      ? [
          readHeader(request.headers['x-real-ip']),
          readForwardedFor(request),
          readHeader(request.headers['cf-connecting-ip']),
        ]
      : [];

    const directCandidateIps = [
      normalizeIp(request.ip),
      normalizeIp(request.socket.remoteAddress),
    ];

    const candidateIps = [...new Set([...proxyCandidateIps, ...directCandidateIps])]
      .filter((ip): ip is string => Boolean(ip));

    const normalizedAllowedIps = allowedIps
      .map((ip) => normalizeIp(ip))
      .filter((ip): ip is string => Boolean(ip));

    const isAllowed = candidateIps.some((candidateIp) =>
      normalizedAllowedIps.some((allowedIp) =>
        matchesAllowed(candidateIp, allowedIp),
      ),
    );

    if (!isAllowed) {
      this.logger.warn(
        `API access denied by IP: route=${request.originalUrl}, candidates=${candidateIps.join(', ') || 'unknown'}, allowed=${normalizedAllowedIps.join(', ')}, remote=${remoteIp ?? 'unknown'}, trustedProxy=${isTrustedProxy}`,
      );
      throw new ForbiddenException('IP is not allowed');
    }

    return true;
  }
}
