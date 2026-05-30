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
import { useGetActualPolicy } from '@/entites/policy/api/get-actual-policy';
import { RESPONSE_CODES } from '@zeroquest/constants';
import { waitForTotp } from '../../shared/state';

interface SignInModalProps
  extends Pick<ModalProps, 'opened' | 'onClose' | 'stackId'> {
  onOpenSignUp: () => void;
  onSuccess?: () => void;
  onTotpRequired?: () => void;
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
  const [isInternalPending, setIsInternalPending] = useState(false); // Для удержания лоадера во время waitForTotp

  const isMobile = useMediaQuery('(max-width: 48em)');

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

  const onSubmit = async ({
    login,
    password,
  }: SignInFormValues) => {
    setSubmitError('');

    const policyVersion = actualPrivacyPolicy?.version;
    if (!policyVersion) {
      setSubmitError('Не удалось получить актуальную версию политики');
      return;
    }

    const baseData = {
      login: login.trim(),
      password: password,
      policy: [
        {
          type: PolicyEntityType.PRIVACY,
          version: policyVersion,
        },
      ],
    };

    try {
      await mutateAsync({ data: baseData });

      onSuccess?.();
      onClose();
    } catch (error: any) {
      const apiCode = error?.response?.data?.details?.code;

      if (apiCode === RESPONSE_CODES.TOTP_REQUIRED) {
        try {
          setIsInternalPending(true);
          onTotpRequired?.(); // Оповещаем родителя, что открываем ввод TOTP
          const code = await waitForTotp();

          if (!code) {
            return;
          }

          // 3. Повторный запрос, теперь уже с токеном
          await mutateAsync({
            data: {
              ...baseData,
              token: code.trim(),
            },
          });
          onSuccess?.();
          onClose();
        } catch (secondError: any) {
          // Обрабатываем ошибку именно второго запроса (например, неверный код TOTP)
          setSubmitError(
            secondError?.response?.data?.message ||
              'Неверный код подтверждения',
          );
        } finally {
          setIsInternalPending(false); // Выключаем ручной лоадер
        }

        return; // Выходим, чтобы не сработал общий catch ниже
      }

      // Обработка обычных ошибок первого запроса (неверный пароль, логин и т.д.)
      setSubmitError(
        error?.response?.data?.message || 'Произошла ошибка при авторизации',
      );
    }
  };

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
              // Объединяем лоадер мутации и наш внутренний стейт ожидания кода
              loading={isPending || isInternalPending || isPolicyLoading}
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
          <Anchor
            component="button"
            type="button"
            size="sm"
            onClick={onOpenSignUp}
          >
            Создать аккаунт
          </Anchor>
        </Group>
      </Stack>
    </Modal>
  );
};
