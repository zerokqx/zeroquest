import { ApiProperty } from '@nestjs/swagger';
import { SessionGetPayload } from 'node_modules/@zeroquest/db/src/generated/models';

export class SessionEntity
  implements
    SessionGetPayload<{
      omit: { refreshTokenHash: true; refreshTokenJti: true; userId: true };
    }>
{
  @ApiProperty()
  id!: string;
  @ApiProperty()
  userAgentHash!: string;
  @ApiProperty()
  clientTypeId!: number;
}
