import { Injectable } from '@nestjs/common';
import { CreateSubscribeDto } from './dto/create-subscribe.dto';
import { UpdateSubscribeDto } from './dto/update-subscribe.dto';
import { PrismaService } from '@/prisma.service';
import { AuthServiceTypes } from '@zeroquest/types';

@Injectable()
export class SubscribeService {
  constructor(private prisma: PrismaService) {}
  async create(
    { providerPaymentId, planId, ...subscribeCreateDto }: CreateSubscribeDto,
    payload: AuthServiceTypes.JwtPayload,
  ) {
    return this.prisma.subscribe.create({
      data: {
        user: {
          connect: {
            id: payload.sub,
          },
        },
        payments: {
          connect: {
            providerPaymentId,
          },
        },
        plan: {
          connect: {
            id: planId,
          },
        },

        status: 'ACTIVE',
        ...subscribeCreateDto,
      },
    });
  }

  async findAll(payload: AuthServiceTypes.JwtPayload) {
    return this.prisma.subscribe.findMany({ where: { userId: payload.sub } });
  }

  async findOne(id: number, payload: AuthServiceTypes.JwtPayload) {
    return this.prisma.subscribe.findUnique({
      where: {
        id,
        userId: payload.sub,
      },
    });
  }

  async update(
    id: number,
    payload: AuthServiceTypes.JwtPayload,
    updateSubscribeDto: UpdateSubscribeDto,
  ) {
    return this.prisma.subscribe.update({
      where: {
        id,
        userId: payload.sub,
      },
      data: updateSubscribeDto,
    });
  }

  async remove(id: number, payload: AuthServiceTypes.JwtPayload) {
    return this.prisma.subscribe.delete({
      where: {
        userId: payload.sub,
        id,
      },
    });
  }
}
