import { Injectable } from '@nestjs/common';
import { Prisma, PrismaService } from '@zeroquest/db';

@Injectable()
export class ReviewRepository {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.review.findMany({
      include: {
        user: {
          select: {
            id: true,
            login: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  findById(id: number) {
    return this.prisma.review.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            login: true,
          },
        },
      },
    });
  }

  findByUserId(userId: string) {
    return this.prisma.review.findUnique({
      where: { userId },
    });
  }

  findUserById(userId: string) {
    return this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        canComment: true,
      },
    });
  }

  async createForUser(
    userId: string,
    data: Omit<Prisma.ReviewCreateInput, 'user'>,
  ) {
    return this.prisma.$transaction(async (tx) => {
      const review = await tx.review.create({
        data: {
          ...data,
          user: {
            connect: { id: userId },
          },
        },
      });

      await tx.user.update({
        where: { id: userId },
        data: { canComment: false },
      });

      return review;
    });
  }

  async deleteByUserId(userId: string) {
    return this.prisma.$transaction(async (tx) => {
      const deletedReview = await tx.review.delete({
        where: { userId },
      });

      await tx.user.update({
        where: { id: userId },
        data: { canComment: true },
      });

      return deletedReview;
    });
  }
}
