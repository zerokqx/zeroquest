import { EnvironmentVariables } from '@/config/configuration';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class ThreeXUiService {
  private readonly logger = new Logger(ThreeXUiService.name);

  private cookie: string | null = null;
  private isLoggingIn = false;
  private loginPromise: Promise<void> | null = null;

  constructor(private readonly config: ConfigService<EnvironmentVariables>) {}

  private get settings() {
    return this.config.getOrThrow('threeXUi', { infer: true });
  }

  private get panelBaseUrl() {
    return this.settings.panelBaseUrl;
  }

  private get apiBaseUrl() {
    return this.settings.apiBaseUrl;
  }

  private get username() {
    return this.settings.username;
  }

  private get password() {
    return this.settings.password;
  }

  private async login(): Promise<void> {
    if (this.isLoggingIn && this.loginPromise) {
      return this.loginPromise;
    }

    this.isLoggingIn = true;
    this.loginPromise = (async () => {
      const response = await fetch(`${this.panelBaseUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password,
        }),
      });

      if (!response.ok) {
        throw new Error(`3x-ui login failed: ${response.status}`);
      }

      const setCookie = response.headers.get('set-cookie');
      if (!setCookie) {
        throw new Error('3x-ui login failed: set-cookie header missing');
      }

      this.cookie = setCookie.split(';')[0];
      this.logger.log('3x-ui session established');
    })();

    try {
      await this.loginPromise;
    } finally {
      this.isLoggingIn = false;
      this.loginPromise = null;
    }
  }

  private async ensureAuth() {
    if (!this.cookie) {
      await this.login();
    }
  }

   async request<T>(
    path: string,
    init: RequestInit,
    retry = true,
  ): Promise<T> {
    await this.ensureAuth();

    let response = await fetch(`${this.apiBaseUrl}${path}`, {
      ...init,
      headers: {
        'Content-Type': 'application/json',
        Cookie: this.cookie ?? '',
        ...(init.headers ?? {}),
      },
    });

    if ((response.status === 401 || response.status === 403) && retry) {
      this.logger.warn('3x-ui session expired, re-login');
      this.cookie = null;
      await this.login();

      response = await fetch(`${this.apiBaseUrl}${path}`, {
        ...init,
        headers: {
          'Content-Type': 'application/json',
          Cookie: this.cookie ?? '',
          ...(init.headers ?? {}),
        },
      });
    }

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`3x-ui request failed: ${response.status} ${text}`);
    }

    return response.json() as Promise<T>;
  }

  getInbounds() {
    return this.request('/inbounds/list', {
      method: 'GET',
    });
  }

  addClient(inboundId: number, settings: unknown) {
    return this.request('/inbounds/addClient', {
      method: 'POST',
      body: JSON.stringify({
        id: inboundId,
        settings: JSON.stringify(settings),
      }),
    });
  }
}
