import {
  Alert,
  Badge,
  Button,
  Card,
  Container,
  Group,
  List,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { createFileRoute } from '@tanstack/react-router';
import {
  CircleDollarSign,
  Copy,
  Download,
  Link2,
  ShieldCheck,
  ShoppingCart,
  TriangleAlert,
} from 'lucide-react';

export const Route = createFileRoute('/manual')({
  component: RouteComponent,
});

type ManualStep = {
  id: string;
  title: string;
  description: string;
  tip: string;
  icon: typeof CircleDollarSign;
  actionLabel?: string;
  actionHref?: string;
};

const steps: ManualStep[] = [
  {
    id: '01',
    title: 'Пополните баланс',
    description:
      'В личном кабинете откройте кошелек и внесите нужную сумму для покупки подписки.',
    tip: 'Лучше пополнять с небольшим запасом, чтобы сразу продлить доступ при необходимости.',
    icon: CircleDollarSign,
    actionLabel: 'Открыть кабинет',
    actionHref: '/dashboard',
  },
  {
    id: '02',
    title: 'Купите VPN-тариф',
    description:
      'Перейдите в магазин тарифов, выберите подходящий план и подтвердите покупку.',
    tip: 'Если используете несколько устройств, берите тариф с запасом по сроку.',
    icon: ShoppingCart,
    actionLabel: 'Перейти в магазин',
    actionHref: '/magazine',
  },
  {
    id: '03',
    title: 'Скопируйте ссылку в личном кабинете',
    description:
      'После оплаты откройте раздел с вашей подпиской и скопируйте персональную ссылку конфигурации.',
    tip: 'Эта ссылка индивидуальна. Не передавайте ее третьим лицам.',
    icon: Link2,
  },
  {
    id: '04',
    title: 'Скачайте приложение Happ или V2Ray',
    description:
      'Установите клиент на ваше устройство из официального источника: App Store, Google Play или сайта разработчика.',
    tip: 'Если Happ недоступен на вашей платформе, используйте совместимый клиент V2Ray.',
    icon: Download,
  },
  {
    id: '05',
    title: 'Добавьте конфигурацию и подключитесь',
    description:
      'Откройте приложение, вставьте скопированную ссылку, импортируйте конфиг и включите VPN.',
    tip: 'После импорта выберите ближайший сервер для лучшей скорости.',
    icon: Copy,
  },
];

function RouteComponent() {
  return (
    <Container
      size="lg"
      h="100%"
      w="100%"
      px={{ base: 'sm', sm: 'md' }}
      py="md"
    >
      <Stack gap="lg" pb="xl">
        <Paper
          radius="xl"
          p={{ base: 'md', md: 'xl' }}
          bg={'gray.1'}
          withBorder
        >
          <Stack gap="sm">
            <Group justify="space-between" align="flex-start">
              <Stack gap={4}>
                <Badge variant="light" w="fit-content" color="teal">
                  Быстрый старт
                </Badge>
                <Title order={1} lh={1.1}>
                  Настройка VPN за 5 шагов
                </Title>
                <Text c="dimmed" maw={760}>
                  Пополните баланс, купите тариф, скопируйте ссылку в личном
                  кабинете и импортируйте конфигурацию в Happ или V2Ray.
                </Text>
              </Stack>
              <ThemeIcon size={42} radius="md">
                <ShieldCheck size={22} />
              </ThemeIcon>
            </Group>
          </Stack>
        </Paper>

        <Stack gap="sm">
          {steps.map((step) => {
            const StepIcon = step.icon;

            return (
              <Card
                key={step.id}
                withBorder
                radius="lg"
                p={{ base: 'md', md: 'lg' }}
              >
                <Stack gap="sm">
                  <Group justify="space-between" align="flex-start" gap="sm">
                    <Group
                      gap="sm"
                      wrap="nowrap"
                      align="flex-start"
                      style={{ flex: 1, minWidth: 220 }}
                    >
                      <ThemeIcon
                        size={38}
                        radius="md"
                        variant="light"
                        style={{ flexShrink: 0 }}
                      >
                        <StepIcon size={18} />
                      </ThemeIcon>
                      <Stack gap={2}>
                        <Text fw={700}>
                          Шаг {step.id}. {step.title}
                        </Text>
                        <Text c="dimmed">{step.description}</Text>
                      </Stack>
                    </Group>

                    {step.actionLabel && step.actionHref ? (
                      <Button
                        component="a"
                        href={step.actionHref}
                        variant="light"
                        size="compact-sm"
                        style={{ flexShrink: 0 }}
                      >
                        {step.actionLabel}
                      </Button>
                    ) : null}
                  </Group>

                  <Text c="gray.7" fz="sm">
                    {step.tip}
                  </Text>
                </Stack>
              </Card>
            );
          })}
        </Stack>

        <Alert
          variant="light"
          color="orange"
          radius="md"
          icon={<TriangleAlert size={16} />}
          title="Важно для безопасности"
        >
          <List spacing={6} size="sm" center>
            <List.Item>
              Не отправляйте вашу конфигурационную ссылку другим людям.
            </List.Item>
            <List.Item>
              При смене устройства используйте ту же ссылку только в ваших
              приложениях.
            </List.Item>
            <List.Item>
              Если подключение не работает, удалите старый профиль и
              импортируйте ссылку заново.
            </List.Item>
          </List>
        </Alert>
      </Stack>
    </Container>
  );
}
