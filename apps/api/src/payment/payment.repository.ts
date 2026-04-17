import { Injectable, Logger } from '@nestjs/common';
import { Prisma, PrismaService } from '@zeroquest/db';
import { PaymentEntity } from './entities/payment.entity';

@Injectable()
export class PaymentRepository {
  private readonly logger = new Logger(PaymentRepository.name);
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.PaymentCreateInput): Promise<PaymentEntity> {
    return this.prisma.payment.create({ data });
  }

  findByProviderPaymentId(
    providerPaymentId: string,
    include?: Prisma.PaymentInclude,
  ): Promise<PaymentEntity | null> {
    this.logger.debug(
      `Поиск платежа по providerPaymentId: providerPaymentId=${providerPaymentId}`,
    );
    return this.prisma.payment.findUnique({
      where: { providerPaymentId },
      include,
    });
  }

  updateById(
    id: number,
    data: Prisma.PaymentUpdateInput,
  ): Promise<PaymentEntity> {
    return this.prisma.payment.update({ where: { id }, data });
  }
  updateByProviderPaymentId(
    providerPaymentId: string,
    data: Prisma.PaymentUpdateInput,
  ): Promise<PaymentEntity> {
    this.logger.log(
      `Обновление платежа по providerPaymentId: providerPaymentId=${providerPaymentId}, status=${data.status ?? 'unchanged'}`,
    );
    return this.prisma.payment.update({
      where: {
        providerPaymentId,
      },
      data,
    });
  }

  findMany(where: Prisma.PaymentWhereInput): Promise<PaymentEntity[]> {
    return this.prisma.payment.findMany({ where });
  }

  findById(id: number): Promise<PaymentEntity | null> {
    return this.prisma.payment.findUnique({ where: { id } });
  }

  findManyByUserId(
    userId: string,
    predicate?: Omit<Prisma.PaymentWhereInput, 'userId'>,
  ): Promise<PaymentEntity[]> {
    this.logger.debug(
      `Запрошен список платежей пользователя: userId=${userId}`,
    );
    return this.findMany({
      userId,
      ...predicate,
    });
  }

  async findOneByIdAndUserId(
    id: number,
    userId: string,
  ): Promise<PaymentEntity | null> {
    this.logger.debug(`Запрошен платёж: paymentId=${id}, userId=${userId}`);
    return this.prisma.payment.findUnique({
      where: {
        id_userId: { id, userId },
      },
    });
  }
}
