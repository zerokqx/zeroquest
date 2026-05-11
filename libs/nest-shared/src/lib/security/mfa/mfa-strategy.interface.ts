export interface MfaStrategy {
  start(data: unknown): unknown;
  confirm(data: unknown): unknown;
  cancle(data: unknown): unknown;
}
