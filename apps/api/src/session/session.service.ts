import {
  BadRequestException,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { AuthServiceTypes } from '@zeroquest/types';
import { SessionRepository } from './session.repository';
import { ClientTypeRepository } from '@/client-type/client-type.repository';
import { Prisma } from '@zeroquest/db';

@Injectable()
export class SessionService {
  private readonly logger = new Logger(SessionService.name);
  constructor(
    private readonly sessionRepository: SessionRepository,

    private readonly clientTypeRepository: ClientTypeRepository,
  ) {}
  async create(
    {
      refreshTokenJti,
      refreshToken,
      clientType,
      userAgentHash,
      userId,
    }: CreateSessionDto,
    options?: { tx?: Prisma.TransactionClient },
  ) {
    this.logger.debug(
      `Создание сессии: userId=${userId}, clientType=${clientType}`,
    );
    const clientTypeExist = await this.clientTypeRepository.exist(clientType);
    if (!clientTypeExist) {
      this.logger.warn(
        `Пользователь попытался пройти с несуществующим в базе данных ClientType: ${clientType}`,
      );
      throw new BadRequestException('Unknown type of client');
    }
    return this.sessionRepository.create(
      {
        user: {
          connect: { id: userId },
        },
        userAgentHash,
        refreshTokenJti: refreshTokenJti ?? '',
        refreshTokenHash: refreshToken ?? '',
        clientType: {
          connect: {
            name: clientType,
          },
        },
      },
      options,
    );
  }

  async update(id: string, updateSessionDto: UpdateSessionDto) {
    return this.sessionRepository.updateById(id, updateSessionDto);
  }

  async remove(id: string, payload: AuthServiceTypes.JwtPayload) {
    this.logger.debug(
      `Запрошено удаление сессии: sessionId=${id}, requester=${payload.sub}`,
    );

    const session = await this.sessionRepository.findById(id);

    if (session && payload.jti === session.refreshTokenJti) {
      this.logger.log(
        `Сессия удалена: sessionId=${id}, userId=${session.userId}`,
      );
      return await this.sessionRepository.deleteById(id);
    }

    this.logger.warn(
      `Удаление сессии отклонено: sessionId=${id}, requester=${payload.sub}`,
    );
    throw new UnauthorizedException();
  }

  async findAll(userId: string) {
    return this.sessionRepository.findManyByUserId(userId);
  }

  async findOne(id: string, userId: string) {
    return this.sessionRepository.findOneByIdAndUserId(id, userId);
  }

  async findForUser(userId: string) {
    return this.sessionRepository.findManyByUserId(userId);
  }
  async findSessionByRefresh(userId: string, sid: string) {
    return this.sessionRepository.findOneByIdAndUserId(sid, userId);
  }
}
