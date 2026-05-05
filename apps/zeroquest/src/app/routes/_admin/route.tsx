import { useUserAuthStore } from '@/entites/user';
import {userAdminControllerIsAdmin  } from '@/shared/api/orval/base-api/user-admin/user-admin';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_admin')({
  async beforeLoad() {
    if (useUserAuthStore.getState().isAuth) {
      try {
        await userAdminControllerIsAdmin();
      } catch {
        throw redirect({ to: '/' });
      }
      return;
    }
    throw redirect({ to: '/' });
  },
});
