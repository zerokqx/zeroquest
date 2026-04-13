import { Prisma, UserRole } from '@/generated/prisma/client';
import { PrismaService } from '@/prisma.service';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AuthRepository {
  private readonly logger = new Logger(AuthRepository.name);

  constructor(private readonly prisma: PrismaService) {}

  transaction<T>(callback: (tx: Prisma.TransactionClient) => Promise<T>) {
    return this.prisma.$transaction(callback);
  }

  findUserByLogin(login: string) {
    this.logger.debug(`Поиск пользователя для входа: login=${login}`);
    return this.prisma.user.findUnique({
      where: { login },
    });
  }

  findUserLoginByLogin(login: string) {
    this.logger.debug(`Проверка доступности логина: login=${login}`);
    return this.prisma.user.findUnique({
      select: { login: true },
      where: { login },
    });
  }

  createUser(
    data: Prisma.UserCreateInput,
    options?: { tx?: Prisma.TransactionClient },
  ) {
    return (options?.tx ?? this.prisma).user.create({ data });
  }

  findSessionForRefresh(id: string) {
    this.logger.debug(`Поиск сессии для refresh: sessionId=${id}`);
    return this.prisma.session.findUnique({
      where: { id },
      include: { clientType: true, user: { select: { role: true } } },
    });
  }

  updateSessionRefreshData(
    id: string,
    data: Pick<Prisma.SessionUpdateInput, 'refreshTokenHash' | 'refreshTokenJti'>,
    options?: { tx?: Prisma.TransactionClient },
  ) {
    return (options?.tx ?? this.prisma).session.update({
      where: { id },
      data,
    });
  }

  updateSessionRefreshDataIfJtiMatches(
    id: string,
    refreshTokenJti: string,
    data: Pick<Prisma.SessionUpdateManyMutationInput, 'refreshTokenHash' | 'refreshTokenJti'>,
  ) {
    return this.prisma.session.updateMany({
      where: {
        id,
        refreshTokenJti,
      },
      data,
    });
  }
}
