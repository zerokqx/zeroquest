import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import { Inject, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { AuthServiceTypes } from '@zeroquest/types';
import { PatchMeDto } from './dto/patch-me.dto';
import { UserRepository } from './user.repository';
import { Prisma, User } from '@zeroquest/db';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);
  constructor(
    private readonly userRepository: UserRepository,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  private userSelect(): Prisma.UserSelect {
    return {
      login: true,
      id: true,
      telegramId: true,
      isBanned: true,
      role: true,
      createdAt: true,
      updatedAt: true,
      wallet: true,
      canComment: true,
    };
  }
  async me(payload: AuthServiceTypes.JwtPayload): Promise<UserEntity | null> {
    const userCached = await this.cacheManager.get<UserEntity | undefined>(
      `user:me:${payload.sub}`,
    );
    if (userCached) {
      this.logger.debug(
        `Профиль пользователя взят из кеша: userId=${payload.sub}`,
      );
      return userCached;
    }

    const user = await this.userRepository.findById(
      payload.sub,
      this.userSelect(),
    );

    if (!user) throw new NotFoundException();
    await this.cacheManager.set(`user:me:${payload.sub}`, user, 10000);
    this.logger.debug(
      `Профиль пользователя сохранён в кеш: userId=${payload.sub}`,
    );
    return user;
  }

  async patchMe(
    payload: AuthServiceTypes.JwtPayload,
    dto: PatchMeDto,
  ): Promise<UserEntity> {
    const updatedUser = await this.userRepository.updateById(
      payload.sub,
      dto,
      this.userSelect(),
    );

    await this.cacheManager.set<UserEntity | undefined>(
      `user:me:${payload.sub}`,
      updatedUser,
      10000,
    );

    return updatedUser;
  }

  findById(userId: User['id']): Promise<UserEntity | null> {
    return this.userRepository.findById(userId);
  }
}
