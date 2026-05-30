import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { Session } from './dto/schemas/session.schema';

@Injectable()
export class SessionCacheService {
  constructor(private readonly redis: Redis) {}

  private static readonly SESSION_TTL_SECONDS = 86400 * 30;

  private userSessionsKey(uid: Session['uid']) {
    return `user:${uid}:sessions`;
  }

  private sessionKey(sid: Session['sid']) {
    return `session:${sid}`;
  }

  async createSession(session: Session): Promise<void> {
    const sessionKey = this.sessionKey(session.sid);
    const userSessionsKey = this.userSessionsKey(session.uid);

    await this.redis
      .multi()
      .set(
        sessionKey,
        JSON.stringify(session),
        'EX',
        SessionCacheService.SESSION_TTL_SECONDS,
        'NX',
      )
      .sadd(userSessionsKey, session.sid)
      .expire(userSessionsKey, SessionCacheService.SESSION_TTL_SECONDS)
      .exec();
  }

  async deleteSession(sid: Session['sid'], uid: Session['uid']) {
    const userSessionsKey = this.userSessionsKey(uid);
    const sessionKey = this.sessionKey(sid);
    await this.redis.multi().del(sessionKey).srem(userSessionsKey, sid).exec();
  }

  async getSession(sid: Session['sid']): Promise<Session | null> {
    const raw = await this.redis.get(this.sessionKey(sid));
    if (!raw) return null;
    return JSON.parse(raw) as Session;
  }

  async getUserSessions(uid: Session['uid']): Promise<Session[]> {
    const sessionIds = await this.redis.smembers(this.userSessionsKey(uid));
    console.log(sessionIds)
    if (sessionIds.length === 0) return [];

    const raws = await this.redis.mget(
      sessionIds.map((sessionId) => this.sessionKey(sessionId)),
    );
    console.log(raws)
    return raws.flatMap((raw) => {
      if (!raw) return [];
      try {
        const session = JSON.parse(raw) as Session;
        return session.uid === uid ? [session] : [];
      } catch {
        return [];
      }
    });
  }

  async updateSession(sid: Session['sid'], session: Session): Promise<void> {
    await this.redis.set(
      this.sessionKey(sid),
      JSON.stringify(session),
      'KEEPTTL',
      'XX',
    );
  }
}
