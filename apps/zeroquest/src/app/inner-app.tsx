import { useUserControllerMe } from '@/shared/api/orval/base-api/user/user';
import { Center, Loader } from '@mantine/core';
import { RouterProvider } from '@tanstack/react-router';
import { router } from './main';

export const InnerApp = () => {
  const { data: auth, isLoading } = useUserControllerMe({
    query: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  });

  if (isLoading) {
    return (
      <Center mih="100dvh">
        <Loader size="sm" />
      </Center>
    );
  }

  return <RouterProvider router={router} context={{ isAuth: !!auth }} />;
};
