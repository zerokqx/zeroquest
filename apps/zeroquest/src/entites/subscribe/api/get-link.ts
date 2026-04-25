import { SubscribeEntity } from '@/shared/api/orval/base-api/base-api.schemas';
import { useSubscribeControllerGetLink } from '@/shared/api/orval/base-api/subscribe/subscribe';

export const useGetLink = (id: SubscribeEntity['id'],enabled? :boolean) => {
  return useSubscribeControllerGetLink(id,{
    query:{
      enabled
    }
  });
};
