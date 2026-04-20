import { CreditBalanceForm } from '@/features/credit-balance'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authorized/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <CreditBalanceForm/>
  )
}
