import { Body, Controller } from '@nestjs/common';
import { YookassaWebhookBaseDto } from './dto/webhook-event.dto';
import { YookassaWebhookService } from './yookassa-webhook.service';
import { ApiExcludeController, ApiTags } from '@nestjs/swagger';
import { env } from 'process';
import { CsrfPublic } from '@/domains/security/csrf/csrf.decorator';
import { SkipFingerprint } from '@/domains/security/fingerprint/fingerprint.decorator';
import { YookassaWebhook } from './yookassa.decorator';

@CsrfPublic()
@SkipFingerprint()
@ApiExcludeController()
@ApiTags('YooKassa')
@Controller(`yookassa/${env.YOOKASSA_WEBHOOK_PATH}`)
export class YookassaController {
  constructor(
    private readonly yookassaWebhookService: YookassaWebhookService,
  ) {}

  @YookassaWebhook()
  async webhook(
    @Body() body: YookassaWebhookBaseDto & Record<string, unknown>,
  ) {
    console.log(body)
    await this.yookassaWebhookService.handleWebhook(body);
  }
}
