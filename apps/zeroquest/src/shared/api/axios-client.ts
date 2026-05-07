import {
  COOKIE_NAME,
  HEADERS_NAMES,
  RESPONSE_CODES,
} from '@zeroquest/constants';
import { useUserAuthStore } from '@/entites/user/model';
import Axios, {
  AxiosError,
  AxiosHeaders,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { modals } from '@mantine/modals';
import { router } from '@/app/main';
import { AxiosState } from './axios-state';

const state = new AxiosState();
const BASE_URL = '';

export const AXIOS_INSTANCE = Axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    [HEADERS_NAMES.CLIENT_TYPE]: 'web',
  },
});

type RetryableConfig = InternalAxiosRequestConfig & {
  _refreshRetry?: boolean;
  _csrfRetry?: boolean;
};

type ErrorResponseData = {
  code?: string;
  details?: {
    code?: string;
  };
};

const readCookie = (name: string): string | null => {
  if (typeof document === 'undefined') return null;

  const pair = document.cookie
    .split('; ')
    .find((item) => item.startsWith(`${name}=`));

  if (!pair) return null;

  const value = pair.slice(name.length + 1);
  return decodeURIComponent(value);
};

const ensureCsrf = async (force = false): Promise<void> => {
  if (!force && readCookie(COOKIE_NAME.CSRF)) return;

  await state.getCsrfPromise(() =>
    AXIOS_INSTANCE.get('/api/auth/csrf').then(() => undefined),
  );
};

const refresh = async (): Promise<AxiosResponse> =>
  AXIOS_INSTANCE.post('/api/auth/refresh', {});

AXIOS_INSTANCE.interceptors.request.use((config) => {
  const csrfToken = readCookie(COOKIE_NAME.CSRF);
  if (!csrfToken) return config;

  if (!config.headers) {
    config.headers = new AxiosHeaders();
  }

  config.headers.set(HEADERS_NAMES.CSRF, csrfToken);
  return config;
});

AXIOS_INSTANCE.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as RetryableConfig | undefined;
    const status = error.response?.status;
    const errorData = error.response?.data as ErrorResponseData | undefined;
    const errorCode = errorData?.code ?? errorData?.details?.code ?? null;

    if (!originalRequest) {
      return Promise.reject(error);
    }

    if (status !== 401 && status !== 403) {
      return Promise.reject(error);
    }

    switch (errorCode) {
      case RESPONSE_CODES.SESSION_NOT_EXISTS: {
        useUserAuthStore.getState().setIsAuth(false);
        state.handleOnce(RESPONSE_CODES.SESSION_NOT_EXISTS, () => {
          void modals.open({
            centered: true,
            title: 'Сессия завершена',
            modalId: RESPONSE_CODES.SESSION_NOT_EXISTS,
            children: 'Для продолжения требуется повторная авторизация.',
          });
        });
        void router.navigate({
          to: '/sign-up',
          replace: true,
        });

        return Promise.reject(error);
      }

      case RESPONSE_CODES.BANNED: {
        useUserAuthStore.getState().setIsAuth(false);
        state.handleOnce(RESPONSE_CODES.BANNED, () => {
          modals.open({
            centered: true,
            title: 'Блокировка',
            modalId: RESPONSE_CODES.BANNED,
            children:
              'Вы были заблокированы администратором приложения. Если блокировка была не обоснованой обратитесь к администратору.',
          });
        });
        void router.navigate({
          to: '/sign-up',
          replace: true,
        });
        return Promise.reject(error);
      }
      default:
        break;
    }

    switch (status) {
      case 403: {
        if (originalRequest._csrfRetry) {
          return Promise.reject(error);
        }

        if (errorCode && errorCode !== RESPONSE_CODES.CSRF_INVALID) {
          return Promise.reject(error);
        }

        originalRequest._csrfRetry = true;

        try {
          await ensureCsrf(true);
          return AXIOS_INSTANCE(originalRequest);
        } catch (csrfError) {
          return Promise.reject(csrfError);
        }
      }

      case 401: {
        if (originalRequest._refreshRetry) {
          return Promise.reject(error);
        }

        if (originalRequest.url?.includes('/api/auth/')) {
          return Promise.reject(error);
        }

        if (!useUserAuthStore.getState().isAuth) {
          return Promise.reject(error);
        }

        originalRequest._refreshRetry = true;

        try {
          await state.getRefreshPromise(refresh);
          return AXIOS_INSTANCE(originalRequest);
        } catch (refreshError) {
          return Promise.reject(refreshError);
        }
      }

      default:
        return Promise.reject(error);
    }
  },
);
AXIOS_INSTANCE.interceptors.request.use(async (config) => {
  const fingerprint = await state.getFingerprint();
  config.headers.set(HEADERS_NAMES.FINGERPRINT, fingerprint);
  return config;
});
export const customInstance = async <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  const { data } = await AXIOS_INSTANCE({
    ...config,
    ...options,
  });
  return data;
};

export type ErrorType<Error> = AxiosError<Error>;
export type BodyType<BodyData> = BodyData;
