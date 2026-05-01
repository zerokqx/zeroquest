import {
  getSessionControllerCurrentUserSessionQueryKey,
  getSessionControllerFindAllQueryKey,
  useSessionControllerRemove,
} from '@/shared/api/orval/base-api/session/session';
import { useQueryClient } from '@tanstack/react-query';

export const useRemoveSession = () => {
  const queryClient = useQueryClient();

  return useSessionControllerRemove({
    mutation: {
      onSuccess: async () => {
        await Promise.all([
          queryClient.invalidateQueries({
            queryKey: getSessionControllerFindAllQueryKey(),
          }),
          queryClient.invalidateQueries({
            queryKey: getSessionControllerCurrentUserSessionQueryKey(),
          }),
        ]);
      },
    },
  });
};
