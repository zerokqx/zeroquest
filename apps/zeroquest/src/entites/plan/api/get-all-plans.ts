import { usePlanControllerFindAll } from '@/shared/api/orval/base-api/plan/plan';

export const useGetPlans = () => {
  return usePlanControllerFindAll();
};
