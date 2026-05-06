/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Get,
  Headers,
  HttpCode,
  Logger,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import {
  ApiBody,
  ApiConsumes,
  ApiCookieAuth,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
  ApiBadRequestResponse,
  ApiCreatedResponse,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { type Response, type Request } from 'express';
import type { AuthServiceTypes } from '@zeroquest/types';
import {
  ApiClientType,
  ApiUserAgent,
  AuthPayload,
  AuthToken,
  ClientType,
  getRequestHeader,
  Public,
} from '@zeroquest/nest-shared';
import { CookieJwtManager } from './cookie-manager.service';
import { CsrfPublic } from '@/domains/security/csrf/csrf.decorator';
import { Fingerprint } from '@/domains/security/fingerprint/fingerprint.decorator';
import { CsrfService } from '@/domains/security/csrf/csrf.service';

type RequestWithClientType = {
  clientType: string;
} & Request;

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly cookieManager: CookieJwtManager,
    private readonly csrfService: CsrfService,
  ) {}

  private readonly logger = new Logger(AuthController.name);

  @Get('test')
  @ApiClientType()
  @ApiUserAgent()
  @ApiCookieAuth('zeroquestAccess')
  @ApiOperation({
    summary: 'Проверка авторизации',
    description:
      'Тестовый эндпоинт для проверки, что пользователь успешно авторизован.',
  })
  @ApiOkResponse({
    description: 'Пользователь авторизован',
    schema: {
      example: 'You logined',
    },
  })
  async test() {
    return 'You logined';
  }

  @Post('password')
  @Public()
  @ClientType('web')
  @ApiOperation({
    summary: 'Вход по логину и паролю',
    description:
      'Авторизует пользователя по логину и паролю. После успешного входа устанавливает access и refresh токены в httpOnly cookies.',
  })
  @ApiClientType()
  @ApiUserAgent()
  @ApiConsumes('application/json')
  @ApiBody({
    type: LoginDto,
    description: 'Данные для входа',
  })
  @ApiBadRequestResponse({
    description: 'Некорректные входные данные',
  })
  @ApiUnauthorizedResponse({
    description: 'Неверный логин или пароль',
  })
  @ApiForbiddenResponse({
    description: 'Указан неподдерживаемый client type.',
  })
  async password(
    @Body() body: LoginDto,
    @Headers('user-agent') userAgent: string,
    @Req() req: RequestWithClientType,
    @Fingerprint() fingerprint: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    this.logger.log(
      `Запрос на вход по паролю: login=${body.login}, clientType=${req.clientType}`,
    );
    this.logger.debug(
      userAgent,
      req.clientType ?? 'ClientType',
      getRequestHeader(req, 'x-forwarded-for') ?? 'NotFound',
    );
    const tokens = await this.authService.password(
      body,
      req.clientType,
      userAgent,
    );

    this.cookieManager.setAuthCookies(res, tokens);
    const csrf = this.csrfService.generateCsrfToken();
    this.cookieManager.setCsrf(res, csrf);
    await this.csrfService.trackCsrfToken(csrf, fingerprint);
    return { message: 'Успешный вход' };
  }

  @Post('register')
  @ClientType('web')
  @Public()
  @ApiOperation({
    summary: 'Регистрация пользователя',
    description:
      'Создаёт нового пользователя. Токены не выдаются: после регистрации требуется отдельный вход.',
  })
  @ApiClientType()
  @ApiConsumes('application/json')
  @ApiBody({
    type: RegisterDto,
    description: 'Данные для регистрации',
  })
  @ApiCreatedResponse({
    description: 'Пользователь успешно зарегистрирован.',
    schema: {
      example: {
        message: 'Пользователь успешно зарегистрирован',
      },
    },
  })
  @ApiBadRequestResponse({
    description: 'Некорректные данные или пользователь уже существует',
  })
  @ApiForbiddenResponse({
    description: 'Указан неподдерживаемый client type.',
  })
  async register(@Body() body: RegisterDto, @Req() req: RequestWithClientType) {
    this.logger.log(
      `Запрос на регистрацию: login=${body.login}, clientType=${req.clientType}`,
    );
    await this.authService.register(body.login, body.password);

    return { message: 'Пользователь успешно зарегистрирован' };
  }

  @Post('refresh')
  @HttpCode(200)
  @ClientType('web')
  @AuthToken('refresh')
  @ApiClientType()
  @ApiOperation({
    summary: 'Обновление access и refresh токенов',
    description:
      'Обновляет access и refresh токены по refresh cookie и устанавливает новые httpOnly cookies.',
  })
  @ApiCookieAuth('zeroquestRefresh')
  @ApiUserAgent()
  @ApiOkResponse({
    description: 'Токены успешно обновлены',
    schema: {
      example: {
        message: 'Токены успешно обновлены',
      },
    },
  })
  @ApiUnauthorizedResponse({
    description: 'Refresh токен отсутствует, истёк или недействителен',
  })
  @ApiForbiddenResponse({
    description: 'Указан неподдерживаемый client type.',
  })
  async refresh(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
    @Headers('user-agent') ua: string,
    @AuthPayload()
    refreshPayload: AuthServiceTypes.JwtPayloadSchemaType,
  ) {
    this.logger.debug(
      `Запрошено обновление токенов: clientType=${req.clientType}`,
    );
    const tokens = await this.authService.refresh(
      refreshPayload,
      req.clientType!,
      ua,
    );

    this.cookieManager.setAuthCookies(res, tokens);

    this.logger.log(`Токены обновлены: sessionId=${refreshPayload.sid}`);
    return { message: 'Токены успешно обновлены' };
  }

  @Get()
  @ApiUserAgent()
  @ApiOperation({
    summary: 'Проверка валидности Access токена',
  })
  @ClientType('web')
  @ApiOkResponse({
    description: 'Пользователь авторизован',
  })
  status() {
    return true;
  }

  @Post('logout')
  @ApiOkResponse({
    description: 'Logout успешен',
  })
  @ApiOperation({
    summary: 'Logout сессии и удаление Cookie с клиента',
  })
  @ClientType('web')
  @ApiClientType()
  @ApiUserAgent()
  async logout(
    @AuthPayload() accessPayload: AuthServiceTypes.JwtPayloadSchemaType,
    @Res({ passthrough: true }) res: Response,
  ) {
    await this.authService.logout(accessPayload);
    this.cookieManager.clearAuthCookies(res);
    return;
  }

  @ApiOperation({ description: 'Выдает CSRF токен' })
  @CsrfPublic()
  @Public()
  @ClientType('web')
  @ApiUserAgent()
  @ApiClientType()
  @Get('csrf')
  async getCsrf(
    @Res({ passthrough: true }) res: Response,
    @Fingerprint() fingerprint: string,
  ) {
    const token = this.csrfService.generateCsrfToken();
    this.cookieManager.setCsrf(res, token);
    await this.csrfService.trackCsrfToken(token, fingerprint);
    return { ok: true };
  }
}
