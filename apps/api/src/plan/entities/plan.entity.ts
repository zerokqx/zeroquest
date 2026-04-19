import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime/client';
import { PlanGetPayload } from 'node_modules/@zeroquest/db/src/generated/models';

export class PlanEntity
  implements PlanGetPayload<{ omit: { inboundId: true } }>
{
  @ApiProperty({ type: Decimal })
  discountedPercent!: Decimal;

  @ApiProperty({ type: String, nullable: true })
  features!: string | null;
  @ApiProperty()
  isSpecial!: boolean;

  @ApiProperty()
  isDiscounted!: boolean;

  @ApiProperty({ type: String, nullable: true })
  pluses!: string | null;
  @ApiProperty({ example: 1 })
  id!: number;

  @ApiProperty({ example: 'Base' })
  name!: string;

  @ApiProperty({ example: 299 })
  price!: number;

  @ApiProperty({
    example: 'Базовый тариф',
    type: String,
    nullable: true,
    required: false,
  })
  description!: string | null;

  @ApiProperty({ example: 30 })
  totalGb!: number;

  @ApiProperty({ example: 30 })
  duratationDays!: number;
}
