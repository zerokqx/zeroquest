import { IsHash, IsNotEmpty, IsString } from 'class-validator';

export class CreateTokenPairDto {
  @IsNotEmpty()
  @IsString()
  sub!: string;

  @IsNotEmpty()
  @IsString()
  sid!: string;

  @IsNotEmpty()
  @IsHash('sha256')
  userAgentHash!: string;

  @IsNotEmpty()
  @IsString()
  clientType!: string;
}
