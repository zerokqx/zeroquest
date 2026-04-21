import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authorized/review')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authorized/review"!</div>
}
