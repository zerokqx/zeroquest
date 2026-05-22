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
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuthControllerRegister } from '@/shared/api/orval/base-api/auth/auth';
import { RegisterDto } from '@/shared/api/orval/base-api/base-api.schemas';
import { getAuthErrorMessage } from '@/features/auth/shared/get-auth-error-message';

interface SignUpModalProps
  extends Pick<ModalProps, 'opened' | 'onClose' | 'stackId'> {
  onOpenSignIn: () => void;
  onSuccess?: () => void;
}

type SignUpValues = RegisterDto & { confirmPassword: string };

export const SignUpModal = ({
  opened,
  onClose,
  stackId,
  onOpenSignIn,
  onSuccess,
}: SignUpModalProps) => {
  const [submitError, setSubmitError] = useState('');
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<SignUpValues>({
    defaultValues: {
      login: '',
      password: '',
      confirmPassword: '',
    },
  });
  const { mutateAsync, isPending } = useAuthControllerRegister();

  const onSubmit = async (values: SignUpValues) => {
    setSubmitError('');

    try {
      await mutateAsync({
        data: {
          login: values.login.trim(),
          password: values.password,
        },
      });

      onSuccess?.();
    } catch (error) {
      setSubmitError(getAuthErrorMessage(error));
    }
  };

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
