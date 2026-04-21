import { AppShell, AppShellMain } from '@mantine/core';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { NotFoundPage } from '../not-found';

const RootLayout = () => (
  <>
    <AppShell>
      <AppShellMain
        p={'xs'}
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100dvh',
          minHeight: 0,
        }}
      >
        <Outlet />
      </AppShellMain>
    </AppShell>
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFoundPage,
});
