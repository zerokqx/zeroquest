import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { PrismaService } from '@/prisma.service';
import { Prisma } from '@/generated/prisma/client';
import { AuthServiceTypes } from '@zeroquest/types';
import { TokenService } from '@/token/token.service';

@Injectable()
export class SessionService {
  private readonly logger = new Logger(SessionService.name);
  constructor(
    private readonly prisma: PrismaService,

    private readonly tokenService: TokenService,
  ) {}
  async create(
    {
      refreshTokenJti,
      refreshToken,
      clientType,
      userAgentHash,
      userId,
    }: CreateSessionDto,
    options?: { tx?: Prisma.TransactionClient },
  ) {
    this.logger.debug(
      `Создание сессии: userId=${userId}, clientType=${clientType}`,
    );
    return (options?.tx ?? this.prisma).session.create({
      data: {
        user: {
          connect: { id: userId },
        },
        userAgentHash,
        refreshTokenJti: refreshTokenJti ?? '',
        refreshTokenHash: refreshToken ?? '',
        clientType: {
          connect: {
            name: clientType,
          },
        },
      },
    });
  }

  async update(id: string, updateSessionDto: UpdateSessionDto) {
    return this.prisma.session.update({
      where: { id },
      data: updateSessionDto,
    });
  }

  async remove(id: string, payload: AuthServiceTypes.JwtPayload) {
    this.logger.debug(
      `Запрошено удаление сессии: sessionId=${id}, requester=${payload.sub}`,
    );

    const session = await this.prisma.session.findUnique({ where: { id } });

    if (session && payload.jti === session.refreshTokenJti) {
      this.logger.log(`Сессия удалена: sessionId=${id}, userId=${session.userId}`);
      return await this.prisma.session.delete({ where: { id } });
    }

    this.logger.warn(
      `Удаление сессии отклонено: sessionId=${id}, requester=${payload.sub}`,
    );
    throw new UnauthorizedException();
  }

  async findAll(userId: string) {
    return this.prisma.session.findMany({ where: { userId } });
  }

  async findOne(id: string, userId: string) {
    return this.prisma.session.findUnique({ where: { id, userId } });
  }

  async findForUser(userId: string) {
    return this.prisma.session.findMany({
      where: {
        userId,
      },
    });
  }
  async findSessionByRefresh(userId: string, sid: string) {
    return this.prisma.session.findUnique({
      where: {
        userId,
        id: sid,
      },
    });
  }
}
