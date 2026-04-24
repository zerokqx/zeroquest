import { Payment, useGetAllPayments } from '@/entites/payment';
import { rem, Stack } from '@mantine/core';

export const PaymentList = (props: Stack.Props) => {
  const { data: payments } = useGetAllPayments();

  if (!payments) return null;
  return (
    <Stack
      gap="sm"
      {...props}
      style={{
        minHeight: 0,
        overflowY: 'auto',
        paddingRight: rem(2),
        ...props.style,
      }}
    >
      {[...payments].reverse().map((payment) => (
        <Payment key={payment.id} data={payment} />
      ))}
    </Stack>
  );
};
