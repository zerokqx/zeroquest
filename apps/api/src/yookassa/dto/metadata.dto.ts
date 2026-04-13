import { IsIn, IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class MetadataDto {
  @IsString()
  @IsNotEmpty()
  userId!: string;

  @IsNotEmpty()
  @IsNumber()
  planId!: number;

  @IsString()
  clientType!: string;

  @IsString()
  name!: string;

}
