import {
  createParamDecorator,
  SetMetadata,
} from '@nestjs/common';
import { CustomRequest } from '@zeroquest/types';

export const SKIP_FINGERPRINT_KEY = 'skipFingerprint';
export const SkipFingerprint = () => SetMetadata(SKIP_FINGERPRINT_KEY, true);

export const Fingerprint = createParamDecorator((_data, ctx) => {
  const req = ctx.switchToHttp().getRequest<CustomRequest>();
  const fingerprint = req.fingerprint;
  return fingerprint ?? '';
});
