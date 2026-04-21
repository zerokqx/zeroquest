import { Payment, useGetAllPayments } from '@/entites/payment';
import { Stack } from '@mantine/core';

export const PaymentList = (props: Stack.Props) => {
  const { data: payments } = useGetAllPayments();

  if (!payments) return null;
  return (
    <Stack
      {...props}
      style={{
        minHeight: 0,
        overflowY: 'auto',
        ...props.style,
      }}
    >
      {[...payments].reverse()?.map((payment) => (
        <Payment key={payment.id} data={payment} />
      ))}
    </Stack>
  );
};
