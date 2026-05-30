import { AuthServiceTypes } from '@zeroquest/types';
import { PatchMeDto } from './dto/patch-me.dto';
import { FindAllUsersParams, UserRepository } from './user.repository';
import { Prisma, User, UserRole } from '@zeroquest/db';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserCache } from './user.cache';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userCache: UserCache,
  ) {}


  async me(userId: User['id']) {
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

  async patchMe(userId: User['id'], dto: PatchMeDto) {
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

  findAll(params: FindAllUsersParams) {
    return this.userRepository.findAll(params);
  }

  findManyByIds(ids: User['id'][]) {
    return this.userRepository.findManyByIds(ids);
  }

  delete(id: User['id']) {
    return this.userRepository.delete(id);
  }

  async updateUser(id: User['id'], data: UpdateUserDto) {
    try {
      return await this.userRepository.updateById({
        where: { id },
        data,
        include: { wallet: true },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException('User not found');
      }
      throw error;
    }
  }
}

