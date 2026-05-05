import { useGetMyProfile } from '@/entites/user';
import { CreditBalanceForm } from '@/features/credit-balance';
import { fromPenny } from '@zeroquest/converters';
import {
  ActionIcon,
  Button,
  Card,
  CardProps,
  Group,
  Modal,
  Skeleton,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from '@tanstack/react-router';
import { Coins, History, Plus, Snowflake, Wallet2 } from 'lucide-react';

const formatRub = (value: string): string =>
  new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 2,
  }).format(Number(value));

export const WalletCard = (props: CardProps) => {
  const { data, isLoading } = useGetMyProfile();
  const [
    openedPaymentModal,
    { close: closePaymentModal, open: openPaymentModal },
  ] = useDisclosure(false);

  if (isLoading) {
    return (
      <Card withBorder radius="xl" p="xl" {...props}>
        <Stack gap="md">
          <Skeleton h={18} w={120} />
          <Skeleton h={40} w={220} />
          <Group grow>
            <Skeleton h={64} radius="md" />
            <Skeleton h={64} radius="md" />
          </Group>
        </Stack>
      </Card>
    );
  }

  if (!data) return null;

  const total = Number(fromPenny(data.wallet?.balance ?? 0));
  const held = Number(fromPenny(data.wallet?.held ?? 0));
  const available = Math.max(total - held, 0);

  return (
    <>
      <Modal opened={openedPaymentModal} onClose={closePaymentModal}>
        <CreditBalanceForm />
      </Modal>

      <Card bg={'violet'} withBorder radius="xl" p="xl" {...props}>
        <Stack gap="lg">
          <Group justify="space-between" align="center">
            <Group gap={8}>
              <ThemeIcon size={32} radius="xl" variant="light">
                <Wallet2 size={18} />
              </ThemeIcon>
              <Text c="white" fw={600}>
                Баланс
              </Text>
            </Group>
            <Group gap="xs" hiddenFrom="sm">
              <ActionIcon
                variant="light"
                radius="xl"
                onClick={openPaymentModal}
                aria-label="Пополнить баланс"
              >
                <Plus size={16} />
              </ActionIcon>

              <ActionIcon
                component={Link}
                to="/payment-history"
                variant="subtle"
                color="white"
                radius="xl"
                aria-label="История платежей"
              >
                <History size={16} />
              </ActionIcon>
            </Group>

            <Group gap="xs" visibleFrom="sm">
              <Button variant="white" bdrs={'xl'} onClick={openPaymentModal}>
                Пополнить баланс
              </Button>
              <Button
                component={Link}
                to="/payment-history"
                color="white"
                bdrs={'xl'}
                variant="subtle"
              >
                История платежей
              </Button>
            </Group>
          </Group>

          <div>
            <Text size="xs" opacity={0.7} c="white" mb={6}>
              Доступно сейчас
            </Text>
            <Title
              c="white"
              order={2}
              style={{ letterSpacing: '-0.02em', lineHeight: 1 }}
            >
              {formatRub(available.toFixed(2))}
            </Title>
          </div>

          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
            <Card withBorder radius="xl" p="md">
              <Group gap="xs" wrap="nowrap">
                <ThemeIcon size={30} radius="xl" variant="light">
                  <Coins size={16} />
                </ThemeIcon>
                <Stack gap={0}>
                  <Text size="xs" c="dimmed">
                    Всего на кошельке
                  </Text>
                  <Text fw={700}>{formatRub(total.toFixed(2))}</Text>
                </Stack>
              </Group>
            </Card>

            <Card withBorder radius="xl" p="md">
              <Group gap="xs" wrap="nowrap">
                <ThemeIcon size={30} radius="xl" variant="light" color="blue">
                  <Snowflake size={16} />
                </ThemeIcon>
                <Stack gap={0}>
                  <Text size="xs" c="dimmed">
                    Заморожено
                  </Text>
                  <Text fw={700}>{formatRub(held.toFixed(2))}</Text>
                </Stack>
              </Group>
            </Card>
          </SimpleGrid>
        </Stack>
      </Card>
    </>
  );
};
