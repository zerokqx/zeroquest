import { genSalt, compare, hash } from 'bcryptjs';
import {
  ConflictException,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import type { AuthServiceTypes } from '@zeroquest/types';
import { createHash } from 'crypto';
import { TokenService } from '@/domains/access/token/token.service';
import { AuthRepository } from './auth.repository';
import { LegalDocumentType, UserRole } from '@zeroquest/db';
import { LoginDto } from './dto/login.dto';
import { PolicyService } from '@/domains/content/policy/policy.service';
import { SessionRedisService } from '../session/session-redis.service';
import { nanoid } from 'nanoid';

@Injectable()
export class AuthService {
  private logger = new Logger(AuthService.name);
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly tokenService: TokenService,
    private readonly sessionService: SessionRedisService,
    private readonly policyService: PolicyService,
  ) {}

  sha256(data: string) {
    return createHash('sha256').update(data).digest('hex');
  }

  async password(
    { login, password, policy }: LoginDto,
    clientType: string,
  ) {
    const user = await this.authRepository.findUserByLogin(login);
    if (user && (await compare(password, user?.passwordHash))) {
      const tokenPayload = await this.authRepository.transaction(async (tx) => {
        await this.policyService.acceptRequiredPolicies(
          user.id,
          policy,
          [LegalDocumentType.PRIVACY],
          {
            tx,
          },
        );
        const sid = nanoid();

        const [tokens, inputs] = await this.tokenService.createTokenPair({
          clientType,
          sid,
          sub: user.id,
          role: user.role ?? UserRole.USER,
          login,
        });
         await this.sessionService.createSession({
          accessJti: inputs.accessTokenJti,
          refreshJti: inputs.refreshTokenJti,
          sid,
          clientType,
          uid: user.id,
        });

        return {
          tokens,
          accessPayload: {
            clientType,
            sid,
            sub: user.id,
            role: user.role ?? UserRole.USER,
            login,
            type: 'access',
            jti: inputs.accessTokenJti,
          } satisfies AuthServiceTypes.JwtPayload,
          refreshPayload: {
            clientType,
            sid,
            sub: user.id,
            role: user.role ?? UserRole.USER,
            login,
            type: 'refresh',
            jti: inputs.refreshTokenJti,
          } satisfies AuthServiceTypes.JwtPayload,
          sessionId: sid,
        };
      });
      await Promise.all([
        this.tokenService.trackToken(tokenPayload.accessPayload),
        this.tokenService.trackToken(tokenPayload.refreshPayload),
      ]);
      this.logger.log(
        `Пользователь успешно вошёл: login=${login}, sessionId=${tokenPayload.sessionId}, clientType=${clientType}`,
      );
      return tokenPayload.tokens;
    }
    this.logger.warn(
      `Неуспешная попытка входа: login=${login}, clientType=${clientType}`,
    );
    throw new UnauthorizedException('Invalid login or password');
  }

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
    clientType: string,
    refreshPayload: AuthServiceTypes.JwtPayload,
  ) {
    const isRefreshToken = refreshPayload.type === 'refresh';

    if (!isRefreshToken) {
      this.logger.warn(
        `Refresh отклонён на этапе проверки payload: login=${refreshPayload.login}, sessionId=${refreshPayload.sid}, tokenType=${refreshPayload.type}`,
      );
      throw new UnauthorizedException('Invalid refresh token type');
    }

    this.logger.debug(
      `Payload refresh токена подтверждён: login=${refreshPayload.login}, sessionId=${refreshPayload.sid}`,
    );

    const session = await this.authRepository.findSessionForRefresh(
      refreshPayload.sid,
    );

    if (!session || session.userId !== refreshPayload.sub) {
      this.logger.warn(
        `Refresh отклонён на этапе проверки сессии: login=${refreshPayload.login}, sessionId=${refreshPayload.sid}`,
      );
      throw new UnauthorizedException('Refresh session validation failed');
    }

    // Удаляем только старый refresh-tracking; access истечёт по TTL.
    await this.tokenService.removeTrackedToken(refreshPayload);

    const [tokens, inputs] = await this.tokenService.createTokenPair({
      clientType,
      sid: session.id,
      sub: session.userId,
      role: session.user.role ?? UserRole.USER,
      login: refreshPayload.login,
    });

    const refreshTokenHash = await this.tokenService.hashToken(
      tokens.refreshToken,
    );
    const updated =
      await this.authRepository.updateSessionTokensDataIfJtiMatches(
        session.id,
        refreshPayload.jti,
        {
          ...inputs,
          refreshTokenHash,
        },
      );
    if (updated.count !== 1) {
      this.logger.warn(
        `Refresh не завершён: не удалось атомарно обновить сессию ${session.id}`,
      );
      throw new UnauthorizedException('Refresh session update conflict');
    }

    await Promise.all([
      this.tokenService.trackToken({
        clientType,
        sid: session.id,
        sub: session.userId,
        role: session.user.role ?? UserRole.USER,
        login: refreshPayload.login,
        type: 'access',
        jti: inputs.accessTokenJti,
      }),
      this.tokenService.trackToken({
        clientType,
        sid: session.id,
        sub: session.userId,
        role: session.user.role ?? UserRole.USER,
        login: refreshPayload.login,
        type: 'refresh',
        jti: inputs.refreshTokenJti,
      }),
    ]);

    this.logger.log(
      `Refresh выполнен успешно: login=${refreshPayload.login}, sessionId=${session.id}`,
    );
    return tokens;
  }

  async logout(
    accessPayload: AuthServiceTypes.JwtPayload,
  ) {
    // await Promise.all([
    //   this.tokenService.removeTrackedToken(accessPayload),
    //   this.tokenService.removeTrackedToken(refreshPayload),
    // ]);
    return await this.sessionService.deleteSession({sid: accessPayload.sid, uid: accessPayload.sub});
  }
}
