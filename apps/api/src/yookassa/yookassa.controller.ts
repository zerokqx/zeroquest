import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { Public } from '@/auth/auth.decorator';
import { YookassaWebhookDto } from './dto/webhook-event.dto';
import { AllowIp } from '@/common/ip/allow-ip.decorator';
import { YookassaWebhookService } from './yookassa-webhook.service';

@Controller('yookassa')
export class YookassaController {
  constructor(
    private readonly yookassaWebhookService: YookassaWebhookService,
  ) {}

  @Public()
  @Post('webhook')
  @AllowIp(['77.75.153.78', '77.75.154.206 '])
  @HttpCode(HttpStatus.OK)
  async webhook(@Body() body: YookassaWebhookDto) {
    await this.yookassaWebhookService.handleWebhook(body);
  }
}
