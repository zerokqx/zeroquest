import { PassportStrategy } from '@nestjs/passport';
import { User } from '@zeroquest/db';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LocalAuthStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private readonly authService: AuthService) {
    super({
      usernameField: 'login',
      passwordField: 'password',
    });
  }

  override validate(login: string, password: string): Promise<User> {
    const user = this.authService.validateUser(login, password);
    return user;
  }
}
