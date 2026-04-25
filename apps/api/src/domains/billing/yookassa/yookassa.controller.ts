import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
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
import { AllowIp, AllowIpGuard, Public } from '@zeroquest/nest-shared';
import { env } from 'process';
import { CsrfPublic } from '@/domains/access/auth/csrf.decorator';

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
  @AllowIp(['77.75.153.78', '77.75.154.206 '])
  @UseGuards(AllowIpGuard)
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
