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
import { useAuthStore } from '../../shared/state';

interface TotpModalProps
  extends Pick<Modal.Props, 'onClose' | 'opened' | 'stackId'> {}

interface TotpModalState {
  value: string;
}

export const TotpModal = ({ opened, onClose }: TotpModalProps) => {
  const [submitError, setSubmitError] = useState('');
  const { control, handleSubmit, reset } = useForm<TotpModalState>({
    defaultValues: { value: '' },
  });

  useEffect(() => {
    if (!opened) return;
    setSubmitError('');
    reset({ value: '' });
  }, [opened, reset]);

  const submit: SubmitHandler<TotpModalState> = ({ value }) => {
    useAuthStore.setState({ totpCode: value });
    onClose();
  };

  return (
    <Modal
      zIndex={1000000}
      opened={opened}
      onClose={onClose}
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
              <PinInput
                {...field}
                length={6}
                type="number"
                size="lg"
                oneTimeCode
              />
            )}
          />
        </Center>
        <Button type="submit" fullWidth>
          Подтвердить
        </Button>
      </Stack>
    </Modal>
  );
};
