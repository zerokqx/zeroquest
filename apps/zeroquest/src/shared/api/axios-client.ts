import Axios, { AxiosRequestConfig, AxiosError } from 'axios';

const MAX_REFRESH_ATTEMPTS = 3;
const ACCESS_COOKIE_NAME = 'zeroquestAccess';
let refreshAttempts = 0;
let refreshRequest: Promise<void> | null = null;

const hasAccessCookie = (): boolean => {
  if (typeof document === 'undefined') return false;
  return document.cookie
    .split(';')
    .map((part) => part.trim())
    .some((part) => part.startsWith(`${ACCESS_COOKIE_NAME}=`));
};

export const AXIOS_INSTANCE = Axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:4000',
  withCredentials: true,
  headers: {
    'x-client-type': 'web',
  },
});

AXIOS_INSTANCE.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as
      | (AxiosRequestConfig & { _retry?: boolean })
      | undefined;
    const status = error.response?.status;
    const requestUrl = originalRequest?.url ?? '';
    const isAuthEndpoint = requestUrl.includes('/auth/');

    if (
      status === 401 &&
      originalRequest &&
      !originalRequest._retry &&
      !isAuthEndpoint
    ) {
      if (!hasAccessCookie()) {
        return Promise.reject(error);
      }
      if (refreshAttempts >= MAX_REFRESH_ATTEMPTS) {
        return Promise.reject(error);
      }

      originalRequest._retry = true;

      if (!refreshRequest) {
        refreshAttempts += 1;
        refreshRequest = AXIOS_INSTANCE.post('/api/auth/refresh')
          .then(() => {
            refreshAttempts = 0;
          })
          .finally(() => {
            refreshRequest = null;
          });
      }

      await refreshRequest;
      return AXIOS_INSTANCE(originalRequest);
    }

    return Promise.reject(error);
  },
);

export const customInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  const promise = AXIOS_INSTANCE({
    ...config,
    ...options,
  }).then(({ data }) => data);

  return promise;
};

// Override the return error type for react-query and swr
export type ErrorType<Error> = AxiosError<Error>;

// Standard body type
export type BodyType<BodyData> = BodyData;

// Or wrap the body type if processing data before sending
// export type BodyType<BodyData> = CamelCase<BodyData>;
