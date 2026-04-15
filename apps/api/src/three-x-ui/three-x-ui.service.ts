import { EnvironmentVariables } from '@/config/configuration';
import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from 'axios';
import {
  ThreeXUiAddClientInput,
  ThreeXUiAddClientInputSettings,
  ThreeXUiAddClientRequestBody,
  ThreeXUiAddClientResponse,
  ThreeXUiAddClientSettings,
  ThreeXUiUpdateClientInput,
  ThreeXUiInbound,
  ThreeXUiGetInboundsResponse,
  ThreeXUiStreamSettings,
  XuiClient,
} from './dto/three-x-ui-client.dto';

type ThreeXUiRequestMeta = {
  _retry?: boolean;
  skipAuth?: boolean;
};

type ThreeXUiRequestConfig<D = unknown> = AxiosRequestConfig<D> &
  ThreeXUiRequestMeta;

type ThreeXUiInternalRequestConfig<D = unknown> =
  InternalAxiosRequestConfig<D> & ThreeXUiRequestMeta;

type ThreeXUiBuildVlessClient = Pick<XuiClient, 'email' | 'flow'> & {
  id: string;
};

type ThreeXUiBuildVlessOptions = {
  host?: string;
  label?: string;
};

type ThreeXUiWsSettings = {
  path?: string;
  headers?: {
    Host?: string;
    host?: string;
  };
};

type ThreeXUiGrpcSettings = {
  serviceName?: string;
  authority?: string;
};

type ThreeXUiTlsSettings = {
  serverName?: string;
  fingerprint?: string;
  alpn?: string[];
};

