import { NotFoundException, ForbiddenException, Injectable } from '@nestjs/common';
import { RESPONSE_CODES } from '@zeroquest/constants';
import { LegalDocumentType } from '@zeroquest/db';
import { nanoid } from 'nanoid';
import { AuthenticatedOk } from '../dto/login-password-returns.dto';
import { LoginDto } from './login.dto';
import { AuthRepository } from '../auth.repository';
import { PolicyService } from '@/domains/content/policy/policy.service';
import { TokenService } from '../../token/token.service';
import { SessionService } from '../../session/session.service';

@Injectable()
export class LoginService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly policyService: PolicyService,
    private readonly tokenService: TokenService,
    private readonly sessionService: SessionService,
  ) {}

  async password({ login, policy }: LoginDto, ua: string) {
    const user = await this.authRepository.findUserByLogin(login);
    if (!user) throw new NotFoundException();
    if (user && user?.isBanned) {
      throw new ForbiddenException({
        message: 'User banned',
        code: RESPONSE_CODES.AUTHENTICATED_FAILED_BECAUSE_USER_IS_BANNED,
      });
    }
    await this.policyService.acceptRequiredPolicies(user.id, policy, [
      LegalDocumentType.PRIVACY,
    ]);
    const sid = nanoid();

    const [tokens, inputs] = await this.tokenService.createTokenPair({
      sid,
      sub: user.id,
    });
    await this.sessionService.createSession({
      ajti: inputs.accessTokenJti,
      rjti: inputs.refreshTokenJti,
      sid,
      ua,
      uid: user.id,
    });

    return new AuthenticatedOk(tokens);
  }
}
