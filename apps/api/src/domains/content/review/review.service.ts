import type { AuthServiceTypes } from '@zeroquest/types';
import { Prisma } from '@zeroquest/db';
import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewRepository } from './review.repository';
import { UserService } from '@/domains/access/user/user.service';

@Injectable()
export class ReviewService {
  constructor(
    private readonly reviewRepository: ReviewRepository,

    private readonly userService: UserService,
  ) {}

  async create(body: CreateReviewDto, payload: AuthServiceTypes.JwtPayload) {
    const user = await this.userService.findById(payload.sub);

    if (!user) {
      throw new NotFoundException('Пользователь не найден.');
    }

    if (user.canComment !== true) {
      throw new ForbiddenException('Пользователь не может оставить отзыв.');
    }

    const existingReview = await this.reviewRepository.findByUserId(
      payload.sub,
    );
    if (existingReview) {
      throw new ConflictException(
        'Пользователь может оставить только один отзыв.',
      );
    }

    try {
      return await this.reviewRepository.createForUser(payload.sub, {
        content: body.content,
        rating: body.rating,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException(
          'Пользователь может оставить только один отзыв.',
        );
      }
      throw error;
    }
  }

  findAll() {
    return this.reviewRepository.findAll();
  }

  async findOne(id: number) {
    const review = await this.reviewRepository.findById(id);
    if (!review) {
      throw new NotFoundException('Отзыв не найден.');
    }
    return review;
  }

  async removeMyReview(payload: AuthServiceTypes.JwtPayload) {
    const review = await this.reviewRepository.findByUserId(payload.sub);
    if (!review) {
      throw new NotFoundException('Отзыв пользователя не найден.');
    }

    return this.reviewRepository.deleteByUserId(payload.sub);
  }
}
