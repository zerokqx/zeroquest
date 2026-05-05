import { Injectable } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { FindAllPlansParams, PlanRepository } from './plan.repository';

@Injectable()
export class PlanService {
  constructor(private readonly planRepository: PlanRepository) {}

  async create({ inboundId, ...createPlanDto }: CreatePlanDto) {
    return this.planRepository.create({
      inbound: {
        connect: {
          id: inboundId,
        },
      },
      ...createPlanDto,
    });
  }

  async findAll() {
    return this.planRepository.findMany();
  }

  findAllForAdmin(params: FindAllPlansParams) {
    return this.planRepository.findAll(params);
  }

  async findOne(id: number) {
    return this.planRepository.findById(id);
  }

  findManyByIds(ids: number[]) {
    return this.planRepository.findManyByIds(ids);
  }

  async update(id: number, updatePlanDto: UpdatePlanDto) {
    const { inboundId, ...rest } = updatePlanDto;
    return this.planRepository.updateById(id, {
      ...rest,
      ...(inboundId !== undefined
        ? {
            inbound: {
              connect: {
                id: inboundId,
              },
            },
          }
        : {}),
    });
  }

  async remove(id: number) {
    return this.planRepository.deleteById(id);
  }
}
