import { Prisma } from '@/generated/prisma/client';
import { PrismaService } from '@/prisma.service';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class SubscribeRepository {
  private readonly logger = new Logger(SubscribeRepository.name);

  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.SubscribeCreateInput) {
    return this.prisma.subscribe.create({ data });
  }

  findMany(where: Prisma.SubscribeWhereInput) {
    return this.prisma.subscribe.findMany({ where });
  }

  findById(id: number) {
    return this.prisma.subscribe.findUnique({ where: { id } });
  }

  findManyByUserId(userId: string) {
    this.logger.debug(
      `Запрошен список подписок пользователя: userId=${userId}`,
    );
    return this.findMany({ userId });
  }

  findOneByIdAndUserId(id: number, userId: string) {
    this.logger.debug(`Запрошена подписка: subscribeId=${id}, userId=${userId}`);
    return this.prisma.subscribe.findUnique({
      where: {
        id_userId: { id, userId },
      },
    });
  }

  async updateByIdAndUserId(
    id: number,
    userId: string,
    data: Prisma.SubscribeUpdateInput,
  ) {
    this.logger.log(`Обновление подписки: subscribeId=${id}, userId=${userId}`);
    return this.prisma.subscribe.update({
      where: {
        id_userId: { id, userId },
      },
      data,
    });
  }

  async deleteByIdAndUserId(id: number, userId: string) {
    this.logger.log(`Удаление подписки: subscribeId=${id}, userId=${userId}`);
    return this.prisma.subscribe.delete({
      where: {
        id_userId: { id, userId },
      },
    });
  }
}
