import { Injectable, Logger } from '@nestjs/common';
import { Prisma, PrismaService } from '@zeroquest/db';

@Injectable()
export class UserRepository {
  private readonly logger = new Logger(UserRepository.name);

  constructor(private readonly prisma: PrismaService) {}

  findById<T extends Prisma.UserSelect>(
    id: string,
    select: T,
  ) {
    this.logger.debug(`Запрошен пользователь: userId=${id}`);
    return this.prisma.user.findUnique({
      where: { id },
      select,
    });
  }

  updateById<T extends Prisma.UserSelect>(
    id: string,
    data: Prisma.UserUpdateInput,
    select: T,
  ) {
    this.logger.log(`Обновление пользователя: userId=${id}`);
    return this.prisma.user.update({
      where: { id },
      data,
      select,
    });
  }
}
