import { useUserControllerMe } from '@/shared/api/orval/base-api/user/user';

export const useGetMyProfile = () => {
  return useUserControllerMe();
};
