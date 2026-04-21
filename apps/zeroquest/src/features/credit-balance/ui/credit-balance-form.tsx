import { Button, Group, NumberInput, Stack } from '@mantine/core';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { hintAmount } from '../config/hint-amount';
import { useCreditBalance } from '../api';
import { NextBalanceCard } from '@/entites/wallet/ui/next-balance-card';
import { toPenny } from '@zeroquest/converters';

interface CreditBalanceFormState {
  amount: number;
}

export const CreditBalanceForm = () => {
  const { isPending, mutateAsync } = useCreditBalance();
  const { control, setValue, handleSubmit, watch } =
    useForm<CreditBalanceFormState>({
      defaultValues: {
        amount: 0,
      },
    });

  const amount = watch('amount');
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
        <NextBalanceCard
          operationType="credit"
          amount={toPenny(String(amount ?? 0))}
        />
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
