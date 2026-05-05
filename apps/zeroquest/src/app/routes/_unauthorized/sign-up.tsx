import { useUserAuthStore } from '@/entites/user/model';
import { createFileRoute, redirect } from '@tanstack/react-router';
import { AuthPage } from '@/pages/auth/auth-page';
import z from 'zod';

export const Route = createFileRoute('/_unauthorized/sign-up')({
  validateSearch: z.object({
    search: z.string().default('/').optional(),
    mode: z.enum(['sign-in', 'sign-up']).optional(),
  }),
  beforeLoad() {
    if (useUserAuthStore.getState().isAuth) throw redirect({ to: '/' });
  },

  component: RouteComponent,
});

function RouteComponent() {
  return <AuthPage />;
}
