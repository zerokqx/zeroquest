import { useReviewControllerFindAll } from '@/shared/api/orval/base-api/review/review';

export const useGetAllReviews = () => {
  return useReviewControllerFindAll();
};
