import { genSalt, compare, hash } from 'bcryptjs';
import {
  ConflictException,
  ForbiddenException,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import type { AuthServiceTypes } from '@zeroquest/types';
import { createHash } from 'crypto';
import { TokenService } from '@/domains/access/token/token.service';
import { AuthRepository } from './auth.repository';
import { LegalDocumentType } from '@zeroquest/db';
import { LoginDto } from './dto/login.dto';
import { PolicyService } from '@/domains/content/policy/policy.service';
import { SessionService } from '../session/session.service';
import { nanoid } from 'nanoid';
import { RESPONSE_CODES } from '@zeroquest/constants';
import {
  LoginTotpRequiredResponseDto,
  LoginTotpValidateDto,
} from './dto/login-response.dto';
import { TotpLoginService } from '@/domains/security/totp/totp-login.service';

@Injectable()
export class AuthService {
  private logger = new Logger(AuthService.name);
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly tokenService: TokenService,
    private readonly sessionService: SessionService,
    private readonly policyService: PolicyService,
    private readonly totpLoginService: TotpLoginService,
  ) {}

  sha256(data: string) {
    return createHash('sha256').update(data).digest('hex');
  }

  async totpValidate(
    { challengeId, vallue }: LoginTotpValidateDto,

    ct: string,
    ua: string,
  ) {
    const f = await this.totpLoginService.validateVallue(challengeId, vallue);
    if (f.valid) {
      const user = await this.authRepository.findUserById(f.uid);
      if (user && user?.isBanned)
        throw new ForbiddenException({
          message: 'User banned',
          code: RESPONSE_CODES.AUTHENTICATED_FAILED_BECAUSE_USER_IS_BANNED,
        });
      const sid = nanoid();

      const [tokens, inputs] = await this.tokenService.createTokenPair({
        ct,
        sid,
        ua,
        sub: f.uid,
      });
      await this.sessionService.createSession({
        ajti: inputs.accessTokenJti,
        rjti: inputs.refreshTokenJti,
        sid,
        ct,
        ua,
        uid: f.uid,
      });

      return {
        type: RESPONSE_CODES.AUTHENTICATED,
        tokens,
      };
    }

    throw new UnauthorizedException({
      message: 'Totp invalid',
      code: RESPONSE_CODES.TOTP_INVALID_CHALLANGE,
    });
  }
  async password(
    { login, password, policy }: LoginDto,
    ct: string,
    ua: string,
  ) {
    const user = await this.authRepository.findUserByLogin(login);
    if (user && user?.isBanned)
      throw new ForbiddenException({
        message: 'User banned',
        code: RESPONSE_CODES.AUTHENTICATED_FAILED_BECAUSE_USER_IS_BANNED,
      });
    if (user && (await compare(password, user?.passwordHash))) {
      await this.policyService.acceptRequiredPolicies(user.id, policy, [
        LegalDocumentType.PRIVACY,
      ]);
      if (user.totp) {
        const challengeId =
          await this.totpLoginService.createNewValidationChallenge(
            user.login,
            user.id,
            ct,
            ua,
          );
        return new LoginTotpRequiredResponseDto({
          challengeId,
          type: 'TOTP_REQUIRED',
        });
      }

      const sid = nanoid();

      const [tokens, inputs] = await this.tokenService.createTokenPair({
        ct,
        sid,
        ua,
        sub: user.id,
      });
      await this.sessionService.createSession({
        ajti: inputs.accessTokenJti,
        rjti: inputs.refreshTokenJti,
        sid,
        ct,
        ua,
        uid: user.id,
      });

      return {
        type: RESPONSE_CODES.AUTHENTICATED,
        tokens,
      };
    }
    this.logger.warn(
      `Неуспешная попытка входа: login=${login}, clientType=${ct}`,
    );
    throw new UnauthorizedException('Invalid login or password');
  }

  async totpVerify() {}
  async register(login: string, password: string) {
    const user = await this.authRepository.findUserLoginByLogin(login);
    this.logger.debug(`Проверка возможности регистрации: login=${login}`);

    if (user?.login === login) {
      this.logger.warn(`Регистрация отклонена: login=${login} уже существует`);
      throw new ConflictException('User with this login already exists');
    }
    const salt = await genSalt();
    const passwordHash = await hash(password, salt);
    await this.authRepository.createUser({
      wallet: {
        create: {},
      },
      login,
      passwordHash,
    });

    this.logger.log(`Пользователь зарегистрирован: login=${login}`);
  }

  async refresh(
    refreshPayload: AuthServiceTypes.JwtPayloadSchemaType,
    ct: string,
    ua: string,
  ) {
    const session = (await this.sessionService.getSession(refreshPayload.sid))!;

    const [tokens, inputs] = await this.tokenService.createTokenPair({
      ua,
      ct,
      sid: session.sid,
      sub: session.uid,
    });

    await this.sessionService.updateSession(session.sid, {
      ajti: inputs.accessTokenJti,
      rjti: inputs.refreshTokenJti,
    });

    this.logger.log(`Refresh выполнен успешно: sessionId=${session.uid}`);
    return tokens;
  }

  async logout(accessPayload: AuthServiceTypes.JwtPayloadSchemaType) {
    // await Promise.all([
    //   this.tokenService.removeTrackedToken(accessPayload),
    //   this.tokenService.removeTrackedToken(refreshPayload),
    // ]);
    return await this.sessionService.deleteSession({
      sid: accessPayload.sid,
      uid: accessPayload.sub,
    });
  }
}
