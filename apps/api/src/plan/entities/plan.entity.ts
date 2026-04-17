import { ApiProperty } from '@nestjs/swagger';
import { PlanGetPayload } from 'node_modules/@zeroquest/db/src/generated/models';

export class PlanEntity
  implements PlanGetPayload<{ omit: { inboundId: true } }>
{
  @ApiProperty({ example: 1 })
  id!: number;

  @ApiProperty({ example: 'Base' })
  name!: string;

  @ApiProperty({ example: 299 })
  price!: number;

  @ApiProperty({
    example: 'Базовый тариф',
    nullable: true,
    required: false,
  })
  description!: string | null;

  @ApiProperty({ example: 30 })
  totalGb!: number;

  @ApiProperty({ example: 30 })
  duratationDays!: number;
}
