import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { toPenny } from '@zeroquest/converters';
import { PrismaService } from '@/prisma.service';
import { YookassaService } from '@/yookassa/yookassa.service';
import { AuthServiceTypes } from '@zeroquest/types';
import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from '@/config/configuration';
import { PaymentRepository } from './payment.repository';

@Injectable()
export class PaymentService {
  private readonly logger = new Logger(PaymentService.name);
  constructor(
    private prisma: PrismaService,
    private readonly yookassaService: YookassaService,
    private readonly config: ConfigService<EnvironmentVariables>,
    private readonly paymentRepository: PaymentRepository,
  ) {}

  async create(
    createPaymentDto: CreatePaymentDto,
    payload: AuthServiceTypes.JwtPayload,
  ) {
    this.logger.log(
      `Создание платежа начато: userId=${payload.sub}, planId=${createPaymentDto.planId}, clientType=${payload.clientType}`,
    );

    const plan = await this.prisma.plan.findUnique({
      where: { id: createPaymentDto.planId },
    });
    if (!plan) {
      this.logger.warn(
        `Создание платежа отклонено: план не найден, userId=${payload.sub}, planId=${createPaymentDto.planId}`,
      );
      throw new NotFoundException();
    }

    const { data } = await this.yookassaService.createPayment({
      capture: true,
      metadata: {
        clientType: payload.clientType,
        userId: payload.sub,
        planId: createPaymentDto.planId,
      },
      amount: {
        currency: 'RUB',
        value: plan?.price.toString(),
      },
      description: plan?.name,
      confirmation: {
        return_url:
          this.config.get('yookassa', { infer: true })?.redirectTo ?? '',
        type: 'redirect',
      },
    });

    this.logger.log(
      `Платёж создан у провайдера: providerPaymentId=${data.id}, userId=${payload.sub}, planId=${createPaymentDto.planId}, status=${data.status}`,
    );

    const payment = await this.paymentRepository.create({
      user: {
        connect: {
          id: payload.sub,
        },
      },
      plan: {
        connect: {
          id: createPaymentDto.planId,
        },
      },
      description: data.description,
      confirmationUrl: data.confirmation.confirmation_url,
      value: toPenny(data.amount.value),
      providerPaymentId: data.id,
    });

    this.logger.log(
      `Платёж сохранён в БД: paymentId=${payment.id}, providerPaymentId=${payment.providerPaymentId}, userId=${payload.sub}, planId=${createPaymentDto.planId}`,
    );

    return payment;
  }

  findAll(payload: AuthServiceTypes.JwtPayload) {
    return this.paymentRepository.findManyByUserId(payload.sub);
  }

  findOne(id: number, payload: AuthServiceTypes.JwtPayload) {
    return this.paymentRepository.findOneByIdAndUserId(id, payload.sub);
  }
}
