export const COOKIE_NAME = {
  ACCESS: 'zeroquestAccess',
  REFRESH: 'zeroquestRefresh',
  CSRF: 'zeroquestCsrf',
} as const;

export const HEADERS_NAMES = {
  FINGERPRINT: 'x-client-fingerprint',
  CLIENT_TYPE: 'x-client-type',
  CSRF: 'x-csrf-token',
} as const;

export const RESPONSE_CODES = {
  BANNED: "BANNED",
  SESSION_NOT_EXISTS: 'SESSION_NOT_EXISTS',
};
