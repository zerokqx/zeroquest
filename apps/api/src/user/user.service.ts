import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthServiceTypes } from '@zeroquest/types';
import { PatchMeDto } from './dto/patch-me.dto';
import { UserRepository } from './user.repository';
import { Prisma, User } from '@zeroquest/db';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

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
    const user = await this.userRepository.findById(
      payload.sub,
      this.userSelect(),
    );

    if (!user) throw new NotFoundException();
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

    return updatedUser;
  }

  findById(userId: User['id']): Promise<UserEntity | null> {
    return this.userRepository.findById(userId);
  }
}
