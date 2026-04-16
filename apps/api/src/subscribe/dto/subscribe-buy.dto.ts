import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class SubscribeBuyDto {
  @ApiProperty({ type: Number, example: 1 })
  @IsInt()
  @IsNotEmpty()
  planId!: number;

  @ApiProperty({ type: String, example: 'iPhone 15 Pro' })
  @IsNotEmpty()
  @IsString()
  deviceName!: string;
}
