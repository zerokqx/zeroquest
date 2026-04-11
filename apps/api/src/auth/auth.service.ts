import { PrismaService } from '@/prisma.service';
import { genSalt, compare, hash } from 'bcryptjs';
import {
  ConflictException,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import type { AuthServiceTypes } from '@zeroquest/types';
import { createHash } from 'crypto';
import { TokenService } from '@/token/token.service';
import { SessionService } from '@/session/session.service';

@Injectable()
export class AuthService {
  private logger = new Logger(AuthService.name);
  constructor(
    private prisma: PrismaService,
    private tokenService: TokenService,
    private sessionService: SessionService,
  ) {}

  sha256(data: string) {
    return createHash('sha256').update(data).digest('hex');
  }
  async password(
    login: string,
    password: string,
    userAgent: string,
    clientType: string,
  ) {
    const user = await this.prisma.user.findUnique({
      where: {
        login,
      },
    });
    if (user && (await compare(password, user?.passwordHash))) {
      const userAgentHash = this.sha256(userAgent);
      this.logger.debug(`Хэширования userAgent для ${userAgent}`);
      return await this.prisma.$transaction(async (tx) => {
        const session = await this.sessionService.create(
          {
            clientType,
            userAgentHash,
            userId: user.id,
          },
          { tx },
        );

        this.logger.verbose(`Создана сессия для ${userAgent}`);
        const [tokens, inputs] = await this.tokenService.createTokenPair({
          userAgentHash,
          clientType,
          sid: session.id,
          sub: user.id,
        });

        this.logger.debug(`Сгенерированы токены для ${userAgent}`);
        await tx.session.update({
          where: { id: session.id },
          data: {
            refreshTokenHash: await this.tokenService.hashToken(
              tokens.refreshToken,
            ),
            refreshTokenJti: inputs.refreshTokenJti,
          },
        });
        this.logger.verbose(
          `Создана обновлена с актуальными токенами для ${userAgent}`,
        );
        return tokens;
      });
    }
    throw new UnauthorizedException();
  }

  async register(
    login: string,
    password: string,
    userAgent: string,
    clientType: string,
  ) {
    const user = await this.prisma.user.findUnique({
      select: { login: true },
      where: {
        login,
      },
    });
    this.logger.debug(`Запрос на регистрацию: ${login}`);

    if (user?.login === login) throw new ConflictException();
    const salt = await genSalt();
    this.logger.debug(`Хеширование userAgent для ${userAgent}`);
    const userAgentHash = this.sha256(userAgent);
    const passwordHash = await hash(password, salt);
    this.logger.debug(`Хеширование пароля для ${userAgent}`);
    const result = await this.prisma.$transaction(async (tx) => {
      this.logger.debug(`Транзакция регистрации началась для ${userAgent}`);
      const user = await tx.user.create({
        data: {
          login,
          passwordHash,
        },
      });
      this.logger.debug(`Пользователя для ${userAgent} был создан`, user);

      const session = await this.sessionService.create(
        {
          clientType,
          userAgentHash,
          userId: user.id,
        },
        { tx },
      );

      this.logger.debug(`Инициализирована сессия для ${userAgent}`, session);
      const [tokens, inputs] = await this.tokenService.createTokenPair({
        userAgentHash,
        clientType,
        sid: session.id,
        sub: session.userId,
      });

      this.logger.debug(`Пары токенов были созданы для ${userAgent}`);
      await tx.session.update({
        where: { id: session.id },
        data: {
          refreshTokenHash: await this.tokenService.hashToken(
            tokens.refreshToken,
          ),
          refreshTokenJti: inputs.refreshTokenJti,
        },
      });

      this.logger.debug(`Обновление сессии на актуальные токены ${userAgent}`);
      this.logger.debug(`Пользователь ${login} зарегистрирован`);
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
    userAgent: string,
    clientType: string,
    refreshToken: string | undefined,
  ) {
    if (!refreshToken) throw new UnauthorizedException();

    const userAgentHash = this.sha256(userAgent);
    let payload: AuthServiceTypes.JwtPayload;
    try {
      payload = await this.tokenService.verify(refreshToken);
    } catch {
      throw new UnauthorizedException();
    }

    this.logger.debug(
      `Hash Равенство для ${userAgent}`,
      userAgentHash === payload.userAgentHash,
      [userAgent, payload.userAgentHash],
    );
    this.logger.debug(
      `ClientType Равенство для ${userAgent}`,
      clientType === payload.clientType,
      [clientType, payload.clientType],
    );
    // 1) Первая стадия
    if (
      clientType !== payload.clientType ||
      payload.type !== 'refresh' ||
      userAgentHash !== payload.userAgentHash
    )
      throw new UnauthorizedException();
    this.logger.debug(`1 Стадия валидация пройдена для ${userAgent}`);

    // 2) Вторая стадия
    const session = await this.prisma.session.findUnique({
      where: { id: payload.sid },
      include: { clientType: true },
    });
    if (
      !session ||
      session.clientType.name !== payload.clientType ||
      userAgentHash !== session.userAgentHash ||
      !(await this.tokenService.compareHashWitPlain(
        session.refreshTokenHash,
        refreshToken,
      )) ||
      payload.sub !== session?.userId ||
      session?.refreshTokenJti !== payload.jti
    )
      throw new UnauthorizedException();

    this.logger.debug(`2 Стадия валидация пройдена для ${userAgent}`);
    const [tokens, inputs] = await this.tokenService.createTokenPair({
      userAgentHash: session.userAgentHash,
      clientType,
      sid: session.id,
      sub: session.userId,
    });

    this.logger.debug(`Созданы пары токенов для ${userAgent}`);

    const refreshTokenHash = await this.tokenService.hashToken(
      tokens.refreshToken,
    );

    this.logger.debug(`Хеширование refresh токена для ${userAgent}`);
    const updated = await this.prisma.session.updateMany({
      where: {
        id: session.id,
        refreshTokenJti: payload.jti,
      },
      data: {
        refreshTokenJti: inputs.refreshTokenJti,
        refreshTokenHash,
      },
    });
    if (updated.count !== 1) throw new UnauthorizedException();

    this.logger.debug(`Обновление сессии ${userAgent}`);
    return tokens;
  }
}
