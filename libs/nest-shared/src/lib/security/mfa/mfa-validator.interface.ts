export interface MfaValidator  {
  validateStart(data: unknown): unknown;
  validateConfirm(data: unknown): unknown;
  validateCancle(data: unknown): unknown;
  stateValidator(data:unknown): unknown

}
