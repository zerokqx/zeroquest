import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { WalletServiceTypes } from '@zeroquest/types';

export class DebitWalletDto implements WalletServiceTypes.WalletDebitEvent {
  @IsNotEmpty()
  @IsString()
  userId!: string;

  @IsNotEmpty()
  @IsInt()
  amount!: number;
}
