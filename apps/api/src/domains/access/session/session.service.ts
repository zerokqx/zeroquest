import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { AuthServiceTypes } from '@zeroquest/types';
import { SessionRepository } from './session.repository';
import { Prisma, PrismaService } from '@zeroquest/db';
import { TokenService } from '@/domains/access/token/token.service';
import { IpInfoService } from '@/domains/network/ipinfo/ipinfo.service';
import Redis from 'ioredis';

@Injectable()
export class SessionService {
  private readonly logger = new Logger(SessionService.name);
  private static readonly MIN_DELETE_SESSION_AGE_MS = 60_000;
  constructor(
    private readonly redis: Redis,
    private readonly sessionRepository: SessionRepository,
    private readonly prisma: PrismaService,
    private readonly tokenService: TokenService,
    private readonly ipInfoService: IpInfoService,
  ) {}
  async create(
    {
      refreshTokenJti,
      refreshToken,
      clientType,
      userAgentHash,
      ip,
      userId,
    }: CreateSessionDto,
    options?: { tx?: Prisma.TransactionClient },
  ) {
    await this.redis.set('pisun', 'pisun', 'EX', 60);
    this.logger.debug(
      `Создание сессии: userId=${userId}, clientType=${clientType}`,
    );

    this.logger.debug({
      refreshTokenJti,
      refreshToken,
      clientType,
      userAgentHash,
      ip,
      userId,
    });
    const ipInfo = await this.ipInfoService.lookupIp(ip);

    if (!ipInfo) {
      this.logger.warn(`Ip '${ip}' не был распознан`);
    }

    return this.sessionRepository.create(
      {
        user: {
          connect: { id: userId },
        },
        expriesAt: new Date(),

        ...(ipInfo !== null && {
          ip: {
            connectOrCreate: {
              where: { ip },
              create: {
                ip,
                rangeLow: ipInfo.range[0],
                rangeHigh: ipInfo.range[1],
                country: ipInfo.country,
                region: ipInfo.region,
                eu: ipInfo.eu === '1',
                timezone: ipInfo.timezone,
                city: ipInfo.city,
                ll: ipInfo.ll,
                metro: ipInfo.metro,
                area: ipInfo.area,
              },
            },
          },
        }),

        userAgentHash,
        accessTokenJti: '',
        refreshTokenJti: refreshTokenJti ?? '',
        refreshTokenHash: refreshToken ?? '',
        clientType: {
          connect: {
            name: clientType,
          },
        },
      },
      options,
    );
  }

  async update(id: string, updateSessionDto: UpdateSessionDto) {
    return this.sessionRepository.updateById(id, updateSessionDto);
  }

  async remove(id: string, payload: AuthServiceTypes.JwtPayload) {
    this.logger.debug(
      `Запрошено удаление сессии: sessionId=${id}, requester=${payload.sub}`,
    );

    const session = await this.sessionRepository.findOneByIdAndUserId(
      id,
      payload.sub,
    );
    if (!session) {
      this.logger.warn(
        `Сессия не найдена или недоступна: sessionId=${id}, requester=${payload.sub}`,
      );
      throw new NotFoundException('Session not found');
    }

    const currentSession = await this.sessionRepository.findOneByIdAndUserId(
      payload.sid,
      payload.sub,
    );
    if (!currentSession) {
      this.logger.warn(
        `Удаление сессии отклонено: текущая refresh-сессия не найдена (sid=${payload.sid}), requester=${payload.sub}`,
      );
      throw new UnauthorizedException('Session not found for refresh context');
    }

    const ageMs = Date.now() - currentSession.createdAt.getTime();
    if (ageMs < SessionService.MIN_DELETE_SESSION_AGE_MS) {
      this.logger.warn(
        `Удаление сессии отклонено: текущая сессия слишком новая (${ageMs}ms), requester=${payload.sub}, currentSessionId=${currentSession.id}, targetSessionId=${id}`,
      );
      throw new BadRequestException(
        'Session can be deleted only after 1 minute in current session',
      );
    }

    const removeKeys: Promise<boolean>[] = [
      ...(session.refreshTokenJti
        ? [
            this.tokenService.removeTrackedToken({
              sub: session.userId,
              sid: session.id,
              jti: session.refreshTokenJti,
              type: 'refresh',
            }),
          ]
        : []),
      ...(session.accessTokenJti
        ? [
            this.tokenService.removeTrackedToken({
              sub: session.userId,
              sid: session.id,
              jti: session.accessTokenJti,
              type: 'access',
            }),
          ]
        : []),
    ];

    await Promise.all(removeKeys);

    this.logger.log(
      `Сессия удалена: sessionId=${id}, userId=${session.userId}, accessRevoked=${Boolean(session.accessTokenJti)}, refreshRevoked=${Boolean(session.refreshTokenJti)}`,
    );
    return await this.sessionRepository.deleteById(id);
  }

  async findAll(userId: string) {
    return this.sessionRepository.findManyByUserId(userId);
  }

  async findOne(id: string, userId: string) {
    const session = await this.sessionRepository.findOneByIdAndUserId(
      id,
      userId,
    );
    if (!session) throw new NotFoundException('Session not found');

    return session;
  }

  async findForUser(userId: string) {
    return this.sessionRepository.findManyByUserId(userId);
  }
  async findSessionByRefresh(userId: string, sid: string) {
    const session = await this.sessionRepository.findOneByIdAndUserId(
      sid,
      userId,
    );
    if (!session)
      throw new UnauthorizedException('Session not found for refresh context');

    return session;
  }

  async removeByRefreshHash(sid: string, userId: string) {
    return this.prisma.session.delete({
      where: {
        id_userId: { id: sid, userId },
      },
    });
  }
}
