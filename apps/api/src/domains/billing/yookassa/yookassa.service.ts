import { EnvironmentVariables } from '@/config/configuration';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { RefundPaymentDto } from './dto/refund-payment.dto';
import { RefundPaymentResponseDto } from './dto/refund-payment-response.dto';
import { IDEMPOTENCE_KEY_HEADER } from '@/domains/billing/payment/dto/create-payment.dto';
import { Configuration, PaymentsApi } from '@/generated/yookassa';

@Injectable()
export class YookassaService {
  private yookassaEnvironment: EnvironmentVariables['yookassa'];
  private yookassaClient!: PaymentsApi;
  constructor(private readonly config: ConfigService<EnvironmentVariables>) {
    this.yookassaEnvironment = this.config.get<
      EnvironmentVariables['yookassa']
    >('yookassa', { infer: true });

    this.yookassaClient = new PaymentsApi(
      new Configuration({
        username: this.yookassaEnvironment.shopId,
        password: this.yookassaEnvironment.token,
        basePath: this.yookassaEnvironment.apiBaseUrl,
      }),
    );
  }

  private resolveIdempotenceKey(idempotenceKey?: string) {
    return idempotenceKey?.trim() || crypto.randomUUID();
  }

  async createPayment(body: CreatePaymentDto, idempotenceKey: string) {
    return this.yookassaClient.paymentsPost(idempotenceKey, body);
  }

  async getPayment(paymentId: string) {
    return this.yookassaClient.paymentsPaymentIdGet(paymentId);
  }

  async refundPayment(
    { amount, paymentId }: RefundPaymentDto,
    idempotenceKey?: string,
  ) {
    return this.yookassaClient.post<RefundPaymentResponseDto>(
      'refunds/',
      {
        amount,
        payment_id: paymentId,
      },
      {
        headers: {
          [IDEMPOTENCE_KEY_HEADER]: this.resolveIdempotenceKey(idempotenceKey),
        },
      },
    );
  }
}
