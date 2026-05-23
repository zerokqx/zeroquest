import { Body, Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { TotpService } from './totp.service';
import { ApiClientType, User, ClientType } from '@zeroquest/nest-shared';
import type { Request, Response } from 'express';
import {
  ApiBody,
  ApiCookieAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { TotpSetupDto } from './dto/totp-setup.dto';
import { AuthServiceTypes } from '@zeroquest/types';
import { TotpGuard } from './totp.guard';
import { TotpApiBody } from './totp.decorator';
import { TotpToggleDto } from './dto/totp-toggle.dto';

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
    @User() payload: AuthServiceTypes.JwtPayloadSchemaType,
    @Res({ passthrough: true }) res: Response,
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
    type: TotpSetupDto,
  })
  @ApiOkResponse({
    description: 'TOTP setup подтвержден',
  })
  async validateSetup(
    @Body() body: TotpSetupDto,
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    return await this.totpService.validateSetup(req, res, body);
  }

  @Post('toggle')

  @ApiOperation({
    summary: 'Включает или выключает TOTP',
  })

  @ApiClientType()
  @TotpApiBody({type: TotpToggleDto})
  @UseGuards(TotpGuard)
  async disableTotp(
    @User() payload: AuthServiceTypes.JwtPayloadSchemaType,
    @Body() body: TotpToggleDto,
  ) {
    await this.totpService.toggle(payload.sub, body);
  }
}
