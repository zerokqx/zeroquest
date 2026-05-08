import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

export class TotpLoginDto {
  @ApiProperty()
  @IsUUID()
  challengeId!: string;

  @ApiProperty()
  @IsString()
  value!: string;
}
