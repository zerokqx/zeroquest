import { ReviewList } from '@/widgets/review/ui';
import { Stack } from '@mantine/core';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authorized/review')({
  component: ReviewList,
});

function RouteComponent() {
  return <Stack></Stack>;
}
