import { CreditBalanceForm } from '@/features/credit-balance'
import { Dashboard } from '@/pages/dashboard'
import { PaymentList } from '@/widgets/payment'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authorized/dashboard')({
  component: Dashboard,
})

