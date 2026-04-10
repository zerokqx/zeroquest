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
import { AuthService } from './auth.service';
import { ClientType } from '@/common/guards/client-type/client-type.decorator';
import { LoginDto } from './login.dto';
import { RegisterDto } from './register.dto';
import { Public } from './auth.decorator';
import { type Response } from 'express';
import { AuthServiceTypes } from '@zeroquest/types';
import { Cookies } from '@/common/guards/cookie/cookie.decorator';

type RequestWithClientType = {
  clientType: string;
};

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  private readonly logger = new Logger(AuthController.name);

  @Get('test')
  async test() {
    return 'You logined';
  }

  @Post('password')
  @Public()
  @ClientType('web')
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
  }

  @Post('register')
  @ClientType('web')
  @Public()
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
  }

  @Post('refresh')
  @HttpCode(200)
  @ClientType('web')
  @Public()
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
  }
}
