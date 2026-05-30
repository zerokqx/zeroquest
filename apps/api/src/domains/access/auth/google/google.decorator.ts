import { CsrfPublic } from '@/domains/security/csrf/csrf.decorator';
import { SkipFingerprint } from '@/domains/security/fingerprint/fingerprint.decorator';
import { applyDecorators, UseGuards } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { Public } from '@zeroquest/nest-shared';
import { GoogleStrategy } from './google.strategy';

export const GoogleAuthRedirectGet = () =>
  applyDecorators(
    UseGuards(GoogleStrategy),
    ApiOperation({ description: 'Google auth' }),
    SkipFingerprint(),
    CsrfPublic(),
    Public(),
  );

export const GoogleAuthStartGet = () =>
  applyDecorators(
    UseGuards(GoogleStrategy),
    ApiOperation({ description: 'Google auth' }),
    SkipFingerprint(),
    CsrfPublic(),
    Public(),
  );
