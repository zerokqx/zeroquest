import type { AuthServiceTypes } from '@zeroquest/types';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { AuthPayload } from '@zeroquest/nest-shared';
import {
  ApiCookieAuth,
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { ReviewEntity } from './entities/review.entity';

@ApiTags('Review')
@ApiCookieAuth('zeroquestAccess')
@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  @ApiBody({ type: CreateReviewDto })
  @ApiOperation({

    summary: 'Создать отзыв',
    description:
      'Создаёт отзыв текущего пользователя. После создания canComment автоматически становится false.',
  })
  @ApiOkResponse({
    type: ReviewEntity,
    description: 'Отзыв успешно создан.',
  })
  create(
    @Body() createReviewDto: CreateReviewDto,
    @AuthPayload() payload: AuthServiceTypes.JwtPayload,
  ) {
    return this.reviewService.create(createReviewDto, payload);
  }

  @Get()
  @ApiOperation({
    summary: 'Получить все отзывы',
    description: 'Возвращает список всех отзывов.',
  })
  @ApiOkResponse({
    type: ReviewEntity,
    isArray: true,
    description: 'Список отзывов успешно получен.',
  })
  findAll() {
    return this.reviewService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Получить отзыв по id',
    description: 'Возвращает один отзыв по его идентификатору.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Идентификатор отзыва.',
  })
  @ApiOkResponse({
    type: ReviewEntity,
    description: 'Отзыв успешно найден.',
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.reviewService.findOne(id);
  }

  @Delete('me')
  @ApiOperation({
    summary: 'Удалить мой отзыв',
    description:
      'Удаляет отзыв текущего пользователя. После удаления canComment автоматически становится true.',
  })
  @ApiOkResponse({
    type: ReviewEntity,
    description: 'Отзыв успешно удалён.',
  })
  removeMyReview(@AuthPayload() payload: AuthServiceTypes.JwtPayload) {
    return this.reviewService.removeMyReview(payload);
  }
}
