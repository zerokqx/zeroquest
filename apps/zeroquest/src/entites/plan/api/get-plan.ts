import { PlanEntity } from "@/shared/api/orval/base-api/base-api.schemas"
import { usePlanControllerFindOne } from "@/shared/api/orval/base-api/plan/plan"

export const useGetPlan = (planId: PlanEntity['id'])=>{
  return usePlanControllerFindOne(planId)
}
