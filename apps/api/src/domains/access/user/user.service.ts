import { AuthServiceTypes } from '@zeroquest/types';
import { PatchMeDto } from './dto/patch-me.dto';
import { UserRepository } from './user.repository';
import { Prisma, User, UserRole } from '@zeroquest/db';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserCache } from './user.cache';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userCache: UserCache,
  ) {}

  private getAuthorizedUserId(userId: string | undefined): string {
    if (!userId) throw new UnauthorizedException('Unauthorized user context');
    return userId;
  }

  async me(payload: AuthServiceTypes.JwtPayload) {
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

  async patchMe(payload: AuthServiceTypes.JwtPayload, dto: PatchMeDto) {
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

  async findById(userId: User['id']) {
    const user = await this.userRepository.findById({
      where: { id: userId },
      include: {
        wallet: true,
      },
    });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async isAdmin(userId: User['id']) {
    const cachedRole = await this.userCache.getCacheRole(userId);
    if (!cachedRole) {
      const status = await this.userRepository.isAdmin(userId);
      await this.userCache.cacheRole(userId, status);
      return status === UserRole.ADMIN;
    }
    return cachedRole === UserRole.ADMIN;
  }
}
