import { Public } from '@/auth/auth.decorator';
import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private readonly config: ConfigService) {}

  @Get()
  @Public()
  async getData() {
    const res = await fetch(
      'https://89.125.54.155:20262/r6MpYwYdkrIngyJO4V/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          username: 'k6RcFVCa7Z',
          password: 'SQtzzZwTRl',
        }),
        // важно для cookie
        credentials: 'include',
      },
    );
    return res;
  }
}
