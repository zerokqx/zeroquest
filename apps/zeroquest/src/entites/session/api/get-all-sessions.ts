import { useSessionControllerFindAll } from '@/shared/api/orval/base-api/session/session';

export const useGetAllSessions = () => {
  return useSessionControllerFindAll();
};
