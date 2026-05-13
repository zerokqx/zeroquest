import { MfaValidator } from '@zeroquest/nest-shared/security/mfa/mfa-validator.interface';
import z from 'zod';

const TotpStartSchema = z.object({
  uid: z.cuid(),
  ua: z.string().optional(),
  ct: z.string().nonoptional(),
});

const TotpConfirmSchema = z.object({
  challengeId: z.nanoid().nonoptional(),
  value: z.string().min(6).max(6),
  uid: z.cuid(),
});

const TotpStateSchema = z.object({
  ua: z.string(),
  ct: z.string(),
  uid: z.cuid(),
});
const TotpCancleSchema = z.object({
  challengeId: z.nanoid().nonoptional(),
});

export class TotpValidator implements MfaValidator {
  validateStart(data: unknown) {
    return TotpStartSchema.parse(data);
  }
  validateConfirm(data: unknown) {
    return TotpConfirmSchema.parse(data);
  }
  validateCancle(data: unknown) {
    return TotpCancleSchema.parse(data);
  }
  stateValidator(data: unknown) {
    return TotpStateSchema.parse(data);
  }
}
