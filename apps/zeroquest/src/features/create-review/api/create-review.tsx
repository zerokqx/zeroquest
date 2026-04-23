import { produce } from 'immer';
import {
  ReviewEntity,
  UserEntity,
} from '@/shared/api/orval/base-api/base-api.schemas';
import {
  getReviewControllerFindAllQueryKey,
  useReviewControllerCreate,
} from '@/shared/api/orval/base-api/review/review';
import { getUserControllerMeQueryKey } from '@/shared/api/orval/base-api/user/user';
import { useGetMyProfile } from '@/entites/user';
import { clientTypeControllerExists } from '@/shared/api/orval/base-api/client-type/client-type';

export const useCreateReview = () => {
  const { data: profile } = useGetMyProfile();

  return useReviewControllerCreate({
    mutation: {
      onMutate(variables, context) {
        const profileQueryKey = getUserControllerMeQueryKey();
        const reviewsQueryKey = getReviewControllerFindAllQueryKey();
        const reviewsPrev =
          context.client.getQueryData<ReviewEntity[]>(reviewsQueryKey);
        const prevProfile =
          context.client.getQueryData<UserEntity>(profileQueryKey);

        if (!profile) throw new Error();
        context.client.setQueryData<UserEntity>(profileQueryKey, (old) => {
          if (!old) return old;
          return produce(old, (draft) => {
            draft.canComment = false;
          });
        });
        context.client.setQueryData<ReviewEntity[]>(reviewsQueryKey, (old) => {
          if (!old) return old;

          const date = new Date().toISOString();
          return [
            {
              id: crypto.randomUUID(),
              ...variables.data,
              createdAt: date,
              updatedAt: date,
              user: {
                id: profile.id,
                login: profile.login,
              },
            } as unknown as ReviewEntity,
            ...old,
          ];
        });

        return {
          profileQueryKey,
          prevProfile,
          reviewsPrev,
          reviewsQueryKey,
        };
      },
      onError(_error, _variables, onMutateResult, { client }) {
        if (onMutateResult) {
          const { reviewsQueryKey, profileQueryKey, prevProfile, reviewsPrev } =
            onMutateResult;

          client.setQueryData<UserEntity>(profileQueryKey, (old) => {
            if (!old) return old;
            return prevProfile;
          });

          client.setQueryData<ReviewEntity[]>(reviewsQueryKey, (old) => {
            if (!old) return old;
            return reviewsPrev;
          });
        }
      },
      async onSettled(_data, _error, _variables, onMutateResult, { client }) {
        if (onMutateResult) {
          const { reviewsQueryKey, profileQueryKey } = onMutateResult;
          await Promise.all([
            client.invalidateQueries({ queryKey: reviewsQueryKey }),
            client.invalidateQueries({ queryKey: profileQueryKey }),
          ]);
        }
      },
    },
  });
};
