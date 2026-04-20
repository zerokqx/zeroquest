import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { toPenny } from '@zeroquest/converters';
import { YookassaService } from '@/yookassa/yookassa.service';
import { AuthServiceTypes } from '@zeroquest/types';
import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from '@/config/configuration';
import { PaymentRepository } from './payment.repository';

@Injectable()
export class PaymentService {
  private readonly logger = new Logger(PaymentService.name);
  constructor(
    private readonly yookassaService: YookassaService,
    private readonly config: ConfigService<EnvironmentVariables>,
    private readonly paymentRepository: PaymentRepository,
  ) {}

  async create(
    createPaymentDto: CreatePaymentDto,
    payload: AuthServiceTypes.JwtPayload,
  ) {

    this.logger.log(
      `Создание платежа на пополнение начато: userId=${payload.sub}, amount=${createPaymentDto.amount}, clientType=${payload.clientType}`,
    );

    const { data } = await this.yookassaService.createPayment({
      capture: true,
      metadata: {
        clientType: payload.clientType,
        userId: payload.sub,
      },
      amount: {
        currency: 'RUB',
        value: createPaymentDto.amount,
      },
      description: `Пополнение баланса на ${createPaymentDto.amount} RUB`,
      confirmation: {
        return_url:
          this.config.get('yookassa', { infer: true })?.redirectTo ?? '',
        type: 'redirect',
      },
    });

    this.logger.log(
      `Платёж создан у провайдера: providerPaymentId=${data.id}, userId=${payload.sub}, amount=${data.amount.value}, status=${data.status}`,
    );

    const payment = await this.paymentRepository.create({
      user: {
        connect: {
          id: payload.sub,
        },
      },
      description: data.description,
      confirmationUrl: data.confirmation.confirmation_url,
      value: toPenny(data.amount.value),
      providerPaymentId: data.id,
    });

    this.logger.log(
      `Платёж сохранён в БД: paymentId=${payment.id}, providerPaymentId=${payment.providerPaymentId}, userId=${payload.sub}, valueMinor=${payment.value}`,
    );

    return payment;
  }

  async findAll(payload: AuthServiceTypes.JwtPayload) {
    return this.paymentRepository.findManyByUserId(payload.sub);
  }

  async findOne(id: number, payload: AuthServiceTypes.JwtPayload) {
    return this.paymentRepository.findOneByIdAndUserId(id, payload.sub);
  }
}
