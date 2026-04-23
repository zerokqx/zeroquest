import { Button } from '@mantine/core';
import { useRemoveMyRevie } from '../api/remove-my-review';
import { Trash } from 'lucide-react';

export const RemoveReview = () => {
  const { mutateAsync: remove, isPending } = useRemoveMyRevie();
  return (
    <Button
      color="red"
      leftSection={<Trash />}
      onClick={async () => {
        await remove();
      }}
      loading={isPending}
    >
      Удалить мой отзыв
    </Button>
  );
};
