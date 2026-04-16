import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ResetSubscribeDto {
  @ApiProperty({
    type: String,
    example: 'cm9y5n2qz00003f6s2m2b5d8k',
  })
  @IsString()
  @IsNotEmpty()
  subscribeId!: string;
}
