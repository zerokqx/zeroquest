import { Session } from '../dto/schemas/session.schema';
import { ApiProperty, ApiHideProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

/**
 * Entity для сессии пользователя
 * Реализует интерфейс Session
 */
export class SessionEntity implements Session {
  @ApiProperty({ description: 'Session ID — уникальный идентификатор сессии' })
  sid!: string;

  @ApiProperty({ description: 'User ID — идентификатор пользователя (CUID)' })
  uid!: string;

  @Exclude()
  @ApiHideProperty()
  ajti!: string; // Access JTI

  @Exclude()
  @ApiHideProperty()
  rjti!: string; // Refresh JTI

  @ApiProperty({
    description:
      'Last Activity Timestamp — время последней активности в миллисекундах',
  })
  lat!: number;

  @ApiProperty({ description: 'User Agent — строка с User-Agent клиента' })
  ua!: string;

  @ApiProperty({
    description: 'Client Type — тип клиента (например, web, mobile, api)',
  })
  ct!: string;

  @ApiProperty()
  cat!: number;

  @ApiProperty()
  isCurrent!: boolean;

  constructor(partial: Partial<Session> & { isCurrent?: boolean }) {
    Object.assign(this, partial);
  }
}
