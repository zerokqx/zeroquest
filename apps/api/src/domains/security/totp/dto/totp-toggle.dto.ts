import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean } from "class-validator";

export class TotpToggleDto {
  @ApiProperty()
  @IsBoolean()
  status!: boolean

}
