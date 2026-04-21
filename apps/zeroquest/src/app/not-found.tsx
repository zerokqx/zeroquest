import { ErrorCatSvg } from '@/shared/ui/svg-cat/error-cat';
import { Button, Center, Stack, Text, Title } from '@mantine/core';
import { Link } from '@tanstack/react-router';

export const NotFoundPage = () => {
  return (
    <Center h="100%" w="100%">
      <Stack align="center" gap="sm" maw={560}>
        <div style={{ width: 'min(320px, 100%)', opacity: 0.95 }}>
          <ErrorCatSvg />
        </div>
        <Title order={2}>Страница не найдена</Title>
        <Text c="dimmed" ta="center">
          Такой страницы не существует или ссылка устарела.
        </Text>
        <Button component={Link} to="/" variant="light">
          На главную
        </Button>
      </Stack>
    </Center>
  );
};
