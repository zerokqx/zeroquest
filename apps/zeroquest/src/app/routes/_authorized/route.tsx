import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_authorized')({
  beforeLoad({ context, location }) {
    if (!context.isAuth)
      throw redirect({
        search: location.href,
        to: '/sign-up',
      });
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_authorized"!</div>;
}
