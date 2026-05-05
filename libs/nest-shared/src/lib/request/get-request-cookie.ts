type RequestLikeWithCookies = {
  cookies?: Record<string, unknown>;
};

export const getRequestCookie = (
  request: RequestLikeWithCookies,
  cookieName: string,
): string | undefined => {
  const cookie = request.cookies?.[cookieName];
  if (typeof cookie !== 'string') {
    return undefined;
  }

  const normalized = cookie.trim();
  return normalized || undefined;
};
