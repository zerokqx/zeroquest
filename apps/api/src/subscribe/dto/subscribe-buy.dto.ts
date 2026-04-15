import { ApiProperty } from '@nestjs/swagger';
import { Plan } from '@zeroquest/db';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class SubscribeBuyDto {
  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  planId!: Plan['id'];

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  deviceName!: string;
}
