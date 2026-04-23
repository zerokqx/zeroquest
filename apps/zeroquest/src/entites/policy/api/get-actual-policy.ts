import { PolicyEntityType } from '@/shared/api/orval/base-api/base-api.schemas';
import { usePolicyControllerGetActual } from '@/shared/api/orval/base-api/policy/policy';

export const useGetActualPolicy = (type: PolicyEntityType) => {
  return usePolicyControllerGetActual({ type });
};
