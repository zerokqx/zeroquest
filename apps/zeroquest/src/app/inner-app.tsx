import { setIsAuth } from '@/entites/user/model';
import { useUserControllerMe } from '@/shared/api/orval/base-api/user/user';
import { Center, Loader } from '@mantine/core';
import { RouterProvider } from '@tanstack/react-router';
import { useEffect } from 'react';
import { router } from './main';

export const InnerApp = () => {
  const { data: auth, isLoading, isSuccess, isError } = useUserControllerMe({
    query: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  });

  useEffect(() => {
    if (isSuccess) setIsAuth(!!auth);
    if (isError) setIsAuth(false);
  }, [auth, isError, isSuccess]);

  if (isLoading) {
    return (
      <Center mih="100dvh">
        <Loader size="sm" />
      </Center>
    );
  }

  return <RouterProvider router={router} />;
};
