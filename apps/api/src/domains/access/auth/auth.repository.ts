import { Injectable, Logger } from '@nestjs/common';
import { Prisma, PrismaService, User } from '@zeroquest/db';

@Injectable()
export class AuthRepository {
  private readonly logger = new Logger(AuthRepository.name);

  constructor(private readonly prisma: PrismaService) {}

  transaction<T>(callback: (tx: Prisma.TransactionClient) => Promise<T>) {
    return this.prisma.$transaction(callback);
  }

  findUserById(id: User['id']) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
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
      include: { clientType: true, user: true },
    });
  }

  updateSessionTokensDataIfJtiMatches(
    id: string,
    refreshTokenJti: string,
    data: Pick<
      Prisma.SessionUpdateManyMutationInput,
      'refreshTokenHash' | 'refreshTokenJti' | 'accessTokenJti'
    >,
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
