import { ApiProperty } from '@nestjs/swagger';
import { Review } from '@zeroquest/db';

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
}
