import { Alert, Group, Stack } from '@mantine/core';
import { useGetAllReviews } from '../api';
import { Review } from '@/entites/review/ui/review';
import { InputReview } from '@/features/create-review';
import { RemoveReview } from '@/features/remove-my-review';
import { useGetMyProfile } from '@/entites/user';
import { StopCircle } from 'lucide-react';

export const ReviewList = () => {
  const { data: profile } = useGetMyProfile();
  const { data: reviews } = useGetAllReviews();

  return (
    <Stack>
      {profile?.canComment ? (
        <InputReview />
      ) : (
        <Stack>
          <Alert color={'red'} icon={<StopCircle />}>
            Вы не можете оставить более 2-х отзывов
          </Alert>
          <Group>
            <RemoveReview />
          </Group>
        </Stack>
      )}
      {reviews?.map((review) => (
        <Review data={review} />
      ))}
    </Stack>
  );
};
