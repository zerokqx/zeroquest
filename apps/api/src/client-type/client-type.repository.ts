import { PrismaService } from '@/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientTypeRepository {
  constructor(private readonly prisma: PrismaService) {}

  async exist(clientType: string) {
    const promise = await this.prisma.clientType.findUnique({
      where: {
        name: clientType,
      },
    });
    return !!promise
  }
}
