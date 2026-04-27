import { EnvironmentVariables } from '@/config/configuration';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { CreatePaymentResponseDto } from './dto/create-payment-response.dto';
import { GetPaymentResponseDto } from './dto/get-payment-response.dto';
import { RefundPaymentDto } from './dto/refund-payment.dto';
import { RefundPaymentResponseDto } from './dto/refund-payment-response.dto';
import { IDEMPOTENCE_KEY_HEADER } from '@/domains/billing/payment/dto/create-payment.dto';

@Injectable()
export class YookassaService {
  private yookassaEnvironment: EnvironmentVariables['yookassa'];
  private yookassaClient!: AxiosInstance;
  constructor(private readonly config: ConfigService<EnvironmentVariables>) {
    this.yookassaEnvironment = this.config.get<
      EnvironmentVariables['yookassa']
    >('yookassa', { infer: true });

    this.yookassaClient = axios.create({
      baseURL: this.yookassaEnvironment.apiBaseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
      auth: {
        username: this.yookassaEnvironment.shopId,
        password: this.yookassaEnvironment.token,
      },
    });
  }

  private resolveIdempotenceKey(idempotenceKey?: string) {
    return idempotenceKey?.trim() || crypto.randomUUID();
  }

  async createPayment(body: CreatePaymentDto, idempotenceKey?: string) {
    return this.yookassaClient.post<CreatePaymentResponseDto>(
      'payments/',
      body,
      {
        headers: {
          [IDEMPOTENCE_KEY_HEADER]:
            this.resolveIdempotenceKey(idempotenceKey),
        },
      },
    );
  }

  async getPayment(paymentId: string) {
    return this.yookassaClient.get<GetPaymentResponseDto>(
      `payments/${paymentId}`,
    );
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
          [IDEMPOTENCE_KEY_HEADER]:
            this.resolveIdempotenceKey(idempotenceKey),
        },
      },
    );
  }
}
