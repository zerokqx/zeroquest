import { IsString, Length } from 'class-validator';

export class TotpSetupDto {
  @IsString()
  @Length(6, 6)
  value!: string;
}
