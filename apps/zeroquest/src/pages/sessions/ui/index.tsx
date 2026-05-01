import { SessionList } from '@/widgets/session';
import { Container, Stack, Text, Title } from '@mantine/core';

export const Sessions = () => {
  return (
    <Container size="lg" h="100%" w="100%" px={{ base: 'sm', sm: 'md' }}>
      <Stack h="100%" gap="md" style={{ minHeight: 0 }} pb="md">
        <Stack gap={2}>
          <Title order={1}>Сессии</Title>
          <Text c="dimmed">Список активных устройств и браузеров</Text>
        </Stack>

        <SessionList style={{ flex: 1, minHeight: 0 }} />
      </Stack>
    </Container>
  );
};
