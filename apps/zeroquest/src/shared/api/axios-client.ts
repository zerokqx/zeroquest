import Axios, {
  AxiosRequestConfig,
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:4000';
const CSRF_COOKIE_NAME = 'zeroquestCsrf';
const CSRF_HEADER_NAME = 'x-csrf-token';

export const AXIOS_INSTANCE = Axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'x-client-type': 'web',
  },
});

type RetryableConfig = InternalAxiosRequestConfig & {
  _refreshRetry?: boolean;
  _csrfRetry?: boolean;
};

let refreshPromise: Promise<AxiosResponse> | null = null;
let csrfPromise: Promise<void> | null = null;

const isAuthEndpoint = (url?: string): boolean => {
  if (!url) return false;
  return url.includes('/api/auth/');
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

const getCsrfFromCookie = (): string | null => readCookie(CSRF_COOKIE_NAME);

const ensureCsrf = async (): Promise<void> => {
  if (getCsrfFromCookie()) return;

  csrfPromise ??= AXIOS_INSTANCE.get('/api/auth/csrf')
    .then(() => undefined)
    .finally(() => {
      csrfPromise = null;
    });

  await csrfPromise;
};

const refresh = async (): Promise<AxiosResponse> =>
  AXIOS_INSTANCE.post('/api/auth/refresh', {});

const installCsrfHeaderInterceptor = () => {
  AXIOS_INSTANCE.interceptors.request.use((config) => {
    const csrfToken = getCsrfFromCookie();
    if (!csrfToken) return config;

    config.headers ??= {};
    (config.headers as Record<string, string>)[CSRF_HEADER_NAME] = csrfToken;
    return config;
  });
};

installCsrfHeaderInterceptor();

AXIOS_INSTANCE.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as RetryableConfig | undefined;
    const status = error.response?.status;

    if (!originalRequest) {
      return Promise.reject(error);
    }

    if (status !== 401 && status !== 403) {
      return Promise.reject(error);
    }

    if (status === 403) {
      // чтобы не зациклиться
      if (originalRequest._csrfRetry) {
        return Promise.reject(error);
      }

      originalRequest._csrfRetry = true;

      try {
        await ensureCsrf();
        return AXIOS_INSTANCE(originalRequest);
      } catch (csrfError) {
        return Promise.reject(csrfError);
      }
    }

    // чтобы не зациклиться
    if (originalRequest._refreshRetry) {
      return Promise.reject(error);
    }

    // auth endpoints не должны запускать refresh
    if (isAuthEndpoint(originalRequest.url)) {
      return Promise.reject(error);
    }

    originalRequest._refreshRetry = true;

    try {
      refreshPromise ??= refresh().finally(() => {
        refreshPromise = null;
      });

      await refreshPromise;

      return AXIOS_INSTANCE(originalRequest);
    } catch (refreshError) {
      return Promise.reject(refreshError);
    }
  },
);

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
