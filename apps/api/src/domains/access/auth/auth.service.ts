import { genSalt, compare, hash } from 'bcryptjs';
import {
  BadRequestException,
  ConflictException,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import type { AuthServiceTypes } from '@zeroquest/types';
import { createHash } from 'crypto';
import { TokenService } from '@/domains/access/token/token.service';
import { SessionService } from '@/domains/access/session/session.service';
import { AuthRepository } from './auth.repository';
import { LegalDocumentType, UserRole } from '@zeroquest/db';
import { LoginDto } from './dto/login.dto';
import { PolicyService } from '@/domains/content/policy/policy.service';

@Injectable()
export class AuthService {
  private logger = new Logger(AuthService.name);
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly tokenService: TokenService,
    private readonly sessionService: SessionService,
    private readonly policyService: PolicyService,
  ) {}

  sha256(data: string) {
    return createHash('sha256').update(data).digest('hex');
  }

  private getUserAgentHash(userAgent?: string) {
    if (!userAgent?.trim()) {
      throw new BadRequestException('user-agent header is required');
    }

    return this.sha256(userAgent);
  }

  async password(
    { login, password, policy }: LoginDto,
    userAgent: string | undefined,
    clientType: string,
  ) {
    const user = await this.authRepository.findUserByLogin(login);
    if (user && (await compare(password, user?.passwordHash))) {
      const userAgentHash = this.getUserAgentHash(userAgent);
      return await this.authRepository.transaction(async (tx) => {
        const session = await this.sessionService.create(
          {
            clientType,
            userAgentHash,
            userId: user.id,
          },
          { tx },
        );

        const [tokens, inputs] = await this.tokenService.createTokenPair({
          userAgentHash,
          clientType,
          sid: session.id,
          sub: user.id,
          role: user.role ?? UserRole.USER,
          login,
        });

        await this.authRepository.updateSessionRefreshData(
          session.id,
          {
            refreshTokenHash: await this.tokenService.hashToken(
              tokens.refreshToken,
            ),
            refreshTokenJti: inputs.refreshTokenJti,
          },
          { tx },
        );

        await this.policyService.acceptRequiredPolicies(
          user.id,
          policy,
          [LegalDocumentType.PRIVACY],
          {
            tx,
          },
        );

        this.logger.log(
          `Пользователь успешно вошёл: login=${login}, sessionId=${session.id}, clientType=${clientType}`,
        );
        return tokens;
      });
    }
    this.logger.warn(
      `Неуспешная попытка входа: login=${login}, clientType=${clientType}`,
    );
    throw new UnauthorizedException();
  }

  async register(
    login: string,
    password: string,
    userAgent: string | undefined,
    clientType: string,
  ) {
    const user = await this.authRepository.findUserLoginByLogin(login);
    this.logger.debug(
      `Проверка возможности регистрации: login=${login}, clientType=${clientType}`,
    );

    if (user?.login === login) {
      this.logger.warn(`Регистрация отклонена: login=${login} уже существует`);
      throw new ConflictException();
    }
    const salt = await genSalt();
    const userAgentHash = this.getUserAgentHash(userAgent);
    const passwordHash = await hash(password, salt);
    const result = await this.authRepository.transaction(async (tx) => {
      const user = await this.authRepository.createUser(
        {
          wallet: {
            create: {},
          },
          login,
          passwordHash,
        },
        { tx },
      );

      const session = await this.sessionService.create(
        {
          clientType,
          userAgentHash,
          userId: user.id,
        },
        { tx },
      );

      const [tokens, inputs] = await this.tokenService.createTokenPair({
        userAgentHash,
        clientType,
        sid: session.id,
        sub: session.userId,
        role: user.role ?? UserRole.USER,
        login: user.login,
      });

      await this.authRepository.updateSessionRefreshData(
        session.id,
        {
          refreshTokenHash: await this.tokenService.hashToken(
            tokens.refreshToken,
          ),
          refreshTokenJti: inputs.refreshTokenJti,
        },
        { tx },
      );

      this.logger.log(
        `Пользователь зарегистрирован: login=${login}, sessionId=${session.id}, clientType=${clientType}`,
      );
      return tokens;
    });
    return result;
  }

  /**
   * @description Валидирует в 2 стадии
   * 1) Валидирует старый токен который дал пользователь с тем что реально пришло в запросе, валидирует userAgent, clientType с данными из токена
   * 2) После того как проверки предыдущие выдали true валидируем старый токен с данными сессии.
   * */
  async refresh(
    userAgent: string | undefined,
    clientType: string,
    payload: AuthServiceTypes.JwtPayload,
  ) {
    const userAgentHash = this.getUserAgentHash(userAgent);
    const isClientTypeValid = clientType === payload.clientType;
    const isRefreshToken = payload.type === 'refresh';
    const isUserAgentValid = userAgentHash === payload.userAgentHash;

    if (!isClientTypeValid || !isRefreshToken || !isUserAgentValid) {
      this.logger.warn(
        `Refresh отклонён на этапе проверки payload: login=${payload.login}, sessionId=${payload.sid}, clientTypeMatch=${isClientTypeValid}, userAgentMatch=${isUserAgentValid}, tokenType=${payload.type}`,
      );
      throw new UnauthorizedException();
    }

    this.logger.debug(
      `Payload refresh токена подтверждён: login=${payload.login}, sessionId=${payload.sid}`,
    );

    const session = await this.authRepository.findSessionForRefresh(
      payload.sid,
    );

    const isSessionValid =
      !!session &&
      session.clientType.name === payload.clientType &&
      userAgentHash === session.userAgentHash &&
      session.refreshTokenJti === payload.jti &&
      payload.sub === session.userId;

    if (!isSessionValid) {
      this.logger.warn(
        `Refresh отклонён на этапе проверки сессии: login=${payload.login}, sessionId=${payload.sid}`,
      );
      throw new UnauthorizedException();
    }

    const [tokens, inputs] = await this.tokenService.createTokenPair({
      userAgentHash: session.userAgentHash,
      clientType,
      sid: session.id,
      sub: session.userId,
      role: session.user.role ?? UserRole.USER,
      login: payload.login,
    });

    const refreshTokenHash = await this.tokenService.hashToken(
      tokens.refreshToken,
    );
    const updated =
      await this.authRepository.updateSessionRefreshDataIfJtiMatches(
        session.id,
        payload.jti,
        {
          refreshTokenJti: inputs.refreshTokenJti,
          refreshTokenHash,
        },
      );
    if (updated.count !== 1) {
      this.logger.warn(
        `Refresh не завершён: не удалось атомарно обновить сессию ${session.id}`,
      );
      throw new UnauthorizedException();
    }

    this.logger.log(
      `Refresh выполнен успешно: login=${payload.login}, sessionId=${session.id}`,
    );
    return tokens;
  }

  async logout({ sid, sub }: AuthServiceTypes.JwtPayload) {
    this.sessionService.removeByRefreshHash(sid, sub);
  }
}
