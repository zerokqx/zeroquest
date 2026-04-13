import { EnvironmentVariables } from '@/config/configuration';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from 'axios';
import {
  ThreeXUiAddClientRequestBody,
  ThreeXUiAddClientResponse,
  ThreeXUiAddClientSettings,
  ThreeXUiGetInboundsResponse,
} from './dto/three-x-ui-client.dto';

type ThreeXUiRequestMeta = {
  _retry?: boolean;
  skipAuth?: boolean;
};

type ThreeXUiRequestConfig<D = unknown> = AxiosRequestConfig<D> &
  ThreeXUiRequestMeta;

type ThreeXUiInternalRequestConfig<D = unknown> =
  InternalAxiosRequestConfig<D> & ThreeXUiRequestMeta;

@Injectable()
export class ThreeXUiService {
  private readonly logger = new Logger(ThreeXUiService.name);

  private readonly threeXUiEnvironment: EnvironmentVariables['threeXUi'];
  private readonly threeXUiClient: AxiosInstance;
  private cookie: string | null = null;
  private isLoggingIn = false;
  private loginPromise: Promise<void> | null = null;

  constructor(private readonly config: ConfigService<EnvironmentVariables>) {
    this.threeXUiEnvironment = this.config.getOrThrow('threeXUi', {
      infer: true,
    });

    this.threeXUiClient = axios.create({
      baseURL: this.threeXUiEnvironment.apiBaseUrl,
      timeout: this.threeXUiEnvironment.timeoutMs,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.threeXUiClient.interceptors.request.use(async (config) => {
      const requestConfig = config as ThreeXUiInternalRequestConfig;

      if (!requestConfig.skipAuth && !this.cookie) {
        await this.login();
      }

      config.headers.set('Content-Type', 'application/json');
      if (this.cookie) {
        config.headers.set('Cookie', this.cookie);
      }
      return config;
    });

    this.threeXUiClient.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        const requestConfig = error.config as
          | ThreeXUiInternalRequestConfig
          | undefined;
        const status = error.response?.status;

        if (
          requestConfig &&
          !requestConfig.skipAuth &&
          !requestConfig._retry &&
          (status === 401 || status === 403)
        ) {
          this.logger.warn('3x-ui session expired, re-login');
          requestConfig._retry = true;
          this.cookie = null;
          await this.login();

          return this.threeXUiClient(requestConfig);
        }

        const responseData =
          typeof error.response?.data === 'string'
            ? error.response.data
            : JSON.stringify(error.response?.data);

        return Promise.reject(
          new Error(
            `3x-ui request failed: ${status ?? error.message} ${responseData ?? ''}`.trim(),
          ),
        );
      },
    );
  }

  private async login(): Promise<void> {
    if (this.isLoggingIn && this.loginPromise) {
      return this.loginPromise;
    }

    this.isLoggingIn = true;
    this.loginPromise = (async () => {
      const loginConfig: ThreeXUiRequestConfig = {
        // Login must not reuse an expired cookie.
        skipAuth: true,
        headers: {
          Cookie: '',
        },
      };

      const response = await this.threeXUiClient.post(
        `${this.threeXUiEnvironment.panelBaseUrl}/login`,
        {
          username: this.threeXUiEnvironment.username,
          password: this.threeXUiEnvironment.password,
        },
        loginConfig,
      );

      const setCookie = response.headers['set-cookie'];
      const cookieHeader = Array.isArray(setCookie) ? setCookie[0] : setCookie;

      if (!cookieHeader) {
        throw new Error('3x-ui login failed: set-cookie header missing');
      }

      this.cookie = cookieHeader.split(';')[0];
      this.logger.log('3x-ui session established');
    })();

    try {
      await this.loginPromise;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          `3x-ui login failed: ${error.response?.status ?? error.message}`,
        );
      }

      throw error;
    } finally {
      this.isLoggingIn = false;
      this.loginPromise = null;
    }
  }

  async getInbounds(): Promise<ThreeXUiGetInboundsResponse> {
    const response = await this.threeXUiClient.get<ThreeXUiGetInboundsResponse>(
      '/inbounds/list',
    );
    return response.data;
  }

  async addClient(
    inboundId: number,
    settings: ThreeXUiAddClientSettings,
  ): Promise<ThreeXUiAddClientResponse> {
    const body: ThreeXUiAddClientRequestBody = {
      id: inboundId,
      settings: JSON.stringify(settings),
    };

    const response = await this.threeXUiClient.post<ThreeXUiAddClientResponse>(
      '/inbounds/addClient',
      body,
    );

    return response.data;
  }


}
