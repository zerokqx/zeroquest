import { Body, Controller, Delete, Post } from '@nestjs/common';
import { TotpService } from './totp.service';
import { TotpEncrypt } from './totp.encrypt';
import { TotpValidateDto } from './dto/totp-validate.dto';
import { ApiClientType, AuthPayload, ClientType } from '@zeroquest/nest-shared';
import { AuthServiceTypes } from '@zeroquest/types';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCookieAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { RESPONSE_CODES } from '@zeroquest/constants';
import { TotpRemoveDto } from './dto/totp-remove.dto';

@ApiTags('TOTP')
@ApiCookieAuth('zeroquestAccess')
@Controller('totp')
export class TotpController {
  constructor(
    private readonly totpService: TotpService,
    private readonly totpEncrypt: TotpEncrypt,
  ) {}

  @ClientType()
  @ApiClientType()
  @Post('setup')
  @ApiOperation({
    summary: 'Создать TOTP challenge',
    description:
      'Генерирует новый TOTP секрет, шифрует его и возвращает идентификатор challenge для последующей валидации кода.',
  })
  @ApiCreatedResponse({
    description: 'TOTP challenge успешно создан.',
    schema: {
      type: 'string',
      format: 'uuid',
      example: '91f6f5ac-8858-4dfb-92bc-e6786f064571',
    },
  })
  @ApiForbiddenResponse({
    description: 'Указан неподдерживаемый client type.',
  })
  async setup(@AuthPayload() payload: AuthServiceTypes.JwtPayloadSchemaType) {
    const token = await this.totpService.generateNewTotp(payload.sub);
    const encrypted = this.totpEncrypt.encrypt(token.secret);
    const challengeId =
      await this.totpService.createNewTotpChallenge(encrypted);
    return {
      challengeId,
      uri: token.uri,
    };
  }

  @ClientType()
  @ApiClientType()
  @Post('validate')
  @ApiOperation({
    summary: 'Подтвердить TOTP код',
    description:
      'Проверяет введённый 6-значный TOTP код по challengeId и, если код валиден, привязывает TOTP к текущему пользователю.',
  })
  @ApiBody({
    type: TotpValidateDto,
    description: 'Данные для проверки TOTP challenge.',
  })
  @ApiCreatedResponse({
    description: 'TOTP код подтверждён, TOTP успешно подключён к пользователю.',
  })
  @ApiBadRequestResponse({
    description: 'Некорректный формат challengeId или TOTP кода.',
  })
  @ApiUnauthorizedResponse({
    description: 'Неверный TOTP код.',
    schema: {
      example: {
        message: 'Invalid TOTP code',
        code: RESPONSE_CODES.TOTP_INVALID_CHALLANGE,
      },
    },
  })
  @ApiNotFoundResponse({
    description: 'Challenge не найден или истёк.',
    schema: {
      example: {
        message: 'Challange not found',
        code: RESPONSE_CODES.TOTP_CHALLENGE_NOT_FOUND,
      },
    },
  })
  @ApiForbiddenResponse({
    description: 'Указан неподдерживаемый client type.',
  })
  async validate(
    @Body() { challengeId, value }: TotpValidateDto,
    @AuthPayload() payload: AuthServiceTypes.JwtPayloadSchemaType,
  ) {
    const validateObject = await this.totpService.validateChallenge(
      challengeId,
      value,
    );
    if (validateObject.valid) {
      await this.totpService.createUserTotp(
        payload.sub,
        validateObject.encrypted,
      );
    }
  }

  @ClientType()
  @ApiClientType()
  @Delete()
  @ApiOperation({
    summary: 'Отключить TOTP',
    description:
      'Удаляет TOTP у текущего пользователя после подтверждения 6-значным кодом из приложения-аутентификатора.',
  })
  @ApiBody({
    type: TotpRemoveDto,
    description: 'Код подтверждения для отключения TOTP.',
  })
  @ApiOkResponse({
    description: 'TOTP успешно отключён.',
    schema: {
      example: {
        message: 'TOTP disabled',
      },
    },
  })
  @ApiBadRequestResponse({
    description: 'Пользователь/TOTP не найден или код TOTP неверный.',
  })
  @ApiForbiddenResponse({
    description: 'Указан неподдерживаемый client type.',
  })
  async remove(
    @Body() { value }: TotpRemoveDto,
    @AuthPayload() payload: AuthServiceTypes.JwtPayloadSchemaType,
  ) {
    await this.totpService.removeTotp(payload.sub, value);
    return { message: 'TOTP disabled' };
  }
}
