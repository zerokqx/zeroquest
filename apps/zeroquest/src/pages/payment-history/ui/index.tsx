import { PaymentList } from '@/widgets/payment';
import { Center } from '@mantine/core';

export const PaymentHistory = () => {
  return (
    <Center h="100%" w="100%" style={{ minHeight: 0 }}>
      <PaymentList
        bd={'1px solid gray.3'}
        p={'md'}
        bdrs={'xl'}
        h="100%"
        w="min(960px, 100%)"
      />
    </Center>
  );
};
