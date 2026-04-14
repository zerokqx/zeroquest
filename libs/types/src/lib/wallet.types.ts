export const walletPaterns = {
  debit: { cmd: 'update:debit' },
  credit: { cmd: 'update:credit' },
} as const;

export const WALLET_RESPONSE_TYPE = {
  UNEXPECTED_ERROR: 'UNEXPECTED_ERROR',
  NOT_ENOUGH_FUNDS: 'NOT_ENOUGH_FUNDS',
  SUCCESS: 'SUCCESS',
  INCORRECT_VALUE:"INCORRECT_VALUE"
} as const;

type DebitResponseType = keyof typeof WALLET_RESPONSE_TYPE;

export interface WalletDebitEvent {
  userId: string;
  amount: number;
}

export interface WalletCreditEvent {
  userId: string;
  amount: number;
}

export interface WalletEventResponse {
  ok: boolean;
  type: DebitResponseType;
}
