import { setIsAuth } from '@/entites/user/model';
import { useAuthControllerLogout } from '@/shared/api/orval/base-api/auth/auth';
import { useRouter } from '@tanstack/react-router';

export const useLogout = () => {
  const { mutateAsync, ...mutation } = useAuthControllerLogout();
  const router = useRouter();

  const logout = async () => {
    await mutateAsync();
    setIsAuth(false);
    await router.invalidate();
  };

  return {
    ...mutation,
    logout,
  };
};
