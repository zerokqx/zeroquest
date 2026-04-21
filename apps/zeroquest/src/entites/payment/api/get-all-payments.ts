import { usePaymentControllerFindAll } from "@/shared/api/orval/base-api/payment/payment"

export const useGetAllPayments = ()=>{
  return usePaymentControllerFindAll()
}
