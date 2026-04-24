import { PaymentHistory } from '@/pages/payment-history'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authorized/payment-history')({
  component: PaymentHistoryRoute,
})

function PaymentHistoryRoute() {
  return <PaymentHistory />
}
