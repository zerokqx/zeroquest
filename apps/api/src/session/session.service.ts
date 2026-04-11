import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { PrismaService } from '@/prisma.service';
import { RemoveSessionDto } from './dto/remove-session.dto';
import { TokenService } from '@/token/token.service';
import { Prisma } from '@/generated/prisma/client';

@Injectable()
export class SessionService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly tokenService: TokenService,
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
    return await (options?.tx ?? this.prisma).session.create({
      data: {
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
    });
  }

  async update(id: string, updateSessionDto: UpdateSessionDto) {
    return await this.prisma.session.update({
      where: { id },
      data: updateSessionDto,
    });
  }

  async remove(id: string, { refreshToken }: RemoveSessionDto) {
    const payload =await this.tokenService.verify(refreshToken);

    const session = await this.prisma.session.findUnique({ where: { id } });
    if (
      session &&
      (await this.tokenService.compareHashWitPlain(
        session.refreshTokenHash,
        refreshToken,
      )) &&
      payload.jti === session.refreshTokenJti
    )
      return await this.prisma.session.delete({ where: { id } });
    throw new UnauthorizedException();
  }
}
