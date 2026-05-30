import { setIsAuth } from '@/entites/user/model';
import { GoogleButton } from '@skybin-tech/brandkit';
import {
  Button,
  Center,
  Modal,
  Stack,
  Text,
  Title,
  useModalsStack,
} from '@mantine/core';
import { useRouter } from '@tanstack/react-router';
import { SignInModal } from '@/features/auth/sign-in';
import { SignUpModal } from '@/features/auth/sign-up';
import { TotpModal } from '@/features/auth/totp/ui/totp-modal';

type AuthModalId = 'sign-in' | 'sign-up' | 'totp';

interface AuthMoodalStackProps {
  mode?: AuthModalId;
}
export const AuthModalStack = ({ mode }: AuthMoodalStackProps) => {
  const router = useRouter();
  const stack = useModalsStack<AuthModalId>(['sign-in', 'sign-up', 'totp']);

  const handleAuthSuccess = async () => {
    setIsAuth(true);
    stack.closeAll();
    await router.invalidate();
  };

  return (
    <Center mih="calc(100dvh - 16px)">
      <Stack align="center" gap="xs">
        <Title order={2}>ZeroquestVPN</Title>
        <Text c="dimmed" ta="center" maw={360}>
          Кроссплатформенный софт для всех ваших устройств
        </Text>
        <Button onClick={() => stack.open('sign-in')}>Логин</Button>
        <Button variant="default" onClick={() => stack.open('sign-up')}>
          Регистрация
        </Button>
        <GoogleButton
          shape="square"
          onClick={() => {
            window.location.href = 'http://localhost:4000/api/auth/google';
          }}
        />
      </Stack>

      <Modal.Stack>
        <TotpModal {...stack.register('totp')} />
        <SignInModal
          {...stack.register('sign-in')}
          onOpenSignUp={() => stack.open('sign-up')}
          onSuccess={handleAuthSuccess}
          onTotpRequired={() => {
            stack.open('totp');
          }}
        />
        <SignUpModal
          {...stack.register('sign-up')}
          onOpenSignIn={() => stack.open('sign-in')}
          onSuccess={() => {
            stack.open('sign-in');
          }}
        />
      </Modal.Stack>
    </Center>
  );
};
