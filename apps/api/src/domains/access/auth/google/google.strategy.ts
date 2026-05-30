import { EnvironmentVariables } from '@/config/configuration';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthGuard, PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-google-oauth20';
import z from 'zod';

const GoogleAuthStrategyUserSchema = z.object({
  login: z.string(),
  email: z.email().nonempty(),
});

export type GoogleAuthStrategyUserType = z.infer<
  typeof GoogleAuthStrategyUserSchema
>;

@Injectable()
export class GoogleAuthStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(config: ConfigService<EnvironmentVariables>) {
    const google = config.get('google', { infer: true });
    if (!google?.clientId || !google?.clientSecret)
      throw new Error('Google configuration');
    super({
      clientID: google.clientId,
      clientSecret: google.clientSecret,
      passReqToCallback: true,
      callbackURL: 'http://localhost:4000/api/auth/google/redirect',
      scope: ['email', 'profile'],
    });
  }

  async validate(
    _req: Request,
    _accessToken: string,
    _refreshToken: string,
    profile: Profile,
  ): Promise<GoogleAuthStrategyUserType> {
    const res: Partial<GoogleAuthStrategyUserType> = {
      login: profile.displayName,
      email: profile.emails?.[0].value,
    };
    console.log(profile.username);
    return GoogleAuthStrategyUserSchema.parseAsync(res);
  }
}

export class GoogleStrategy extends AuthGuard('google') {}
