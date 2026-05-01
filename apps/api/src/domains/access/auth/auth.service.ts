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
import { SessionPayloadCompareSchema } from './dto/schemas/session-compare-wit-token.schema';

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
      const tokenPayload = await this.authRepository.transaction(async (tx) => {
        await this.policyService.acceptRequiredPolicies(
          user.id,
          policy,
          [LegalDocumentType.PRIVACY],
          {
            tx,
          },
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
          sub: user.id,
          role: user.role ?? UserRole.USER,
          login,
        });

        await this.authRepository.updateSessionTokensData(
          session.id,
          {
            refreshTokenHash: await this.tokenService.hashToken(
              tokens.refreshToken,
            ),
            ...inputs,
          },

          { tx },
        );

        return {
          tokens,
          accessPayload: {
            userAgentHash,
            clientType,
            sid: session.id,
            sub: user.id,
            role: user.role ?? UserRole.USER,
            login,
            type: 'access',
            jti: inputs.accessTokenJti,
          } satisfies AuthServiceTypes.JwtPayload,
          refreshPayload: {
            userAgentHash,
            clientType,
            sid: session.id,
            sub: user.id,
            role: user.role ?? UserRole.USER,
            login,
            type: 'refresh',
            jti: inputs.refreshTokenJti,
          } satisfies AuthServiceTypes.JwtPayload,
          sessionId: session.id,
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
    throw new UnauthorizedException();
  }

  async register(login: string, password: string) {
    const user = await this.authRepository.findUserLoginByLogin(login);
    this.logger.debug(`Проверка возможности регистрации: login=${login}`);

    if (user?.login === login) {
      this.logger.warn(`Регистрация отклонена: login=${login} уже существует`);
      throw new ConflictException();
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

  /**
   * @description Валидирует в 2 стадии
   * 1) Валидирует старый токен который дал пользователь с тем что реально пришло в запросе, валидирует userAgent с данными из токена
   * 2) После того как проверки предыдущие выдали true валидируем старый токен с данными сессии.
   * */
  async refresh(
    userAgent: string | undefined,
    clientType: string,
    refreshPayload: AuthServiceTypes.JwtPayload,
    accessPayload: AuthServiceTypes.JwtPayload,
  ) {
    const userAgentHash = this.getUserAgentHash(userAgent);
    const isRefreshToken = refreshPayload.type === 'refresh';
    const isUserAgentValid = userAgentHash === refreshPayload.userAgentHash;

    if (!isRefreshToken || !isUserAgentValid) {
      this.logger.warn(
        `Refresh отклонён на этапе проверки payload: login=${refreshPayload.login}, sessionId=${refreshPayload.sid}, userAgentMatch=${isUserAgentValid}, tokenType=${refreshPayload.type}`,
      );
      throw new UnauthorizedException();
    }

    this.logger.debug(
      `Payload refresh токена подтверждён: login=${refreshPayload.login}, sessionId=${refreshPayload.sid}`,
    );

    const session = await this.authRepository.findSessionForRefresh(
      refreshPayload.sid,
    );

    const {
      success,
      data: sessionValid,
      error,
    } = SessionPayloadCompareSchema.safeParse({
      session,
      access: accessPayload,
      refresh: refreshPayload,
    });
    this.logger.debug({ success, sessionValid, error });
    // !!session &&
    // session.clientType.name === refreshPayload.clientType &&
    // userAgentHash === session.userAgentHash &&
    // session.refreshTokenJti === refreshPayload.jti &&
    // refreshPayload.sub === session.userId;

    if (!success) {
      this.logger.warn(
        `Refresh отклонён на этапе проверки сессии: login=${refreshPayload.login}, sessionId=${refreshPayload.sid}`,
      );
      throw new UnauthorizedException();
    }

    // Удаляем старые track-записи; новую пару трекаем ниже после успешного обновления сессии.
    await Promise.all([
      this.tokenService.removeTrackedToken(refreshPayload),
      this.tokenService.removeTrackedToken(accessPayload),
    ]);

    const [tokens, inputs] = await this.tokenService.createTokenPair({
      userAgentHash: sessionValid.session.userAgentHash,
      clientType,
      sid: sessionValid.session.id,
      sub: sessionValid.session.userId,
      role: session?.user.role ?? UserRole.USER,
      login: refreshPayload.login,
    });

    const refreshTokenHash = await this.tokenService.hashToken(
      tokens.refreshToken,
    );
    const updated =
      await this.authRepository.updateSessionTokensDataIfJtiMatches(
        sessionValid.session.id,
        refreshPayload.jti,
        inputs.accessTokenJti,
        {
          ...inputs,
          refreshTokenHash,
        },
      );
    if (updated.count !== 1) {
      this.logger.warn(
        `Refresh не завершён: не удалось атомарно обновить сессию ${sessionValid.session.id}`,
      );
      throw new UnauthorizedException();
    }

    await Promise.all([
      this.tokenService.trackToken({
        userAgentHash: sessionValid.session.userAgentHash,
        clientType,
        sid: sessionValid.session.id,
        sub: sessionValid.session.userId,
        role: session?.user.role ?? UserRole.USER,
        login: refreshPayload.login,
        type: 'access',
        jti: inputs.accessTokenJti,
      }),
      this.tokenService.trackToken({
        userAgentHash: sessionValid.session.userAgentHash,
        clientType,
        sid: sessionValid.session.id,
        sub: sessionValid.session.userId,
        role: session?.user.role ?? UserRole.USER,
        login: refreshPayload.login,
        type: 'refresh',
        jti: inputs.refreshTokenJti,
      }),
    ]);

    this.logger.log(
      `Refresh выполнен успешно: login=${refreshPayload.login}, sessionId=${sessionValid.session.id}`,
    );
    return tokens;
  }

  async logout(
    accessPayload: AuthServiceTypes.JwtPayload,
    refreshPayload: AuthServiceTypes.JwtPayload,
  ) {
    await Promise.all([
      this.tokenService.removeTrackedToken(accessPayload),
      this.tokenService.removeTrackedToken(refreshPayload),
    ]);
    return await this.sessionService.removeByRefreshHash(
      accessPayload.sid,
      accessPayload.sub,
    );
  }
}
