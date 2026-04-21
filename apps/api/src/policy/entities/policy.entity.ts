import { ApiProperty } from '@nestjs/swagger';
import { LegalDocument, LegalDocumentType } from '@zeroquest/db';

export class PolicyEntity implements LegalDocument {
  @ApiProperty({ example: 1 })
  id!: number;

  @ApiProperty({ enum: LegalDocumentType })
  type!: LegalDocumentType;

  @ApiProperty({ example: '1.0.0' })
  version!: string;

  @ApiProperty()
  content!: string;
}
