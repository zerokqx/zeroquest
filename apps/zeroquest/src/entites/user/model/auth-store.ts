import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserAuthState = {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
};

export const useUserAuthStore = create<UserAuthState>()(
  persist(
    (set) => ({
      isAuth: false,
      setIsAuth: (isAuth) => set({ isAuth }),
    }),
    {
      name: 'user-auth-store',
    },
  ),
);

export const setIsAuth = (isAuth: boolean): void => {
  useUserAuthStore.getState().setIsAuth(isAuth);
};

export const useIsAuth = (): boolean => useUserAuthStore((store) => store.isAuth);
