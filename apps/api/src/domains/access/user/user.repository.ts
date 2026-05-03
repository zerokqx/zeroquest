import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Prisma, PrismaService, User } from '@zeroquest/db';

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

  async isAdmin(userId: User['id']) {
    const data = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { role: true },
    });
    if (!data) throw new NotFoundException('User not found');
    return data.role;
  }
}
