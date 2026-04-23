import { ReviewEntity } from '@/shared/api/orval/base-api/base-api.schemas';
import { formatDate } from '@/shared/lib/format-date';
import {
  Badge,
  Card,
  Divider,
  Group,
  Rating,
  Stack,
  Text,
} from '@mantine/core';
import { CalendarClock, UserRound } from 'lucide-react';

interface ReviewProps {
  data: ReviewEntity;
}

const normalizeRating = (value: number): number =>
  Math.max(1, Math.min(5, value));

const formatUserId = (userId: string): string => {
  if (userId.length <= 12) return userId;

  return `${userId.slice(0, 6)}...${userId.slice(-4)}`;
};

export const Review = ({ data }: ReviewProps) => {
  const rating = normalizeRating(data.rating);

  return (
    <Card
      withBorder
      radius="sm"
      p="md"
      style={{
        backgroundColor: 'var(--mantine-color-white)',
        borderColor: 'var(--mantine-color-gray-3)',
      }}
    >
      <Stack gap="sm">
        <Group justify="space-between" align="center" wrap="nowrap">
          <Group gap="xs" wrap="nowrap">
            <Rating value={rating} readOnly fractions={2} size="sm" />
            <Text size="sm" fw={600}>
              {rating.toFixed(1)} / 5
            </Text>
          </Group>

          <Group gap={4} wrap="nowrap">
            <CalendarClock size={14} />
            <Text size="xs" c="dimmed">
              {formatDate(data.createdAt)}
            </Text>
          </Group>
        </Group>

        <Divider />

        <Stack gap={4}>
          <Text size="xs" c="dimmed" tt="uppercase" fw={700}>
            Автор
          </Text>
          <Group gap={4} wrap="nowrap">
            <UserRound size={14} />
            <Text size="xs" c="dimmed" ff="monospace">
              {formatUserId(data.user.login)}
            </Text>
          </Group>
        </Stack>

        <Text size="sm" lh={1.55} style={{ whiteSpace: 'pre-wrap' }}>
          {data.content}
        </Text>
      </Stack>
    </Card>
  );
};
