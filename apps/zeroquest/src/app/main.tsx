import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import '@mantine/core/styles.css';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter } from '@tanstack/react-router';

// Import the generated route tree
import { routeTree } from './route-tree.gen';
import { MantineProvider } from '@mantine/core';
import { theme } from './mantine/theme';
import { InnerApp } from './inner-app';

// Create a new router instance
export const router = createRouter({
  routeTree,
  context: {
    isAuth: false,
  },
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
const queryClient = new QueryClient();
// Render the app
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <MantineProvider theme={theme} defaultColorScheme="light">
        <QueryClientProvider client={queryClient}>
          <InnerApp />
        </QueryClientProvider>
      </MantineProvider>
    </StrictMode>,
  );
}
