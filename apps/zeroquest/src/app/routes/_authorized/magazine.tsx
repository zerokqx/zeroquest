import { Magazine } from '@/pages/magazine'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authorized/magazine')({
  component: Magazine,
})

