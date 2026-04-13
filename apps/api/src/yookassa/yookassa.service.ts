import { EnvironmentVariables } from '@/config/configuration';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { CreatePaymentResponseDto } from './dto/create-payment-response.dto';

@Injectable()
export class YookassaService {
  private yookassaEnvironment: EnvironmentVariables['yookassa'];
  private yookassaClient!: AxiosInstance;
  private readonly logger = new Logger(YookassaService.name)
  constructor(private readonly config: ConfigService<EnvironmentVariables>) {
    this.yookassaEnvironment = this.config.get<EnvironmentVariables['yookassa']>(
      'yookassa',
      { infer: true },
    );
    this.logger.log(this.yookassaEnvironment)

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
    this.yookassaClient.interceptors.request.use((config) => {
      config.headers['Idempotence-Key'] = `key-${Date.now()}`;
      return config;
    });
  }

  async createPayment(body: CreatePaymentDto) {
    return this.yookassaClient.post<CreatePaymentResponseDto>(
      'payments/',
      body,
    );
  }
}
