import { Sessions } from '@/pages/sessions';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authorized/sessions')({
  component: Sessions,
});
