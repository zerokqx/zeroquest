import { PaymentList } from '@/widgets/payment';
import { Container, Stack, Text, Title } from '@mantine/core';

export const PaymentHistory = () => {
  return (
    <Container size="lg" h="100%" w="100%" px={{ base: 'sm', sm: 'md' }}>
      <Stack h="100%" gap="md" style={{ minHeight: 0 }} pb="md">
        <Stack gap={2}>
          <Title order={1}>История платежей</Title>
          <Text c="dimmed">Все ваши транзакции за последнее время</Text>
        </Stack>

        <PaymentList style={{ flex: 1, minHeight: 0 }} />
      </Stack>
    </Container>
  );
};
