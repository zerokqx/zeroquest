import { Injectable, Logger } from '@nestjs/common';
import { Prisma, PrismaService } from '@zeroquest/db';
import { SessionEntity } from './entities/session.entity';

@Injectable()
export class SessionRepository {
  private readonly logger = new Logger(SessionRepository.name);

  constructor(private readonly prisma: PrismaService) {}

  create(
    data: Prisma.SessionCreateInput,
    options?: { tx?: Prisma.TransactionClient },
  ): Promise<SessionEntity> {
    return (options?.tx ?? this.prisma).session.create({ data });
  }

  updateById(
    id: string,
    data: Prisma.SessionUpdateInput,
  ): Promise<SessionEntity> {
    return this.prisma.session.update({
      where: { id },
      data,
    });
  }

  findById(id: string): Promise<SessionEntity | null> {
    return this.prisma.session.findUnique({ where: { id } });
  }

  deleteById(id: string): Promise<SessionEntity> {
    return this.prisma.session.delete({ where: { id } });
  }

  findManyByUserId(userId: string): Promise<SessionEntity[]> {
    this.logger.debug(`Запрошены сессии пользователя: userId=${userId}`);
    return this.prisma.session.findMany({ where: { userId } });
  }

  findOneByIdAndUserId(
    id: string,
    userId: string,
  ): Promise<SessionEntity | null> {
    this.logger.debug(`Запрошена сессия: sessionId=${id}, userId=${userId}`);
    return this.prisma.session.findUnique({
      where: { id_userId: { id, userId } },
    });
  }
}
