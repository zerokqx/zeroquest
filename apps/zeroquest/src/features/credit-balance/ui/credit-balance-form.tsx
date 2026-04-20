import { Button, Group, NumberInput, Stack } from '@mantine/core';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { hintAmount } from '../config/hint-amount';
import { useCreditBalance } from '../api';

interface CreditBalanceFormState {
  amount: number;
}

export const CreditBalanceForm = () => {
  const { isPending, mutateAsync } = useCreditBalance();
  const { control, setValue, handleSubmit } = useForm<CreditBalanceFormState>({
    defaultValues: {
      amount: 0,
    },
  });

  const submit: SubmitHandler<CreditBalanceFormState> = async (e) => {
    const payment = await mutateAsync({
      data: {
        amount: e.amount.toString(),
      },
    });
    window.location.href = payment.confirmationUrl;
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Stack>
        <Controller
          render={({ field }) => (
            <NumberInput
              label={'Сумма пополнения'}
              min={200}
              suffix="₽"
              {...field}
            />
          )}
          name="amount"
          control={control}
        />
        <Group>
          {hintAmount.map((hint) => (
            <Button
              disabled={isPending}
              variant="light"
              bdrs={'xl'}
              size="xs"
              onClick={() => {
                setValue('amount', hint);
              }}
            >
              {hint}₽
            </Button>
          ))}
        </Group>
        <Button loading={isPending} type="submit">
          Пополнить
        </Button>
      </Stack>
    </form>
  );
};
