export type UserRole = 'USER' | 'ADMIN';

export interface JwtPayload {
  sub: string;
  sid: string;
  clientType: string;
  userAgentHash: string;
  role: UserRole;
  type: 'access' | 'refresh';
  jti: string,
  login: string
}

export interface AuthCookie {
  zeroquestAccess: string;
  zeroquestRefresh: string;
}
