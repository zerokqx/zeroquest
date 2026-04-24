import { OmitType } from '@nestjs/mapped-types';
import { User} from '@zeroquest/db';
import { UserEntity } from './user.entity';

export class UserUnknownEntity extends OmitType(UserEntity, ['wallet']) {
  constructor(partial: Partial<User>) {
    super()
    Object.assign(this, partial);
  }
}
