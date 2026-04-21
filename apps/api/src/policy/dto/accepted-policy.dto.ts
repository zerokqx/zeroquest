import { ApiProperty } from '@nestjs/swagger';
import { LegalDocument, LegalDocumentType } from '@zeroquest/db';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class AcceptedPolicyDto {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  version!: LegalDocument['version'];

  @ApiProperty({ enum: LegalDocumentType })
  @IsEnum(LegalDocumentType)
  type!: LegalDocumentType;
}
