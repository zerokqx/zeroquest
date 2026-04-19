import { AppShell, AppShellMain } from '@mantine/core';
import { createRootRoute, Outlet } from '@tanstack/react-router';
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

export const Route = createRootRoute({
  component: RootLayout,
});
