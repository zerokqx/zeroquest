import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, Matches } from 'class-validator';

export class TotpValidateDto {
  @ApiProperty({
    description: 'UUID challenge, полученный из `POST /totp/setup`.',
    format: 'uuid',
    example: '91f6f5ac-8858-4dfb-92bc-e6786f064571',
  })
  @IsUUID()
  challengeId!: string;

  @ApiProperty({
    description: '6-значный TOTP код из приложения-аутентификатора.',
    example: '123456',
    pattern: '^\\d{6}$',
  })
  @IsString()
  @Matches(/^\d{6}$/)
  value!: string;
}
