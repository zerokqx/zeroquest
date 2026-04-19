import {
  Alert,
  Anchor,
  Button,
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
import { useSignUpForm } from '../model/use-sign-up-form';

interface SignUpModalProps
  extends Pick<ModalProps, 'opened' | 'onClose' | 'stackId'> {
  onOpenSignIn: () => void;
  onSuccess?: () => void;
}

export const SignUpModal = ({
  opened,
  onClose,
  stackId,
  onOpenSignIn,
  onSuccess,
}: SignUpModalProps) => {
  const {
    register,
    errors,
    submitError,
    isPending,
    handleSubmit,
    onSubmit,
    getValues,
  } = useSignUpForm({ onSuccess });
  const isMobile = useMediaQuery('(max-width: 48em)');

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      stackId={stackId}
      title="Регистрация"
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
              {...register('login', {
                required: 'Введите логин',
                minLength: {
                  value: 3,
                  message: 'Логин должен быть минимум 3 символа',
                },
              })}
              required
            />
            <PasswordInput
              label="Пароль"
              error={errors.password?.message}
              autoComplete="new-password"
              {...register('password', {
                required: 'Введите пароль',
                minLength: {
                  value: 8,
                  message: 'Пароль должен быть минимум 8 символов',
                },
              })}
              required
            />
            <PasswordInput
              label="Повторите пароль"
              error={errors.confirmPassword?.message}
              autoComplete="new-password"
              {...register('confirmPassword', {
                required: 'Повторите пароль',
                validate: (value) =>
                  value === getValues('password') || 'Пароли не совпадают',
              })}
              required
            />
            <Button type="submit" loading={isPending} fullWidth>
              Зарегистрироваться
            </Button>
          </Stack>
        </form>

        <Group justify="space-between" gap="xs">
          <Text size="sm" c="dimmed">
            Уже есть аккаунт?
          </Text>
          <Anchor component="button" type="button" size="sm" onClick={onOpenSignIn}>
            Войти
          </Anchor>
        </Group>
      </Stack>
    </Modal>
  );
};
