import { compare } from 'bcryptjs';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import type { AuthServiceTypes } from '@zeroquest/types';
import { createHash } from 'crypto';
import { PrismaService } from '@zeroquest/db';
import { SessionService } from '../session/session.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly sessionService: SessionService,
  ) {}

  sha256(data: string) {
    return createHash('sha256').update(data).digest('hex');
  }

  async validateUser(login: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { login } });
    if (!user) throw new NotFoundException('User not found');
    if (!user.passwordHash) throw new UnauthorizedException('Google account');
    const isValidPassword = compare(password, user.passwordHash);
    if (!isValidPassword) throw new UnauthorizedException();
    return user;
  }

  async logout(accessPayload: AuthServiceTypes.JwtPayloadSchemaType) {
    return await this.sessionService.deleteSession({
      sid: accessPayload.sid,
      uid: accessPayload.sub,
    });
  }
}
