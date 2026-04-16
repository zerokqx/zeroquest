import { IsIn } from 'class-validator';

export const YOOKASSA_WEBHOOK_EVENT = {
  PaymentWaitingForCapture: 'payment.waiting_for_capture',
  PaymentSucceeded: 'payment.succeeded',
  PaymentCanceled: 'payment.canceled',
  PaymentMethodActive: 'payment_method.active',
  RefundSucceeded: 'refund.succeeded',
  PayoutSucceeded: 'payout.succeeded',
  PayoutCanceled: 'payout.canceled',
  DealClosed: 'deal.closed',
} as const;

export type YookassaWebhookEvent =
  (typeof YOOKASSA_WEBHOOK_EVENT)[keyof typeof YOOKASSA_WEBHOOK_EVENT];

export class YookassaWebhookBaseDto {
  @IsIn(Object.values(YOOKASSA_WEBHOOK_EVENT))
  event!: YookassaWebhookEvent;
}
