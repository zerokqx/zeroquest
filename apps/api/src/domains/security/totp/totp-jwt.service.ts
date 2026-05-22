import { EnvironmentVariables } from '@/config/configuration';
import { Injectable} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TotpJwtService {
  private readonly jwtEnvironment: EnvironmentVariables['jwt'];

  constructor(
    private readonly jwtService: JwtService,
    private readonly config: ConfigService<EnvironmentVariables>,
  ) {
    this.jwtEnvironment = this.config.getOrThrow('jwt', { infer: true });
  }

  signAsync<T extends object>(payload: T) {
    return this.jwtService.signAsync<T>(payload, {
      secret: this.jwtEnvironment.secret,
      expiresIn: '5m',
    });
  }
}
