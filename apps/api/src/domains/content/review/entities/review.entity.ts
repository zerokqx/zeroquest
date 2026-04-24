import { UserEntity } from '@/domains/access/user/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { PickType } from '@nestjs/swagger';
import { Review } from '@zeroquest/db';

export class ReviewUserEntity extends PickType(UserEntity, [
  'id',
  'login',
] as const) {}

export class ReviewEntity implements Review {
  @ApiProperty()
  id!: number;

  @ApiProperty()
  userId!: string;

  @ApiProperty()
  content!: string;
  @ApiProperty()
  rating!: number;

  @ApiProperty()
  createdAt!: Date;

  @ApiProperty()
  updatedAt!: Date;

  @ApiProperty({ type: ReviewUserEntity })
  user!: ReviewUserEntity;
}
