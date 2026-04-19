import Axios, {
  AxiosRequestConfig,
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:4000';

export const AXIOS_INSTANCE = Axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'x-client-type': 'web',
  },
});

type RetryableConfig = InternalAxiosRequestConfig & {
  _retry?: boolean;
};

let refreshPromise: Promise<AxiosResponse> | null = null;

const isAuthCheckRequest = (url?: string): boolean => {
  if (!url) return false;
  return url.includes('/api/users/me');
};

const isAuthEndpoint = (url?: string): boolean => {
  if (!url) return false;
  return url.includes('/api/auth/');
};

const refresh = async (): Promise<AxiosResponse> => {
  return Axios.post(
    `${BASE_URL}/api/auth/refresh`,
    {},
    {
      baseURL: BASE_URL,
      withCredentials: true,
      headers: {
        'x-client-type': 'web',
      },
    },
  );
};

AXIOS_INSTANCE.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as RetryableConfig | undefined;
    const status = error.response?.status;

    if (!originalRequest) {
      return Promise.reject(error);
    }

    if (status !== 401) {
      return Promise.reject(error);
    }

    // чтобы не зациклиться
    if (originalRequest._retry) {
      return Promise.reject(error);
    }

    // auth endpoints и проверка /me не должны запускать refresh
    if (isAuthEndpoint(originalRequest.url) || isAuthCheckRequest(originalRequest.url)) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

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
