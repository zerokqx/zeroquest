import { useSubscribeControllerFindAll } from '@/shared/api/orval/base-api/subscribe/subscribe';

export const useGetAllSubscribes = () => {
  return useSubscribeControllerFindAll({
    query: {
      select: (data) =>
        data.sort(
          (b,a) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
        ),
    },
  });
};
