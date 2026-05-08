import { useAuthControllerTotpLogin } from '@/shared/api/orval/base-api/auth/auth';

export const useValidateTotp = () => {
  return useAuthControllerTotpLogin();
};
