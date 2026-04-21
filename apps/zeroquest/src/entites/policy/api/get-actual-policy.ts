import { PolicyType } from '@/shared/api/orval/base-api/base-api.schemas';
import { usePolicyControllerGetActual } from '@/shared/api/orval/base-api/policy/policy';

export const useGetActualPolicy = (type: PolicyType) => {
  return usePolicyControllerGetActual({ type });
};
