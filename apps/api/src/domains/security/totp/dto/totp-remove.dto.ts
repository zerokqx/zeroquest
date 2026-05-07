import { ApiProperty } from '@nestjs/swagger';
import { IsString, Matches } from 'class-validator';

export class TotpRemoveDto {
  @ApiProperty({
    description:
      '6-значный TOTP код для подтверждения отключения двухфакторной аутентификации.',
    example: '123456',
    pattern: '^\\d{6}$',
  })
  @IsString()
  @Matches(/^\d{6}$/)
  value!: string;
}
