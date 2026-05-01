import { JwtPayloadSchema } from '@/domains/access/token/dto/schemas/payload.schema';
import { PrismaZod } from '@zeroquest/db';
import z from 'zod';

export const SessionPayloadCompareSchema = z
  .object({
    session: PrismaZod.SessionModelSchema,
    access: JwtPayloadSchema,
    refresh: JwtPayloadSchema,
  })
  .superRefine(
    (
      {
        access,
        refresh,
        session: { userId, accessTokenJti, refreshTokenJti, userAgentHash },
      },
      ctx,
    ) => {
      if (access.type !== 'access')
        ctx.addIssue({
          code: 'custom',
          path: ['payload', 'type'],
          message: 'Access has type is not equals to `access`',
        });

      if (refresh.type !== 'refresh')
        ctx.addIssue({
          code: 'custom',
          path: ['payload', 'type'],
          message: 'Access has type is not equals to `access`',
        });

      if (access.jti !== accessTokenJti || refresh.jti !== refreshTokenJti)
        ctx.addIssue({
          code: 'custom',
          path: ['payload', 'jti'],
          message: 'Payload JTI dont equals to session.*TokenJti',
        });

      if (access.sub !== userId || refresh.sub !== userId)
        ctx.addIssue({
          code: 'custom',
          path: ['payload', 'sub'],
          message: 'Payload sub(userId) dont equals to session.userId',
        });

      if (
        access.userAgentHash !== userAgentHash ||
        refresh.userAgentHash !== userAgentHash
      )
        ctx.addIssue({
          code: 'custom',
          path: ['payload', 'sub'],
          message: 'Payload userAgentHash dont equals to session.userAgentHash',
        });
    },
  );
