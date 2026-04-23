import { useGetMyProfile } from '@/entites/user';
import {
  ReviewEntity,
  UserEntity,
} from '@/shared/api/orval/base-api/base-api.schemas';
import {
  getReviewControllerFindAllQueryKey,
  useReviewControllerRemoveMyReview,
} from '@/shared/api/orval/base-api/review/review';
import { getUserControllerMeQueryKey } from '@/shared/api/orval/base-api/user/user';
import produce from 'immer';

export const useRemoveMyRevie = () => {
  const { data: profile } = useGetMyProfile();
  return useReviewControllerRemoveMyReview({
    mutation: {
      onMutate(_variables, { client }) {
        const reviewsQueryKey = getReviewControllerFindAllQueryKey();
        const userQueryKey = getUserControllerMeQueryKey();
        const prevReviews =
          client.getQueryData<ReviewEntity[]>(reviewsQueryKey);
        const prevUser = client.getQueryData<UserEntity>(userQueryKey);

        client.setQueryData<ReviewEntity[]>(reviewsQueryKey, (old) => {
          if (!old) return old;
          return old.filter((review) => review.user.id !== profile?.id);
        });
        client.setQueryData<UserEntity>(userQueryKey, (old) => {
          if (!old) return old;

          return produce(old, (draft) => {
            draft.canComment = true;
          });
        });
        return { prevReviews, prevUser, reviewsQueryKey, userQueryKey };
      },
      onError(_error, _variables, onMutateResult, { client }) {
        if (onMutateResult) {
          const { reviewsQueryKey, userQueryKey, prevReviews, prevUser } =
            onMutateResult;

          client.setQueryData<UserEntity>(userQueryKey, (old) => {
            if (!old) return old;
            return prevUser;
          });

          client.setQueryData<ReviewEntity[]>(reviewsQueryKey, (old) => {
            if (!old) return old;
            return prevReviews;
          });
        }
      },
      async onSettled(_data, _error, _variables, onMutateResult, { client }) {
        if (onMutateResult) {
          const { reviewsQueryKey, userQueryKey } = onMutateResult;
          await Promise.all([
            client.invalidateQueries({ queryKey: reviewsQueryKey }),
            client.invalidateQueries({ queryKey: userQueryKey }),
          ]);
        }
      },
    },
  });
};
