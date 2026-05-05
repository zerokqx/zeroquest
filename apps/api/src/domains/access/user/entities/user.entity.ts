import { WalletEntity } from '@/domains/billing/wallet/entities/wallet.entity';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { User, UserRole } from '@zeroquest/db';
import { Exclude } from 'class-transformer';
import { IsString } from 'class-validator';

export class UserEntity implements User {
  @ApiProperty()
  id!: string;

  @ApiProperty()
  login!: string;

  @ApiProperty({ type: Number, nullable: true })
  telegramId!: number | null;

  @Exclude()
  @ApiHideProperty()
  passwordHash!: string;

  @ApiProperty()
  isBanned!: boolean;

  @ApiProperty({ enum: UserRole })
  role!: UserRole;

  @ApiProperty()
  createdAt!: Date;

  @ApiProperty()
  updatedAt!: Date;

  @ApiProperty()
  canComment!: boolean;

  @ApiProperty({ type: WalletEntity, nullable: true, required: false })
  wallet!: WalletEntity | null;

  @ApiProperty()
  @IsString()
  walletId!: string;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
