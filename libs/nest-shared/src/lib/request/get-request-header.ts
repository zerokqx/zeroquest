type RequestHeaderValue = string | string[] | undefined;

type RequestLikeWithHeaders = {
  headers?: Record<string, RequestHeaderValue>;
};

const normalizeHeaderValue = (
  headerValue: RequestHeaderValue,
): string | undefined => {
  if (Array.isArray(headerValue)) {
    for (const value of headerValue) {
      const normalized = value.trim();
      if (normalized) {
        return normalized;
      }
    }
    return undefined;
  }

  if (typeof headerValue === 'string') {
    const normalized = headerValue.trim();
    return normalized || undefined;
  }

  return undefined;
};

export const getRequestHeader = (
  request: RequestLikeWithHeaders,
  headerName: string,
): string | undefined => {
  const normalizedHeaderName = headerName.toLowerCase();
  const headerValue =
    request.headers?.[normalizedHeaderName] ?? request.headers?.[headerName];

  return normalizeHeaderValue(headerValue);
};
