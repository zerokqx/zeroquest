import { setIsAuth } from '@/entites/user/model';
import { Button, Center, Modal, Stack, Text, Title, useModalsStack } from '@mantine/core';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { SignInModal } from '@/features/auth/sign-in';
import { SignUpModal } from '@/features/auth/sign-up';
import { getUserControllerMeQueryKey } from '@/shared/api/orval/base-api/user/user';

type AuthModalId = 'sign-in' | 'sign-up';

export const AuthModalStack = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const stack = useModalsStack<AuthModalId>(['sign-in', 'sign-up']);

  const handleAuthSuccess = async () => {
    await queryClient.refetchQueries({
      queryKey: getUserControllerMeQueryKey(),
      exact: true,
    });
    setIsAuth(true);
    stack.closeAll();
    await navigate({ to: '/' });
  };

  return (
    <Center mih="calc(100dvh - 16px)">
      <Stack align="center" gap="xs">
        <Title order={2}>ZeroquestVPN</Title>
        <Text c="dimmed" ta="center" maw={360}>
          Кроссплатформенный софт для всех ваших устройств
        </Text>
        <Button onClick={() => stack.open('sign-in')}>Логин</Button>
        <Button variant="default" onClick={() => stack.open('sign-up')}>Регистрация</Button>
      </Stack>

      <Modal.Stack>
        <SignInModal
          {...stack.register('sign-in')}
          onOpenSignUp={() => stack.open('sign-up')}
          onSuccess={handleAuthSuccess}
        />
        <SignUpModal
          {...stack.register('sign-up')}
          onOpenSignIn={() => stack.open('sign-in')}
          onSuccess={handleAuthSuccess}
        />
      </Modal.Stack>
    </Center>
  );
};
