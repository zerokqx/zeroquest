import { Body, Controller, Post } from '@nestjs/common';
import { AuthRegisterPost } from './register.decorator';
import { RegisterDto } from './register.dto';
import { RegisterService } from './register.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Auth')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @AuthRegisterPost()
  @Post('register')
  async register(@Body() body: RegisterDto) {
    await this.registerService.register(body.login, body.password);
  }
}
