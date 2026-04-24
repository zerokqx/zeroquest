import { Injectable, Logger } from '@nestjs/common';
import { Prisma, PrismaService } from '@zeroquest/db';

@Injectable()
export class UserRepository {
  private readonly logger = new Logger(UserRepository.name);

  constructor(private readonly prisma: PrismaService) {}

  findById<T extends Prisma.UserFindUniqueArgs>(
    data: Prisma.SelectSubset<T, Prisma.UserFindUniqueArgs>,
  ) {
    this.logger.debug(`Запрошен пользователь: userId=${data.where.id}`);
    return this.prisma.user.findUnique<T>(data);
  }

  updateById<T extends Prisma.UserUpdateArgs>(
    data: Prisma.SelectSubset<T, Prisma.UserUpdateArgs>,
  ) {
    this.logger.log(`Обновление пользователя: userId=${data.where.id}`);
    return this.prisma.user.update<T>(data);
  }
}
