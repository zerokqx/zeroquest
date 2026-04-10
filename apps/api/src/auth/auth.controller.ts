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
  ApiHeader,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
  ApiBadRequestResponse,
  ApiCreatedResponse,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import {
  ApiClientType,
  ClientType,
} from '@/common/guards/client-type/client-type.decorator';
import { LoginDto } from './login.dto';
import { RegisterDto } from './register.dto';
import { Public } from './auth.decorator';
import { type Response } from 'express';
import { AuthServiceTypes } from '@zeroquest/types';
import { Cookies } from '@/common/guards/cookie/cookie.decorator';
import { ApiUserAgent } from '@/common/guards/user-agent.guard';

type RequestWithClientType = {
  clientType: string;
};

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

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
  async password(
    @Body() body: LoginDto,
    @Headers('user-agent') userAgent: string,
    @Req() req: RequestWithClientType,
    @Res({ passthrough: true }) res: Response,
  ) {
    this.logger.log(`Запрос на логин по поролю`);
    const tokens = await this.authService.password(
      body.login,
      body.password,
      userAgent,
      req.clientType,
    );

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
  async register(
    @Body() body: RegisterDto,
    @Headers('user-agent') userAgent: string,
    @Req() req: RequestWithClientType,
    @Res({ passthrough: true }) res: Response,
  ) {
    this.logger.debug(`Регистрация пользователя: ${body.login}`);
    const tokens = await this.authService.register(
      body.login,
      body.password,
      userAgent,
      req.clientType,
    );

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

    return { message: 'Пользователь успешно зарегистрирован' };
  }

  @Post('refresh')
  @HttpCode(200)
  @ClientType('web')
  @Public()
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
  async refresh(
    @Headers('user-agent') userAgent: string,
    @Req() req: RequestWithClientType,
    @Res({ passthrough: true }) res: Response,
    @Cookies('zeroquestRefresh' as keyof AuthServiceTypes.AuthCookie)
    refresh: string,
  ) {
    this.logger.debug(`Куки для ${userAgent}`, refresh);
    const tokens = await this.authService.refresh(
      userAgent,
      req.clientType,
      refresh,
    );

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

    this.logger.debug(`Для ${userAgent} были установлены новые токены`);

    return { message: 'Токены успешно обновлены' };
  }
}
