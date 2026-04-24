import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { Session } from '@zeroquest/db';
import { Exclude} from 'class-transformer';

export class SessionEntity implements Session {
  @ApiHideProperty()
  @Exclude()
  refreshTokenJti!: string;

  @ApiHideProperty()
  @Exclude()
  refreshTokenHash!: string;

  @ApiProperty()
  userId!: string;

  @ApiProperty()
  id!: string;

  @ApiProperty()
  userAgentHash!: string;

  @ApiProperty()
  clientTypeId!: number;

  constructor(partial: Partial<Session>) {
    Object.assign(this, partial);
  }
}
