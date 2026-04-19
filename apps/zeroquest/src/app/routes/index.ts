import { useUserAuthStore } from '@/entites/user/model';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  beforeLoad() {
    if (useUserAuthStore.getState().isAuth) throw redirect({ to: '/dashboard' });
    throw redirect({ to: '/sign-up' });
  },
});
