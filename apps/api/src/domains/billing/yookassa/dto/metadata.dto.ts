import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class MetadataDto {
  @IsString()
  @IsNotEmpty()
  userId!: string;

  @IsString()
  clientType!: string;

  @IsOptional()
  @IsString()
  name?: string;
}
