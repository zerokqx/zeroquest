import { Injectable } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { PrismaService } from '@/prisma.service';

@Injectable()
export class PlanService {
  constructor(private readonly prisma: PrismaService) {}

  async create({ inboundId, ...createPlanDto }: CreatePlanDto) {
    return this.prisma.plan.create({
      data: {
        inbound: {
          connect: {
            id: inboundId,
          },
        },
        ...createPlanDto,
      },
    });
  }

  async findAll() {
    return this.prisma.plan.findMany();
  }

  async findOne(id: number) {
    return this.prisma.plan.findUnique({ where: { id } });
  }

  async update(id: number, updatePlanDto: UpdatePlanDto) {
    return this.prisma.plan.update({ where: { id }, data: updatePlanDto });
  }

  async remove(id: number) {
    return this.prisma.plan.delete({ where: { id } });
  }
}
