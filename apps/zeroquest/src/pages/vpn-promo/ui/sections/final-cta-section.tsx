import { Badge, Paper, Stack, Text, Title } from '@mantine/core';
import { PromoActionButtons } from '../components';

type FinalCtaSectionProps = {
  isAuth: boolean;
};

export const FinalCtaSection = ({ isAuth }: FinalCtaSectionProps) => {
  return (
    <Paper withBorder radius="xl" p={{ base: 'md', md: 'xl' }}>
      <Stack gap="sm" align="flex-start">
        <Badge variant="light">Готовы подключиться?</Badge>
        <Title order={2} style={{ lineHeight: 1.1, maxWidth: 760 }}>
          Получите стабильный и защищенный VPN уже сегодня
        </Title>
        <Text c="dimmed" maw={760}>
          Оформите тариф сейчас и начните пользоваться VPN через несколько минут
          без долгой настройки.
        </Text>
        <PromoActionButtons
          isAuth={isAuth}
          authLabel="Перейти к тарифам"
          guestLabel="Создать аккаунт и купить"
        />
      </Stack>
    </Paper>
  );
};
