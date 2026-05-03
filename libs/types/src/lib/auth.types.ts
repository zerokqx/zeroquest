export type UserRole = 'USER' | 'ADMIN';

export interface JwtPayload {
  sub: string;
  sid: string;
  clientType: string;
  role: UserRole;
  type: 'access' | 'refresh';
  jti: string;
  login: string;
}

export interface AuthCookie {
  zeroquestAccess: string;
  zeroquestRefresh: string;
}
//
// export const JwtPayloadSchema = z.object({
//   sub: z.string().nonempty(),
//   sid: z.string().nonempty(),
//   clientType: z.string().nonempty(),
//   userAgentHash: z.string().nonempty(),
//   role: z.enum(['USER', 'ADMIN']),
//   type: z.enum(['access', 'refresh']),
//   jti: z.string().nonempty(),
//   login: z.string().nonempty(),
// });
//
// export function validatePayloadWithSession(payload: unknown, session: Session) {
//   return JwtPayloadSchema.refine(
//     (data) =>
//       !!session &&
//       session.clientType.name === data.clientType &&
//       session.userAgentHash === data.userAgentHash &&
//       session.refreshTokenJti === data.jti &&
//       data.sub === session.userId,
//     {
//       message: 'Payload does not match session',
//     }
//   ).parse(payload);
// }
