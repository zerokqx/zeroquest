import { type Response } from 'express';
import { Controller, Post, Res } from '@nestjs/common';
import { AuthRefreshPost } from './refresh.decorator';
import { AuthServiceTypes } from '@zeroquest/types';
import { JwtPayload } from '../../token/token.decorator';
import { RefreshService } from './refresh.service';
import { CookieJwtManager } from '../cookie-manager.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Auth')

export class RefreshController {
  constructor(
    private readonly refreshService: RefreshService,
    private readonly cookieManager: CookieJwtManager,
  ) {}

  @AuthRefreshPost()
  @Post('refresh')
  async refresh(
    @Res({ passthrough: true }) res: Response,
    @JwtPayload() payload: AuthServiceTypes.JwtPayloadSchemaType,
  ) {
    const tokens = await this.refreshService.refresh(payload);
    this.cookieManager.setAuthCookies(res, tokens);
    return;
  }
}