type ThreeXUiParsedStreamSettings = ThreeXUiStreamSettings & {
  wsSettings?: ThreeXUiWsSettings;
  grpcSettings?: ThreeXUiGrpcSettings;
  tlsSettings?: ThreeXUiTlsSettings;
};

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
    const response =
      await this.threeXUiClient.get<ThreeXUiGetInboundsResponse>(
        '/inbounds/list',
      );
    return response.data;
  }

  async addClient(
    inboundId: number,
    settings: ThreeXUiAddClientInputSettings,
  ): Promise<ThreeXUiAddClientResponse> {
    const normalizedSettings = this.normalizeAddClientSettings(settings);
    const body: ThreeXUiAddClientRequestBody = {
      id: inboundId,
      settings: JSON.stringify(normalizedSettings),
    };

    const response = await this.threeXUiClient.post<ThreeXUiAddClientResponse>(
      '/inbounds/addClient',
      body,
    );

    return response.data;
  }

  async updateClient(
    uuid: string,
    client: ThreeXUiUpdateClientInput,
  ): Promise<ThreeXUiAddClientResponse> {
    const normalized = this.normalizeClient(client);
    const safePayload: XuiClient = { ...normalized };
    delete safePayload.id;
    delete safePayload.email;
    delete safePayload.subId;

    const response = await this.threeXUiClient.post<ThreeXUiAddClientResponse>(
      `/inbounds/updateClient/${uuid}`,
      safePayload,
    );

    return response.data;
  }

  private normalizeAddClientSettings(
    settings: ThreeXUiAddClientInputSettings,
  ): ThreeXUiAddClientSettings {
    return {
      clients: settings.clients.map((client) => this.normalizeClient(client)),
    };
  }

  private normalizeClient(client: ThreeXUiAddClientInput): XuiClient {
    const { totalGb, ...rest } = client;
    const totalBytes =
      totalGb === undefined ? undefined : this.convertGigabytesToBytes(totalGb);

    return {
      ...rest,
      totalGB:
        totalBytes === undefined
          ? undefined
          : this.normalizeClientTotalGb(totalBytes),
    };
  }

  private convertGigabytesToBytes(totalGb: number | bigint): bigint {
    const normalized =
      typeof totalGb === 'bigint'
        ? totalGb
        : BigInt(Math.trunc(totalGb));

    return normalized * 1024n * 1024n * 1024n;
  }

  private normalizeClientTotalGb(totalGB: number | bigint): number {
    const normalized = typeof totalGB === 'bigint' ? Number(totalGB) : totalGB;

    if (!Number.isSafeInteger(normalized)) {
      throw new BadRequestException(
        '3x-ui totalGB must be a safe integer after bigint normalization',
      );
    }

    return normalized;
  }

  async buildVlessLinkByInboundId(
    inboundId: number,
    client: ThreeXUiBuildVlessClient,
    options?: ThreeXUiBuildVlessOptions,
  ): Promise<string> {
    const response = await this.getInbounds();
    const inbound = response.obj?.find((item) => item.id === inboundId);

    if (!inbound) {
      throw new NotFoundException(`3x-ui inbound ${inboundId} not found`);
    }

    return this.buildVlessLink(inbound, client, options);
  }

  buildVlessLink(
    inbound: ThreeXUiInbound,
    client: ThreeXUiBuildVlessClient,
    options?: ThreeXUiBuildVlessOptions,
  ): string {
    if (inbound.protocol !== 'vless') {
      throw new BadRequestException(
        `Inbound ${inbound.id} does not use vless protocol`,
      );
    }

    if (!client.id) {
      throw new BadRequestException('3x-ui client uuid is required');
    }

    const streamSettings =
      this.parseJson<ThreeXUiParsedStreamSettings>(
        inbound.streamSettings,
        'streamSettings',
      ) ?? {};
    const host = this.resolveInboundHost(inbound, options?.host);
    const params = new URLSearchParams({
      type: streamSettings.network || 'tcp',
      encryption: 'none',
    });

    if (streamSettings.security && streamSettings.security !== 'none') {
      params.set('security', streamSettings.security);
    }

    if (client.flow) {
      params.set('flow', client.flow);
    }

    this.appendRealityParams(params, streamSettings);
    this.appendTlsParams(params, streamSettings);
    this.appendTransportParams(params, streamSettings);

    const label = options?.label ?? this.buildLinkLabel(inbound, client);

    return `vless://${encodeURIComponent(client.id)}@${host}:${inbound.port}?${params.toString()}#${encodeURIComponent(label)}`;
  }

  private appendRealityParams(
    params: URLSearchParams,
    streamSettings: ThreeXUiParsedStreamSettings,
  ) {
    if (streamSettings.security !== 'reality') {
      return;
    }

    const publicKey = streamSettings.realitySettings?.settings?.publicKey;
    if (!publicKey) {
      throw new BadRequestException(
        'reality inbound public key is required to build vless link',
      );
    }

    params.set('pbk', publicKey);

    const fingerprint =
      streamSettings.realitySettings?.settings?.fingerprint ||
      streamSettings.tlsSettings?.fingerprint;
    if (fingerprint) {
      params.set('fp', fingerprint);
    }

    const serverName =
      streamSettings.realitySettings?.settings?.serverName ||
      streamSettings.realitySettings?.serverNames?.[0];
    if (serverName) {
      params.set('sni', serverName);
    }

    const shortId = streamSettings.realitySettings?.shortIds?.[0];
    if (shortId) {
      params.set('sid', shortId);
    }

    const spiderX = streamSettings.realitySettings?.settings?.spiderX;
    if (spiderX) {
      params.set('spx', spiderX);
    }
  }

  private appendTlsParams(
    params: URLSearchParams,
    streamSettings: ThreeXUiParsedStreamSettings,
  ) {
    if (streamSettings.security !== 'tls') {
      return;
    }

    const serverName = streamSettings.tlsSettings?.serverName;
    if (serverName) {
      params.set('sni', serverName);
    }

    const alpn = streamSettings.tlsSettings?.alpn?.join(',');
    if (alpn) {
      params.set('alpn', alpn);
    }

    const fingerprint = streamSettings.tlsSettings?.fingerprint;
    if (fingerprint) {
      params.set('fp', fingerprint);
    }
  }

  private appendTransportParams(
    params: URLSearchParams,
    streamSettings: ThreeXUiParsedStreamSettings,
  ) {
    if (streamSettings.network === 'ws') {
      const path = streamSettings.wsSettings?.path;
      if (path) {
        params.set('path', path);
      }

      const hostHeader =
        streamSettings.wsSettings?.headers?.Host ||
        streamSettings.wsSettings?.headers?.host;
      if (hostHeader) {
        params.set('host', hostHeader);
      }
    }

    if (streamSettings.network === 'grpc') {
      const serviceName = streamSettings.grpcSettings?.serviceName;
      if (serviceName) {
        params.set('serviceName', serviceName);
      }

      const authority = streamSettings.grpcSettings?.authority;
      if (authority) {
        params.set('authority', authority);
      }
    }
  }

  private resolveInboundHost(
    inbound: ThreeXUiInbound,
    overrideHost?: string,
  ) {
    const candidateHost = [overrideHost, inbound.listen, this.threeXUiEnvironment.host]
      .map((item) => item?.trim())
      .find((item) => item && !this.isWildcardHost(item));

    if (!candidateHost) {
      throw new BadRequestException(
        `Host is required to build vless link for inbound ${inbound.id}`,
      );
    }

    try {
      if (/^[a-z]+:\/\//i.test(candidateHost)) {
        return new URL(candidateHost).hostname;
      }
    } catch {
      throw new BadRequestException(
        `Invalid host provided for inbound ${inbound.id}`,
      );
    }

    return candidateHost.replace(/\/.*$/, '').replace(/:\d+$/, '');
  }

  private isWildcardHost(host: string) {
    return host === '0.0.0.0' || host === '::' || host === '[::]';
  }

  private buildLinkLabel(
    inbound: ThreeXUiInbound,
    client: ThreeXUiBuildVlessClient,
  ) {
    return client.email || inbound.remark || `inbound-${inbound.id}`;
  }

  private parseJson<T>(raw: string, fieldName: string): T | null {
    if (!raw) {
      return null;
    }

    try {
      return JSON.parse(raw) as T;
    } catch {
      throw new BadRequestException(
        `3x-ui inbound ${fieldName} contains invalid json`,
      );
    }
  }
}
