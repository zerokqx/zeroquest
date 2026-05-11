import { MFA_CLASS_TYPE, MfaClassType, MfaName } from './mfa.types';

export interface MfaSetupContext {
  uid: string;
  ua: string;
}

export abstract class MfaSetup<
  StartInput = any,
  StartResult = any,
  ConfirmInput = any,
  ConfirmResult = any,
  CancelInput = any,
  CancelResult = any,
> {
  type: MfaClassType = MFA_CLASS_TYPE.SETUPER;
  abstract name: MfaName;

  abstract start(ctx: MfaSetupContext, input: StartInput): Promise<StartResult>;

  abstract confirm(
    ctx: MfaSetupContext,
    input: ConfirmInput,
  ): Promise<ConfirmResult>;

  abstract cancel(
    ctx: MfaSetupContext,
    input: CancelInput,
  ): Promise<CancelResult>;

  abstract canSetup(ctx: MfaSetupContext): Promise<boolean>;
}
