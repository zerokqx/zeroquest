import { AuthServiceTypes } from '@zeroquest/types';
import { PatchMeDto } from './dto/patch-me.dto';
import { UserRepository } from './user.repository';
import { Prisma, User } from '@zeroquest/db';
import { UserEntity } from './entities/user.entity';

import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  private getAuthorizedUserId(userId: string | undefined): string {
    if (!userId) throw new UnauthorizedException('Unauthorized user context');
    return userId;
  }

  async me(payload: AuthServiceTypes.JwtPayload): Promise<UserEntity> {
    const userId = this.getAuthorizedUserId(payload.sub);
    const user = await this.userRepository.findById({
      where: {
        id: userId,
      },
      include: {
        wallet: true,
      },
    });

    if (!user) throw new NotFoundException('User not found');


    return user;
  }

  async patchMe(
    payload: AuthServiceTypes.JwtPayload,
    dto: PatchMeDto,
  ): Promise<UserEntity> {
    const userId = this.getAuthorizedUserId(payload.sub);
    try {
      const updatedUser = await this.userRepository.updateById({
        where: {
          id: userId,
        },
        data: dto,
        include: {
          wallet: true,
        },
      });

      return updatedUser;
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      )
        throw new NotFoundException('User not found');
      throw error;
    }
  }

  async findById(userId: User['id']): Promise<UserEntity> {
    const user = await this.userRepository.findById({
      where: { id: userId },
      include: {
        wallet: true,
      },
    });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
}
