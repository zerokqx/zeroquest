import { AXIOS_INSTANCE } from '@/shared/api/axios-client';
import simpleRestProvider from 'ra-data-simple-rest';
import type { Method } from 'axios';

type RaHttpClientOptions = {
  method?: string;
  body?: string;
  headers?: HeadersInit;
  signal?: AbortSignal;
};

const normalizeHeaders = (headers?: HeadersInit): Record<string, string> => {
  if (!headers) return {};

  if (headers instanceof Headers) {
    return Object.fromEntries(headers.entries());
  }

  if (Array.isArray(headers)) {
    return Object.fromEntries(headers);
  }

  return headers as Record<string, string>;
};

const httpClient = async (url: string, options: RaHttpClientOptions = {}) => {
  const { method = 'GET', body, headers, signal } = options;

  const response = await AXIOS_INSTANCE.request({
    url,
    method: method as Method,
    data: body ? JSON.parse(body) : undefined,
    headers: {
      ...normalizeHeaders(headers),
      ...(body ? { 'Content-Type': 'application/json' } : {}),
    },
    signal,
  });

  const responseHeaders = new Headers();

  Object.entries(response.headers ?? {}).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      responseHeaders.set(key, value.join(', '));
    } else if (value !== undefined) {
      responseHeaders.set(key, String(value));
    }
  });

  return {
    status: response.status,
    headers: responseHeaders,
    body: JSON.stringify(response.data),
    json: response.data,
  };
};

export const dataProvider = simpleRestProvider(
  'http://localhost:4000/api/admin',
  httpClient,
);
