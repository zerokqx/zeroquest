import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/open-sans';

import '@fontsource/roboto/400.css';
import '@fontsource/roboto/600.css';

import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import '@mantine/core/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter } from '@tanstack/react-router';

// Import the generated route tree
import { routeTree } from './route-tree.gen';
import { MantineProvider } from '@mantine/core';
import { theme } from './mantine/theme';
import { InnerApp } from './inner-app';
import { LucideProvider } from 'lucide-react';

// Create a new router instance
export const router = createRouter({
  routeTree,
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
          <LucideProvider strokeWidth={3} size={16}>
            <InnerApp />
          </LucideProvider>
        </QueryClientProvider>
      </MantineProvider>
    </StrictMode>,
  );
}
