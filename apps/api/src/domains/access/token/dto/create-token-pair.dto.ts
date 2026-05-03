import { IsNotEmpty, IsString } from 'class-validator';
import type { AuthServiceTypes } from '@zeroquest/types';

export class CreateTokenPairDto {
  @IsNotEmpty()
  @IsString()
  sub!: string;

  @IsNotEmpty()
  @IsString()
  sid!: string;

  @IsNotEmpty()
  @IsString()
  clientType!: string;

  @IsNotEmpty()
  @IsString()
  role!: AuthServiceTypes.UserRole;

  @IsNotEmpty()
  @IsString()
  login!: string;
}
