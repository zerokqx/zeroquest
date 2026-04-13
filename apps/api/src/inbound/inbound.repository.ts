import { Prisma } from '@/generated/prisma/client';
import { PrismaService } from '@/prisma.service';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class InboundRepository {
  private readonly logger = new Logger(InboundRepository.name);

  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.InboundCreateInput) {
    return this.prisma.inbound.create({ data });
  }

  findMany() {
    return this.prisma.inbound.findMany();
  }

  findByInboundId(inboundId: number) {
    this.logger.debug(`Поиск inbound по inboundId: inboundId=${inboundId}`);
    return this.prisma.inbound.findUnique({ where: { inboundId } });
  }

  findById(id: number) {
    return this.prisma.inbound.findUnique({ where: { id } });
  }

  updateById(id: number, data: Prisma.InboundUpdateInput) {
    return this.prisma.inbound.update({
      where: { id },
      data,
    });
  }

  deleteById(id: number) {
    return this.prisma.inbound.delete({ where: { id } });
  }
}
