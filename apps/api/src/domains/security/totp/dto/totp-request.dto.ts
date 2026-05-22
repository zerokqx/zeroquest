import { IsOptional, IsString, Length } from 'class-validator';

export class TotpRequest {

  @IsString()
  @Length(6, 6)
  @IsOptional()
  token?: string;
}
