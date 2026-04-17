import { createFileRoute } from '@tanstack/react-router'
import {usePlanControllerFindAll}from "@/shared/api/orval/base-api/plan/plan"

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const {data} = usePlanControllerFindAll()
  return <div>Hello "/"!</div>
}
