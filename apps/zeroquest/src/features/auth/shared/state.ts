import { create } from 'zustand';

interface AuthStore {
  totpCode: string | null;
  setTotpCode: (newCode: AuthStore['totpCode']) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  totpCode: null,
  setTotpCode: (newCode) => set({ totpCode: newCode }),
  clearCode: () => set({ totpCode: null }),
}));



export const waitForTotp = (): Promise<string> => {
  return new Promise((resolve) => {
    // 1. Подписываемся на изменения ВСЕГО стейта в Zustand
    const unsub = useAuthStore.subscribe((state) => {

      // 2. Ждем, когда в стейте появится код (пользователь нажал "Подтвердить")
      if (state.totpCode) {

        // 3. unsub() отписывает нас. Если этого не сделать,
        // подписка будет висеть вечно и плодить баги.
        unsub();

        // 4. resolve(code) — это то, что заставляет твой await в onSubmit "проснуться"
        resolve(state.totpCode);

        // 5. Чистим стор, чтобы следующий логин был "чистым"
        useAuthStore.getState().setTotpCode(null);
      }
    });
  });
};
