import { AuthModalStack } from '@/widgets/auth/auth-modal-stack';
import { useSearch } from '@tanstack/react-router';

export const AuthPage = () => {
  const { mode } = useSearch({ from: '/_unauthorized/sign-up' });
  return <AuthModalStack mode={mode} />;
};
