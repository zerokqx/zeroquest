import {
  Alert,
  Anchor,
  Button,
  Checkbox,
  Group,
  Modal,
  ModalProps,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { AlertCircle } from 'lucide-react';
import { useMediaQuery } from '@mantine/hooks';
import { useSignInForm } from '../model/use-sign-in-form';

interface SignInModalProps
  extends Pick<ModalProps, 'opened' | 'onClose' | 'stackId'> {
  onOpenSignUp: () => void;
  onSuccess?: () => void;
}

export const SignInModal = ({
  opened,
  onClose,
  stackId,
  onOpenSignUp,
  onSuccess,
}: SignInModalProps) => {
  const {
    register,
    errors,
    submitError,
    isPending,
    isPolicyLoading,
    handleSubmit,
    onSubmit,
  } = useSignInForm({ onSuccess });
  const isMobile = useMediaQuery('(max-width: 48em)');

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      stackId={stackId}
      title="Вход"
      centered
      fullScreen={isMobile}
    >
      <Stack gap="md">
        {submitError && (
          <Alert color="red" icon={<AlertCircle size={16} />}>
            {submitError}
          </Alert>
        )}

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack gap="sm">
            <TextInput
              label="Логин"
              error={errors.login?.message}
              autoComplete="username"
              {...register('login', { required: 'Введите логин' })}
              required
            />
            <PasswordInput
              label="Пароль"
              error={errors.password?.message}
              autoComplete="current-password"
              {...register('password', { required: 'Введите пароль' })}
              required
            />
            <Checkbox
              error={errors.privacyAccepted?.message}
              {...register('privacyAccepted', {
                required: 'Нужно принять Политику конфиденциальности',
              })}
              label={
                <Text size="sm">
                  Я принимаю{' '}
                  <Anchor href="/policy?type=PRIVACY" target="_blank">
                    Политику конфиденциальности
                  </Anchor>
                </Text>
              }
            />
            <Button
              type="submit"
              loading={isPending || isPolicyLoading}
              disabled={isPolicyLoading}
              fullWidth
            >
              Войти
            </Button>
          </Stack>
        </form>

        <Group justify="space-between" gap="xs">
          <Text size="sm" c="dimmed">
            Нет аккаунта?
          </Text>
          <Anchor component="button" type="button" size="sm" onClick={onOpenSignUp}>
            Создать аккаунт
          </Anchor>
        </Group>
      </Stack>
    </Modal>
  );
};
