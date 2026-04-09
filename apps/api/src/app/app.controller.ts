import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private config: ConfigService) {}

  @Get()
  getData() {

    return this.config.get('NODE_ENV');
  }
}
