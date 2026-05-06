import { z } from 'zod';

export const SidSchema = z.nanoid().min(1);

/**
 * Схема сессии пользователя
 */
export const SessionSchema = z.object({
  /**
   * Session ID — уникальный идентификатор сессии
   */
  sid: SidSchema,

  /**
   * User ID — идентификатор пользователя (CUID)
   */
  uid: z.cuid().min(1),

  /**
   * Access JTI — уникальный идентификатор access-токена (UUIDv4)
   */
  ajti: z.uuidv4().min(1),

  /**
   * Refresh JTI — уникальный идентификатор refresh-токена (UUIDv4)
   */
  rjti: z.uuidv4().min(1),

  /**
   * Last Activity Timestamp — время последней активности в миллисекундах
   */
  lat: z.number().int().positive(),

  /**
   * User Agent — строка с User-Agent клиента
   */
  ua: z.string().min(1),

  /**
   * Client Type — тип клиента (например, web, mobile, api)
   */
  ct: z.string().min(1),

  /**
   * Created At — дата создания сессии
   * */
  cat: z.number().int().positive(),
});

export const SessionCreateSchema = SessionSchema.omit({
  sid: true,
  cat: true,
  lat: true,
}).extend({
  sid: SessionSchema.shape.sid.optional(),
  lat: SessionSchema.shape.lat.optional(),
});

export const SessionUpdateSchema = SessionSchema.omit({
  uid: true,
  sid: true,
  ct: true,
}).partial();

export const SessionDeleteSchema = SessionSchema.pick({
  sid: true,
  uid: true,
});

export type Session = z.infer<typeof SessionSchema>;
export type SessionCreate = z.infer<typeof SessionCreateSchema>;
export type SessionUpdate = z.infer<typeof SessionUpdateSchema>;
export type SessionDelete = z.infer<typeof SessionDeleteSchema>;
