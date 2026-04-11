import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateSessionDto } from './create-session.dto';

export class UpdateSessionDto extends OmitType(PartialType(CreateSessionDto), [
  'userId',
  'clientType',
  'userAgentHash',
] as const) {}
