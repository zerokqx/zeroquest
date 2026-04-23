import { getReviewControllerFindAllQueryKey } from '@/shared/api/orval/base-api/review/review';
import {
  Alert,
  Button,
  Group,
  Rating,
  Stack,
  Text,
  Textarea,
} from '@mantine/core';
import { useQueryClient } from '@tanstack/react-query';
import { AlertCircle } from 'lucide-react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useCreateReview } from '../api/create-review';
import { useGetMyProfile } from '@/entites/user';

const DEFAULT_RATING = 5;
const MIN_CONTENT_LENGTH = 10;
const MAX_CONTENT_LENGTH = 1000;

interface InputReviewState {
  rating: number;
  content: string;
}

const getReviewCreateErrorMessage = (error: unknown): string => {
  if (error instanceof Error && error.message) {
    return error.message;
  }

  return 'Не удалось опубликовать отзыв. Попробуйте снова.';
};

export const InputReview = () => {
  const {
    mutateAsync: createReview,
    isPending,
    isError,
    error,
    reset: resetMutation,
  } = useCreateReview();
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm<InputReviewState>({
    mode: 'onChange',
    defaultValues: {
      rating: DEFAULT_RATING,
      content: '',
    },
  });

  const contentLength = watch('content').trim().length;
  const ratingValue = watch('rating');

  const submit: SubmitHandler<InputReviewState> = async ({
    content,
    rating,
  }) => {
    await createReview({
      data: {
        content: content.trim(),
        rating,
      },
    });

    reset({
      rating: DEFAULT_RATING,
      content: '',
    });
    resetMutation();
  };

  return (
    <form onSubmit={handleSubmit(submit)} noValidate>
      <Stack
        bd="1px solid var(--mantine-color-gray-4)"
        p="md"
        bdrs="xl"
        gap="sm"
      >
        {isError && (
          <Alert color="red" icon={<AlertCircle />}>
            {getReviewCreateErrorMessage(error)}
          </Alert>
        )}

        <Stack gap={4}>
          <Text size="sm" fw={500}>
            Оценка
          </Text>
          <Controller
            control={control}
            name="rating"
            rules={{
              required: 'Поставьте оценку',
              validate: (value) =>
                (value >= 1 && value <= 5) || 'Оценка должна быть от 1 до 5',
            }}
            render={({ field }) => (
              <Rating
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          />
          <Text size="xs" c={errors.rating ? 'red' : 'dimmed'}>
            {errors.rating?.message ?? `Текущая оценка: ${ratingValue} из 5`}
          </Text>
        </Stack>

        <Textarea
          withAsterisk
          label="Отзыв"
          placeholder="Напишите, что понравилось или что можно улучшить"
          description={`Минимум ${MIN_CONTENT_LENGTH} символов`}
          autosize
          minRows={3}
          maxRows={8}
          error={errors.content?.message}
          {...register('content', {
            validate: (value) => {
              const trimmedValue = value.trim();

              if (!trimmedValue) return 'Введите текст отзыва';
              if (trimmedValue.length < MIN_CONTENT_LENGTH) {
                return `Минимум ${MIN_CONTENT_LENGTH} символов`;
              }
              if (trimmedValue.length > MAX_CONTENT_LENGTH) {
                return `Максимум ${MAX_CONTENT_LENGTH} символов`;
              }

              return true;
            },
          })}
        />

        <Group justify="space-between" align="center">
          <Text size="xs" c="dimmed">
            {contentLength}/{MAX_CONTENT_LENGTH}
          </Text>
          <Button
            type="submit"
            disabled={!isValid || isPending }
            loading={isPending}
          >
            Опубликовать
          </Button>
        </Group>
      </Stack>
    </form>
  );
};
