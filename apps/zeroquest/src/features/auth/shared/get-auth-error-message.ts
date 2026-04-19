import { AxiosError } from 'axios';

type ApiErrorData = { message?: string | string[] };

export const getAuthErrorMessage = (error: unknown): string => {
  if (error instanceof AxiosError) {
    const message = (error.response?.data as ApiErrorData | undefined)?.message;

    if (Array.isArray(message)) return message.join(', ');
    if (typeof message === 'string' && message.length > 0) return message;
  }

  return 'Не удалось выполнить запрос. Попробуйте снова.';
};
