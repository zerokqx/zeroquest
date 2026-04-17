import { Injectable, Logger } from '@nestjs/common';
import { Prisma, PrismaService, Subscribe, User } from '@zeroquest/db';
import { SubscribeEntity } from './entities/subscribe.entity';
import { SubscribeOmit } from 'node_modules/@zeroquest/db/src/generated/models';

export interface Options {
  tx?: Prisma.TransactionClient;
}

@Injectable()
export class SubscribeRepository {
  private readonly logger = new Logger(SubscribeRepository.name);

  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.SubscribeCreateInput, opts?: Options) {
    return (opts?.tx ?? this.prisma).subscribe.create({ data });
  }

  findMany(where: Prisma.SubscribeWhereInput): Promise<SubscribeEntity[]> {
    return this.prisma.subscribe.findMany({
      where,
    });
  }

  findById(id: Subscribe['id']): Promise<SubscribeEntity | null> {
    return this.prisma.subscribe.findUnique({
      where: { id },
      include: {
        plan: true,
      },
    });
  }

  findManyByUserId(userId: User['id']): Promise<SubscribeEntity[]> {
    this.logger.debug(
      `Запрошен список подписок пользователя: userId=${userId}`,
    );
    return this.findMany({ userId });
  }

  findOneByIdAndUserId(
    id: Subscribe['id'],
    userId: User['id'],
  ): Promise<SubscribeEntity | null> {
    this.logger.debug(
      `Запрошена подписка: subscribeId=${id}, userId=${userId}`,
    );
    return this.prisma.subscribe.findUnique({
      where: {
        id_userId: { id, userId },
      },
    });
  }

  async update(data: Prisma.SubscribeUpdateArgs): Promise<SubscribeEntity> {
    return this.prisma.subscribe.update(data);
  }

  async updateByIdAndUserId(
    id: Subscribe['id'],
    userId: User['id'],
    data: Prisma.SubscribeUpdateInput,
    opts?: Options,
  ): Promise<SubscribeEntity> {
    this.logger.log(`Обновление подписки: subscribeId=${id}, userId=${userId}`);
    return (opts?.tx ?? this.prisma).subscribe.update({
      where: {
        id_userId: { id, userId },
      },
      data,
    });
  }

  async deleteByIdAndUserId(
    id: Subscribe['id'],
    userId: User['id'],
  ): Promise<SubscribeEntity | null> {
    this.logger.log(`Удаление подписки: subscribeId=${id}, userId=${userId}`);
    return this.prisma.subscribe.delete({
      where: {
        id_userId: { id, userId },
      },
    });
  }

  async changeNextPaymentDate(
    id: Subscribe['id'],
    date: Date,
  ): Promise<SubscribeEntity> {
    return this.prisma.subscribe.update({
      where: { id },
      data: {
        nextPaymentDate: date,
      },
    });
  }
  async changeStatus(
    id: Subscribe['id'],
    status: Subscribe['status'],
  ): Promise<SubscribeEntity> {
    return this.prisma.subscribe.update({
      where: { id },
      data: {
        status,
      },
    });
  }
}
