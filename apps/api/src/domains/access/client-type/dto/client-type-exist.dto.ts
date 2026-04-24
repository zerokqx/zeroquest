import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class ClientTypeExistDto{
  @ApiProperty()
  @IsString()
  clientTypeName!: string
}
