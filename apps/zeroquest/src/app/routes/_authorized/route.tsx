import { useUserAuthStore } from '@/entites/user/model';
import { AppHeader } from '@/widgets/header';
import { Box, Stack } from '@mantine/core';
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_authorized')({
  beforeLoad({ location }) {
    if (!useUserAuthStore.getState().isAuth)
      throw redirect({
        search: location.href,
        to: '/sign-up',
      });
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Stack gap="md" h="100%" style={{ minHeight: 0 }}>
      <AppHeader />
      <Box style={{ flex: 1, minHeight: 0 }}>
        <Outlet />
      </Box>
    </Stack>
  );
}
