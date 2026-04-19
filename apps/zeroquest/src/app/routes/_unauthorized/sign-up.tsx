import { createFileRoute, redirect } from '@tanstack/react-router';
import { AuthPage } from '@/pages/auth/auth-page';

export const Route = createFileRoute('/_unauthorized/sign-up')({
  beforeLoad({ context }) {
    if (context.isAuth) throw redirect({ to: '/' });
  },

  component: RouteComponent,
});

function RouteComponent() {
  return <AuthPage />;
}
