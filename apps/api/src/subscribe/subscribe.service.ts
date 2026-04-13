import { Injectable } from '@nestjs/common';
import { CreateSubscribeDto } from './dto/create-subscribe.dto';
import { UpdateSubscribeDto } from './dto/update-subscribe.dto';
import { AuthServiceTypes } from '@zeroquest/types';
import { Options, SubscribeRepository } from './subscribe.repository';

@Injectable()
export class SubscribeService {
  constructor(private readonly subscribeRepository: SubscribeRepository) {}
  async create(
    { providerPaymentId, planId, ...subscribeCreateDto }: CreateSubscribeDto,
    payload: AuthServiceTypes.JwtPayload,
    opts?: Options,
  ) {
    return this.subscribeRepository.create({
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
    }, opts);
  }

  async findAll(payload: AuthServiceTypes.JwtPayload) {
    return this.subscribeRepository.findManyByUserId(payload.sub);
  }

  async findOne(id: number, payload: AuthServiceTypes.JwtPayload) {
    return this.subscribeRepository.findOneByIdAndUserId(id, payload.sub);
  }

  async update(
    id: number,
    payload: AuthServiceTypes.JwtPayload,
    updateSubscribeDto: UpdateSubscribeDto,
  ) {
    return this.subscribeRepository.updateByIdAndUserId(
      id,
      payload.sub,
      updateSubscribeDto,
    );
  }
  async remove(id: number, payload: AuthServiceTypes.JwtPayload) {
    return this.subscribeRepository.deleteByIdAndUserId(id, payload.sub);
  }

  createVlessLink() {}
}
