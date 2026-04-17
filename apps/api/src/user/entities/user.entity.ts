import { ApiProperty } from '@nestjs/swagger';
import { User, UserRole } from '@zeroquest/db';

export class UserEntity implements User {
  @ApiProperty()
  id!: string;

  @ApiProperty()
  login!: string;

  @ApiProperty({type: Number, nullable: true,})
  telegramId!: number | null;

  @ApiProperty()
  passwordHash!: string;

  @ApiProperty()
  isBanned!: boolean;


  @ApiProperty({enum : UserRole})
  role!: UserRole | null;

  @ApiProperty()
  createdAt!: Date;

  @ApiProperty()
  updatedAt!: Date;

  @ApiProperty()
  canComment!: boolean;
}
