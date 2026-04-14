import {
  Body,
  Controller,
  HttpCode, HttpStatus,
  Post,
} from '@nestjs/common';
import { YookassaWebhookDto } from './dto/webhook-event.dto';
import { YookassaWebhookService } from './yookassa-webhook.service';
import {
  ApiBody,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { AllowIp, Public } from '@zeroquest/nest-shared';

@ApiTags('YooKassa')
@Controller('yookassa')
export class YookassaController {
  constructor(
    private readonly yookassaWebhookService: YookassaWebhookService,
  ) {}

  @Public()
  @Post('webhook')
  @AllowIp(['77.75.153.78', '77.75.154.206 '])
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Webhook YooKassa',
    description:
      'Принимает webhook от YooKassa и запускает локальную обработку платежного события.',
  })
  @ApiBody({
    type: YookassaWebhookDto,
    description: 'Webhook payload от YooKassa.',
  })
  @ApiOkResponse({
    description: 'Webhook успешно принят.',
  })
  @ApiForbiddenResponse({
    description: 'IP-адрес отправителя не входит в allowlist.',
  })
  async webhook(@Body() body: YookassaWebhookDto) {
    await this.yookassaWebhookService.handleWebhook(body);
  }
}
