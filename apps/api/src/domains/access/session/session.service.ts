import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { nanoid } from 'nanoid';
import { AuthServiceTypes } from '@zeroquest/types';
import {
  Session,
  SessionCreate,
  SessionCreateSchema,
  SessionDelete,
  SessionDeleteSchema,
  SessionUpdate,
  SessionUpdateSchema,
  SidSchema,
} from './dto/schemas/session.schema';
import { SessionCacheService } from './session-cache.service';

@Injectable()
export class SessionService {
  private readonly logger = new Logger(SessionService.name);
  private static readonly MIN_DELETE_SESSION_AGE_MS = 60_000;

  constructor(private readonly sessionCacheService: SessionCacheService) {}

  async createSession(data: SessionCreate): Promise<Session> {
    const parsedData = await SessionCreateSchema.parseAsync(data);
    const sid = parsedData.sid ?? nanoid();
    const lat = Date.now();
    const value: Session = { sid, lat, cat: Date.now(), ...parsedData };

    await this.sessionCacheService.createSession(value);

    return value;
  }

  async deleteSession(data: SessionDelete) {
    const { sid, uid } = await SessionDeleteSchema.parseAsync(data);
    await this.sessionCacheService.deleteSession(sid, uid);
  }

  async updateSession(
    sid: Session['sid'],
    data: SessionUpdate,
  ): Promise<Session> {
    const [parsedSid, parsedData] = await Promise.all([
      SidSchema.parseAsync(sid),
      SessionUpdateSchema.parseAsync(data),
    ]);

    const session = await this.sessionCacheService.getSession(parsedSid);
    if (!session) throw new Error('Session not found');

    const updated: Session = {
      ...session,
      ...parsedData,
    };

    await this.sessionCacheService.updateSession(parsedSid, updated);
    return updated;
  }

  async getSession(sid: Session['sid']): Promise<Session | null> {
    const parsedSid = await SidSchema.parseAsync(sid);
    return await this.sessionCacheService.getSession(parsedSid);
  }

  async findAll(userId: Session['uid']): Promise<Session[]> {
    return this.sessionCacheService.getUserSessions(userId);
  }

  async findOne(id: Session['sid'], userId: Session['uid']): Promise<Session> {
    const session = await this.getSession(id);
    if (!session || session.uid !== userId) {
      throw new NotFoundException('Session not found');
    }
    return session;
  }

  async findSessionByRefresh(
    userId: Session['uid'],
    sid: Session['sid'],
  ): Promise<Session> {
    const session = await this.getSession(sid);
    if (!session || session.uid !== userId) {
      throw new UnauthorizedException('Session not found for refresh context');
    }
    return session;
  }

  async remove(
    id: Session['sid'],
    payload: AuthServiceTypes.JwtPayloadSchemaType,
  ): Promise<Session> {
    this.logger.debug(
      `Запрошено удаление сессии: sessionId=${id}, requester=${payload.sub}`,
    );

    const targetSession = await this.findOne(id, payload.sub);
    const currentSession = await this.findSessionByRefresh(
      payload.sub,
      payload.sid,
    );

    const ageMs = Date.now() - currentSession.lat;
    if (ageMs < SessionService.MIN_DELETE_SESSION_AGE_MS) {
      throw new BadRequestException(
        'Session can be deleted only after 1 minute in current session',
      );
    }
    await this.deleteSession({
      sid: targetSession.sid,
      uid: targetSession.uid,
    });

    return targetSession;
  }
}
