import { useUserAuthStore } from '@/entites/user';
import { VpnPromoPage } from '@/pages/vpn-promo';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  beforeLoad() {
    if (useUserAuthStore.getState().isAuth)
      throw redirect({ to: '/dashboard' });
  },
  component: VpnPromoPage,
});
