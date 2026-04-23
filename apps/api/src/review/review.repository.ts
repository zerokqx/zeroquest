import { Injectable } from '@nestjs/common';
import { Prisma, PrismaService } from '@zeroquest/db';
import { ReviewEntity } from './entities/review.entity';

const reviewWithUserSelect = {
  id: true,
  userId: true,
  content: true,
  rating: true,
  createdAt: true,
  updatedAt: true,
  user: {
    select: {
      id: true,
      login: true,
    },
  },
} satisfies Prisma.ReviewSelect;

@Injectable()
export class ReviewRepository {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<ReviewEntity[]> {
    return this.prisma.review.findMany({
      select: reviewWithUserSelect,
      orderBy: { createdAt: 'desc' },
    });
  }

  findById(id: number): Promise<ReviewEntity | null> {
    return this.prisma.review.findUnique({
      where: { id },
      select: reviewWithUserSelect,
    });
  }

  findByUserId(userId: string): Promise<{ id: number } | null> {
    return this.prisma.review.findUnique({
      where: { userId },
      select: { id: true },
    });
  }

  async createForUser(
    userId: string,
    data: Omit<Prisma.ReviewCreateInput, 'user'>,
  ): Promise<ReviewEntity> {
    return this.prisma.$transaction(async (tx) => {
      const review = await tx.review.create({
        data: {
          ...data,
          user: {
            connect: { id: userId },
          },
        },
        select: reviewWithUserSelect,
      });

      await tx.user.update({
        where: { id: userId },
        data: { canComment: false },
      });

      return review;
    });
  }

  async deleteByUserId(userId: string): Promise<ReviewEntity> {
    return this.prisma.$transaction(async (tx) => {
      const deletedReview = await tx.review.delete({
        where: { userId },
        select: reviewWithUserSelect,
      });

      await tx.user.update({
        where: { id: userId },
        data: { canComment: true },
      });

      return deletedReview;
    });
  }
}
