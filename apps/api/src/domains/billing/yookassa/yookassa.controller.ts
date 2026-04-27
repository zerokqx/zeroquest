import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { YookassaWebhookBaseDto } from './dto/webhook-event.dto';
import { YookassaWebhookService } from './yookassa-webhook.service';
import {
  ApiBody,
  ApiExcludeController,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { AllowIp, Public } from '@zeroquest/nest-shared';
import { env } from 'process';
import { CsrfPublic } from '@/domains/access/auth/csrf.decorator';

const YOOKASSA_ALLOWED_IPS = (
  env.YOOKASSA_WEBHOOK_ALLOWED_IPS ??
  '185.71.76.0/27,185.71.77.0/27,77.75.153.0/25,77.75.156.11,77.75.156.35,77.75.154.128/25,2a02:5180::/32'
)
  .split(',')
  .map((ip) => ip.trim())
  .filter(Boolean);

@CsrfPublic()
@ApiExcludeController()
@ApiTags('YooKassa')
@Controller(`yookassa/${env.YOOKASSA_WEBHOOK_PATH}`)
export class YookassaController {
  constructor(
    private readonly yookassaWebhookService: YookassaWebhookService,
  ) {}

  @Public()
  @Post('webhook')
  @AllowIp(YOOKASSA_ALLOWED_IPS)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Webhook YooKassa',
    description:
      'Принимает webhook от YooKassa и запускает локальную обработку платежного события.',
  })
  @ApiBody({
    type: YookassaWebhookBaseDto,
    description: 'Webhook payload от YooKassa.',
  })
  @ApiOkResponse({
    description: 'Webhook успешно принят.',
  })
  @ApiForbiddenResponse({
    description: 'IP-адрес отправителя не входит в allowlist.',
  })
  async webhook(
    @Body() body: YookassaWebhookBaseDto & Record<string, unknown>,
  ) {
    await this.yookassaWebhookService.handleWebhook(body);
  }
}
