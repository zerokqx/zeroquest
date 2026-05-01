import { useSessionControllerCurrentUserSession } from '@/shared/api/orval/base-api/session/session';

export const useGetCurrentSession = () => {
  return useSessionControllerCurrentUserSession();
};
