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
  Public,
} from '@zeroquest/nest-shared';
import { resolve } from 'dns';

type RequestWithClientType = {
  clientType: string;
} & Request;

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  private readonly logger = new Logger(AuthController.name);
  private setCookie(
    res: Response,
    tokens: { accessToken: string; refreshToken: string },
  ) {
    res.cookie(
      'zeroquestAccess' as keyof AuthServiceTypes.AuthCookie,
      tokens.accessToken,
      { httpOnly: true },
    );
    res.cookie(
      'zeroquestRefresh' as keyof AuthServiceTypes.AuthCookie,
      tokens.refreshToken,
      { httpOnly: true },
    );
  }

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
    @Res({ passthrough: true }) res: Response,
  ) {
    this.logger.log(
      `Запрос на вход по паролю: login=${body.login}, clientType=${req.clientType}`,
    );
    const tokens = await this.authService.password(
      body,
      userAgent,
      req.clientType,
    );

    this.setCookie(res, tokens);

    return { message: 'Успешный вход' };
  }

  @Post('register')
  @ClientType('web')
  @Public()
  @ApiOperation({
    summary: 'Регистрация пользователя',
    description:
      'Создаёт нового пользователя и сразу устанавливает access и refresh токены в httpOnly cookies.',
  })
  @ApiClientType()
  @ApiUserAgent()
  @ApiConsumes('application/json')
  @ApiBody({
    type: RegisterDto,
    description: 'Данные для регистрации',
  })
  @ApiCreatedResponse({
    description:
      'Пользователь успешно зарегистрирован. Токены установлены в cookies.',
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
  async register(
    @Body() body: RegisterDto,
    @Headers('user-agent') userAgent: string,
    @Req() req: RequestWithClientType,
    @Res({ passthrough: true }) res: Response,
  ) {
    this.logger.log(
      `Запрос на регистрацию: login=${body.login}, clientType=${req.clientType}`,
    );
    const tokens = await this.authService.register(
      body.login,
      body.password,
      userAgent,
      req.clientType,
    );

    this.setCookie(res, tokens);

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
    @Headers('user-agent') userAgent: string,
    @Req() req: RequestWithClientType,
    @Res({ passthrough: true }) res: Response,
    @AuthPayload()
    payload: AuthServiceTypes.JwtPayload,
  ) {
    this.logger.debug(
      `Запрошено обновление токенов: login=${payload.login}, clientType=${req.clientType}`,
    );
    const tokens = await this.authService.refresh(
      userAgent,
      req.clientType,
      payload,
    );

    this.setCookie(res, tokens);

    this.logger.log(
      `Токены обновлены: login=${payload.login}, sessionId=${payload.sid}`,
    );
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
    @AuthPayload() payload: AuthServiceTypes.JwtPayload,
    @Res({ passthrough: true }) res: Response,
  ) {
    await this.authService.logout(payload);
    res.clearCookie('zeroquestAccess', { httpOnly: true });
    res.clearCookie('zeroquestRefresh', { httpOnly: true });
  }
}
