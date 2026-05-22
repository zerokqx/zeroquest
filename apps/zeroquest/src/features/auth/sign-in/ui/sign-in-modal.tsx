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
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuthControllerPassword } from '@/shared/api/orval/base-api/auth/auth';
import { PolicyEntityType } from '@/shared/api/orval/base-api/base-api.schemas';
import { getAuthErrorMessage } from '@/features/auth/shared/get-auth-error-message';
import { useGetActualPolicy } from '@/entites/policy/api/get-actual-policy';

interface SignInModalProps
  extends Pick<ModalProps, 'opened' | 'onClose' | 'stackId'> {
  onOpenSignUp: () => void;
  onSuccess?: () => void;
  onTotpRequired?: (challengeId: string) => void;
}

interface SignInFormValues {
  login: string;
  password: string;
  privacyAccepted: boolean;
}

export const SignInModal = ({
  opened,
  onClose,
  stackId,
  onOpenSignUp,
  onSuccess,
  onTotpRequired,
}: SignInModalProps) => {
  const [submitError, setSubmitError] = useState('');
  const { data: actualPrivacyPolicy, isLoading: isPolicyLoading } =
    useGetActualPolicy(PolicyEntityType.PRIVACY);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>({
    defaultValues: {
      login: '',
      password: '',
      privacyAccepted: false,
    },
  });
  const { mutateAsync, isPending } = useAuthControllerPassword();

  const onSubmit = async (values: SignInFormValues) => {
    setSubmitError('');

    const policyVersion = actualPrivacyPolicy?.version;
    if (!policyVersion) {
      setSubmitError('Не удалось получить актуальную версию политики');
      return;
    }

    try {
      const result = await mutateAsync({
        data: {
          login: values.login.trim(),
          password: values.password,
          policy: [
            {
              type: PolicyEntityType.PRIVACY,
              version: policyVersion,
            },
          ],
        },
      });

      if (result.type === 'TOTP_REQUIRED') {
        const challengeId =
          (result as { challengeId?: string }).challengeId ??
          (result as { data?: { challengeId?: string } }).data?.challengeId;
        if (!challengeId) {
          setSubmitError('Не удалось получить challenge для проверки TOTP');
          return;
        }

        onTotpRequired?.(challengeId);
        return;
      }

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
