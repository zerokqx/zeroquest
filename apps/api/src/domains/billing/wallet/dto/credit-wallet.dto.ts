
import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { WalletServiceTypes } from '@zeroquest/types';

export class CreditWalletDto implements WalletServiceTypes.WalletCreditEvent {
  @IsNotEmpty()
  @IsString()
  userId!: string;

  @IsNotEmpty()
  @IsInt()
  amount!: number;
}
