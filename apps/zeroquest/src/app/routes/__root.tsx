import { AppShell, AppShellMain } from '@mantine/core';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

const RootLayout = () => (
  <>
    <AppShell>
      <AppShellMain p={'xs'}>
        <Outlet />
      </AppShellMain>
    </AppShell>
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRouteWithContext<{ isAuth: boolean }>()({
  component: RootLayout,
});
