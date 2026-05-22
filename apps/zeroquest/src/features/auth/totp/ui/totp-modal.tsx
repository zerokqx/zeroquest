import {
  Alert,
  Button,
  Center,
  Modal,
  PinInput,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { AlertCircle, ShieldCheck } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useValidateTotp } from '../api/validate-totp';
import { getAuthErrorMessage } from '@/features/auth/shared/get-auth-error-message';

interface TotpModalProps
  extends Pick<Modal.Props, 'opened' | 'onClose' | 'stackId'> {
  onSuccess?: () => void;
  challengeId: string;
}
interface TotpModalState {
  value: string;
}

export const TotpModal = ({
  opened,
  onClose,
  onSuccess,
  stackId,
  challengeId,
}: TotpModalProps) => {
  const [submitError, setSubmitError] = useState('');
  const { mutateAsync, isPending } = useValidateTotp();
  const { control, handleSubmit, reset } = useForm<TotpModalState>({
    defaultValues: { value: '' },
  });

  useEffect(() => {
    if (!opened) return;
    setSubmitError('');
    reset({ value: '' });
  }, [opened, reset]);

  const submit: SubmitHandler<TotpModalState> = async ({ value }) => {
    setSubmitError('');
    if (!challengeId) {
      setSubmitError('Сессия подтверждения истекла. Войдите снова.');
      return;
    }

    const normalizedValue = value.replace(/\D/g, '').slice(0, 6);
    if (normalizedValue.length !== 6) {
      setSubmitError('Введите 6-значный код');
      return;
    }

    try {
      await mutateAsync({ data: { challengeId, vallue: normalizedValue } });
      onSuccess?.();
    } catch (error) {
      setSubmitError(getAuthErrorMessage(error));
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      stackId={stackId}
      title="Подтверждение входа"
      centered
      size="sm"
    >
      <Stack component="form" onSubmit={handleSubmit(submit)} gap="md">
        <Center>
          <ThemeIcon variant="light" color="blue" radius="xl" size={48}>
            <ShieldCheck size={26} />
          </ThemeIcon>
        </Center>
        <Stack gap={2} align="center">
          <Title order={4} ta="center">
            Введите код из приложения
          </Title>
          <Text c="dimmed" size="sm" ta="center">
            Откройте приложение-аутентификатор и введите 6 цифр
          </Text>
        </Stack>

        {submitError && (
          <Alert color="red" icon={<AlertCircle size={16} />}>
            {submitError}
          </Alert>
        )}

        <Center>
          <Controller
            control={control}
            name="value"
            render={({ field }) => (
              <PinInput {...field} length={6} type="number" size="lg" oneTimeCode />
            )}
          />
        </Center>
        <Button type="submit" loading={isPending} fullWidth>
          Подтвердить
        </Button>
      </Stack>
    </Modal>
  );
};
