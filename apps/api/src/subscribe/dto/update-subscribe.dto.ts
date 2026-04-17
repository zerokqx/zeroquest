import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateSubscribeDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  name?: string;

}
