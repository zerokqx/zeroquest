import { Body, Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { TotpService } from './totp.service';
import { ApiClientType, AuthPayload, ClientType } from '@zeroquest/nest-shared';
import {
  ApiBody,
  ApiCookieAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { TotpGuard } from './totp.guard';

@ApiTags('TOTP')
@ApiCookieAuth('zeroquestAccess')
@Controller('totp')
export class TotpController {

  constructor(private readonly totpService: TotpService) {}

  @ClientType()
  @ApiClientType()
  @Post('setup')
  @ApiOperation({
    summary: 'Setup TOTP',
    description: 'Создает setup jwt cookie и возвращает uri для приложения.',
  })
  @ApiCreatedResponse({
    description: 'Setup успешно создан',
    schema: {
      example: {
        uri: 'otpauth://totp/ZeroQuest%20VPN:TEST?secret=SECRET&issuer=ZeroQuest%20VPN',
      },
    },
  })
  async setup(
    @AuthPayload() payload: any,
    @Res({ passthrough: true }) res: any,
  ) {
    return await this.totpService.createSetup(res, payload.sub);
  }

  @ClientType()
  @ApiClientType()
  @Post('setup/validate')
  @ApiOperation({
    summary: 'Validate setup TOTP',
    description: 'Проверяет код и сохраняет TOTP для пользователя.',
  })
  @ApiBody({
    required: true,
    schema: {
      type: 'object',
      properties: {
        value: {
          type: 'string',
          example: '123456',
        },
      },
      required: ['value'],
    },
  })
  @ApiOkResponse({
    description: 'TOTP setup подтвержден',
  })
  async validateSetup(
    @Body() body: any,
    @Req() req: any,
    @Res({ passthrough: true }) res: any,
  ) {
    return await this.totpService.validateSetup(req, res, body);
  }

  @ClientType()
  @ApiBody({})
  @ApiClientType()
  @UseGuards(TotpGuard)
  @Post('test')
  @ApiOperation({
    summary: 'Test TOTP guard',
    description: 'Тестовый endpoint для проверки работы TotpGuard.',
  })
  testGuard() {
    return { ok: true };
  }
}
