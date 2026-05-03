import {
  Injectable,
  PipeTransform,
  UnauthorizedException,
} from '@nestjs/common';
import type { AuthServiceTypes } from '@zeroquest/types';
import { TokenService } from '@/domains/access/token/token.service';

@Injectable()
export class JwtDecodePipe
  implements PipeTransform<string | undefined, AuthServiceTypes.JwtPayload>
{
  constructor(private readonly tokenService: TokenService) {}

  transform(token: string | undefined): AuthServiceTypes.JwtPayload {
    if (typeof token !== 'string' || token.length === 0) {
      throw new UnauthorizedException('JWT token is missing');
    }

    const payload = this.tokenService.decode(token);
    if (!payload) {
      throw new UnauthorizedException('JWT token is invalid');
    }

    return payload;
  }
}
