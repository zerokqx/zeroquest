import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Prisma, PrismaService, User } from '@zeroquest/db';

export type FindAllUsersParams = {
  skip: number;
  take: number;
  sort: string;
  order: 'ASC' | 'DESC';
};

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

  async findAll({ skip, take, sort, order }: FindAllUsersParams) {
    const normalizedSort = sort as keyof Prisma.UserOrderByWithRelationInput;
    const normalizedOrder: Prisma.SortOrder = order === 'DESC' ? 'desc' : 'asc';

    const [data, total] = await this.prisma.$transaction([
      this.prisma.user.findMany({
        skip,
        take,
        orderBy: {
          [normalizedSort]: normalizedOrder,
        } as Prisma.UserOrderByWithRelationInput,
        include: { wallet: true, sessions: true },
      }),
      this.prisma.user.count(),
    ]);

    return { data, total };
  }

  findManyByIds(ids: User['id'][]) {
    return this.prisma.user.findMany({
      where: {
        id: {
          in: ids,
        },
      },
      include: { wallet: true, sessions: true },
    });
  }

  delete(id: User['id']) {
    return this.prisma.user.delete({ where: { id } });
  }
}
