import { Injectable } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { PlanRepository } from './plan.repository';

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

  async findOne(id: number) {
    return this.planRepository.findById(id);
  }

  async update(id: number, updatePlanDto: UpdatePlanDto) {
    return this.planRepository.updateById(id, updatePlanDto);
  }

  async remove(id: number) {
    return this.planRepository.deleteById(id);
  }
}
