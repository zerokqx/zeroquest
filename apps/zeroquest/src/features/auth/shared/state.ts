import { create } from 'zustand';

interface AuthStore {
  totpCode: string | null;
  setTotpCode: (newCode: AuthStore['totpCode']) => void;
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  totpCode: null,
  setTotpCode: (newCode) => set({ totpCode: newCode }),
}));

export const waitForTotp = (): Promise<string> => {
  return new Promise<string>((resolve) => {
    useAuthStore.getState().setTotpCode(null);

    const unsub = useAuthStore.subscribe((state) => {
      if (state.totpCode?.length === 6) {
        unsub();
        resolve(state.totpCode);
        useAuthStore.getState().setTotpCode(null);
        return;
      }

      if (state.totpCode === '') {
        unsub();
        resolve('');
        useAuthStore.getState().setTotpCode(null);
        return;
      }
    });
  });
};
