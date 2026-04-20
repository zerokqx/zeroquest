import { usePaymentControllerCreate } from '@/shared/api/orval/base-api/payment/payment';

export const useCreditBalance = () => {
  return usePaymentControllerCreate();
};
