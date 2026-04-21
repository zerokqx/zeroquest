import { AxiosError } from 'axios';

type WalletErrorType = {
  ok?: boolean;
  type?: string;
};

type ApiErrorData = {
  message?: string | string[] | WalletErrorType;
  error?: string;
};

const isWalletErrorType = (value: unknown): value is WalletErrorType => {
  if (!value || typeof value !== 'object') {
    return false;
  }

  return 'type' in value;
};

export const getBuySubscribeErrorMessage = (error: unknown): string => {
  if (error instanceof AxiosError) {
    const data = error.response?.data as ApiErrorData | undefined;
    const message = data?.message;

    if (Array.isArray(message)) {
      return message.join(', ');
    }

    if (typeof message === 'string' && message.length > 0) {
      return message;
    }

    if (isWalletErrorType(message) && message.type === 'NOT_ENOUGH_FUNDS') {
      return 'Недостаточно средств на балансе для покупки тарифа.';
    }

    if (typeof data?.error === 'string' && data.error.length > 0) {
      return data.error;
    }
  }

  return 'Не удалось выполнить покупку. Попробуйте снова.';
};
