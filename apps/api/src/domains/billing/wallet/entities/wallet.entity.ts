import { ApiProperty } from '@nestjs/swagger';
import { Wallet } from '@zeroquest/db';

export class WalletEntity implements Wallet {
  @ApiProperty()
  id!: string;
  @ApiProperty()
  held!: number;
  @ApiProperty()
  balance!: number;
  @ApiProperty()
  userId!: string;
}
