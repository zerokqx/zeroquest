import { Injectable, Logger } from '@nestjs/common';
import { Prisma, PrismaService } from '@zeroquest/db';

@Injectable()
export class SessionRepository {
  private readonly logger = new Logger(SessionRepository.name);

  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.SessionCreateInput, options?: { tx?: Prisma.TransactionClient }) {
    return (options?.tx ?? this.prisma).session.create({ data });
  }

  updateById(id: string, data: Prisma.SessionUpdateInput) {
    return this.prisma.session.update({
      where: { id },
      data,
    });
  }

  findById(id: string) {
    return this.prisma.session.findUnique({ where: { id } });
  }

  deleteById(id: string) {
    return this.prisma.session.delete({ where: { id } });
  }

  findManyByUserId(userId: string) {
    this.logger.debug(`Запрошены сессии пользователя: userId=${userId}`);
    return this.prisma.session.findMany({ where: { userId } });
  }

  findOneByIdAndUserId(id: string, userId: string) {
    this.logger.debug(`Запрошена сессия: sessionId=${id}, userId=${userId}`);
    return this.prisma.session.findUnique({
      where: { id_userId: { id, userId } },
    });
  }
}
