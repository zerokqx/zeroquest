import { useUserAuthStore } from '@/entites/user/model';
import { createFileRoute, redirect } from '@tanstack/react-router';
import { AuthPage } from '@/pages/auth/auth-page';

export const Route = createFileRoute('/_unauthorized/sign-up')({
  beforeLoad() {
    if (useUserAuthStore.getState().isAuth) throw redirect({ to: '/' });
  },

  component: RouteComponent,
});

function RouteComponent() {
  return <AuthPage />;
}
