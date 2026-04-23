import { PolicyRender } from '@/entites/policy';
import { PolicyEntityType } from '@/shared/api/orval/base-api/base-api.schemas';
import { createFileRoute } from '@tanstack/react-router';
import { zodValidator } from '@tanstack/zod-adapter';
import { z } from 'zod';

export const Route = createFileRoute('/_general/policy')({
  validateSearch: zodValidator(
    z.object({
      type: z.enum(PolicyEntityType).default(PolicyEntityType.PRIVACY),
    }),
  ),
  component: RouteComponent,
});

function RouteComponent() {
  const { type } = Route.useSearch();
  return <PolicyRender type={type} />;
}
