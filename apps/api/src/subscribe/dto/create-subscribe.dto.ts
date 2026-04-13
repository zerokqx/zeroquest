import { IsDate, IsInt, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateSubscribeDto {
  @IsInt()
  @IsNotEmpty()
  planId!: number;

  @IsDate()
  expiresAt!: string;

  @IsUrl({ protocols: ['vless'] })
  link!: string;

  @IsString()
  providerPaymentId!: string;

  @IsInt()
  totalGb!: number;

  @IsString()
  name!: string;
}
