import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class GiveBonusDto {
  @ApiProperty({
    description: 'Идентификатор пользователя.',
    example: 'cm1x9r2f20000lq4bx7s7v6w1',
  })
  @IsString()
  @IsNotEmpty()
  userId!: string;

  @ApiProperty({
    description: 'Сумма бонуса в минимальных единицах (копейки).',
    example: 5000,
  })
  @IsInt()
  @IsPositive()
  amount!: number;
}
