import { Injectable } from '@nestjs/common';
import { Prisma, PrismaService } from '@zeroquest/db';

@Injectable()
export class RefundRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.RefundCreateInput) {
    return this.prisma.refund.create({
      data,
      include: { payment: true },
    });
  }

  findAll() {
    return this.prisma.refund.findMany({
      include: { payment: true },
      orderBy: { id: 'desc' },
    });
  }

  findById(id: number, include?: Prisma.RefundInclude) {
    return this.prisma.refund.findUnique({
      where: { id },
      include,
    });
  }

  updateStatusById(id: number, status: 'APPROVE' | 'REJECTED') {
    return this.prisma.refund.update({
      where: { id },
      data: { status } as never,
      include: { payment: true },
    });
  }

  findSubscribeByIdAndUserId(id: string, userId: string) {
    return this.prisma.subscribe.findUnique({
      where: {
        id_userId: { id, userId },
      },
    });
  }
}
