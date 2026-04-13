import { Injectable } from '@nestjs/common';
import { CreateInboundDto } from './dto/create-inbound.dto';
import { UpdateInboundDto } from './dto/update-inbound.dto';
import { PrismaService } from '@/prisma.service';

@Injectable()
export class InboundService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createInboundDto: CreateInboundDto) {
    return this.prisma.inbound.create({ data: createInboundDto });
  }

  async findAll() {
    return this.prisma.inbound.findMany();
  }

  async findOneByInboundId(id: number) {
    return this.prisma.inbound.findUnique({ where: { inboundId: id } });
  }
  async findOne(id: number) {
    return this.prisma.inbound.findUnique({ where: { id } });
  }

  async update(id: number, updateInboundDto: UpdateInboundDto) {
    return this.prisma.inbound.update({
      where: { id },
      data: updateInboundDto,
    });
  }

  async remove(id: number) {
    return this.prisma.inbound.delete({ where: { id } });
  }




}
