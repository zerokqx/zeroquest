import { Injectable, Logger } from '@nestjs/common';
import { Prisma, PrismaService, Subscribe, User } from '@zeroquest/db';

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

  findMany(where: Prisma.SubscribeWhereInput){
    return this.prisma.subscribe.findMany({
      where,
    });
  }

  findById(id: Subscribe['id']){
    return this.prisma.subscribe.findUnique({
      where: { id },
      include: {
        plan: true,
      },
    });
  }

  findManyByUserId(userId: User['id'])  {
    this.logger.debug(
      `Запрошен список подписок пользователя: userId=${userId}`,
    );
    return this.findMany({ userId });
  }

  findOneByIdAndUserId(
    id: Subscribe['id'],
    userId: User['id'],
  ) {
    this.logger.debug(
      `Запрошена подписка: subscribeId=${id}, userId=${userId}`,
    );
    return this.prisma.subscribe.findUnique({
      where: {
        id_userId: { id, userId },
      },
    });
  }

  async update(data: Prisma.SubscribeUpdateArgs)  {
    return this.prisma.subscribe.update(data);
  }

  async updateByIdAndUserId(
    id: Subscribe['id'],
    userId: User['id'],
    data: Prisma.SubscribeUpdateInput,
    opts?: Options,
  ) {
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
  ) {
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
  )  {
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
  )  {
    return this.prisma.subscribe.update({
      where: { id },
      data: {
        status,
      }, });
  }
}
