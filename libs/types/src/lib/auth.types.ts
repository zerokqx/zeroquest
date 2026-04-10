export interface JwtPayload {
  sub: string;
  sid: string;
  clientType: string;
  userAgentHash: string;
  type: 'access' | 'refresh';
  jti: string,
}

export interface AuthCookie {
  zeroquestAccess: string;
  zeroquestRefresh: string;
}
