import { IsJWT, IsNotEmpty } from 'class-validator';

export class RemoveSessionDto {
  @IsNotEmpty()
  @IsJWT()
  refreshToken!: string;
}
