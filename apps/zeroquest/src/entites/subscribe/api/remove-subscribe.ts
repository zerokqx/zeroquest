import { useMutation, useQueryClient } from '@tanstack/react-query';
import { customInstance } from '@/shared/api/axios-client';
import { getSubscribeControllerFindAllQueryKey } from '@/shared/api/orval/base-api/subscribe/subscribe';

const removeSubscribe = (id: string) => {
  return customInstance<void>({
    url: `/api/subscriptions/${id}`,
    method: 'DELETE',
  });
};

export const useRemoveSubscribe = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeSubscribe,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: getSubscribeControllerFindAllQueryKey(),
      });
    },
  });
};
