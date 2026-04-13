import { Prisma } from '@/generated/prisma/client';
import { PrismaService } from '@/prisma.service';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class PaymentRepository {
  private readonly logger = new Logger(PaymentRepository.name);
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.PaymentCreateInput) {
    return this.prisma.payment.create({ data });
  }

  findByProviderPaymentId(
    providerPaymentId: string,
    include?: Prisma.PaymentInclude,
  ) {
    this.logger.debug(
      `Поиск платежа по providerPaymentId: providerPaymentId=${providerPaymentId}`,
    );
    return this.prisma.payment.findUnique({
      where: { providerPaymentId },
      include,
    });
  }

  updateById(id: number, data: Prisma.PaymentUpdateInput) {
    return this.prisma.payment.update({ where: { id }, data });
  }
  updateByProviderPaymentId(
    providerPaymentId: string,
    data: Prisma.PaymentUpdateInput,
  ) {
    this.logger.log(
      `Обновление платежа по providerPaymentId: providerPaymentId=${providerPaymentId}, status=${data.status ?? 'unchanged'}, appliedStatus=${data.appliedStatus ?? 'unchanged'}, paid=${data.paid ?? 'unchanged'}`,
    );
    return this.prisma.payment.update({
      where: {
        providerPaymentId,
      },
      data,
    });
  }

  findMany(where: Prisma.PaymentWhereInput) {
    return this.prisma.payment.findMany({ where });
  }

  findById(id: number) {
    return this.prisma.payment.findUnique({ where: { id } });
  }

  findManyByUserId(
    userId: string,
    predicate?: Omit<Prisma.PaymentWhereInput, 'userId'>,
  ) {
    this.logger.debug(
      `Запрошен список платежей пользователя: userId=${userId}`,
    );
    return this.findMany({
      userId,
      ...predicate,
    });
  }

  findOneByIdAndUserId(id: number, userId: string) {
    this.logger.debug(`Запрошен платёж: paymentId=${id}, userId=${userId}`);
    return this.prisma.payment.findUnique({
      where: {
        id,
        userId,
      },
    });
  }
}
