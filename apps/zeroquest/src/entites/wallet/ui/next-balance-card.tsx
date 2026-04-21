import { useGetMyProfile } from '@/entites/user';
import {
  Card,
  CardProps,
  Group,
  Skeleton,
  Stack,
  Text,
  ThemeIcon,
} from '@mantine/core';
import { ArrowRight } from 'lucide-react';

interface NextBalanceCardProps extends CardProps {
  amount?: number;
  operationType?: 'debit' | 'credit';
}

const formatRubFromKopeks = (value: number): string =>
  new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 2,
  }).format(value / 100);

export const NextBalanceCard = ({
  amount = 0,
  operationType = 'debit',
  ...props
}: NextBalanceCardProps) => {
  const { data, isLoading } = useGetMyProfile();

  if (isLoading) {
    return (
      <Card withBorder radius="lg" p="sm" {...props}>
        <Skeleton h={38} />
      </Card>
    );
  }

  if (!data) return null;

  const currentBalance = data.wallet.balance - data.wallet.held;
  const safeAmount = Math.max(0, Math.round(amount));
  const nextBalance =
    operationType === 'credit'
      ? currentBalance + safeAmount
      : currentBalance - safeAmount;
  const isNegativeNextBalance = nextBalance < 0;
  const nextBalanceLabel =
    operationType === 'credit' ? 'После пополнения' : 'После списания';

  return (
    <Card withBorder radius="lg" p="sm" {...props}>
      <Group wrap="nowrap" justify="space-between">
        <Stack gap={0}>
          <Text size="xs" c="dimmed">
            Доступно сейчас
          </Text>
          <Text fw={600}>{formatRubFromKopeks(currentBalance)}</Text>
        </Stack>

        <ThemeIcon color="dark" variant="transparent">
          <ArrowRight size={14} />
        </ThemeIcon>

        <Stack gap={0} ta="right">
          <Text size="xs" c="dimmed">
            {nextBalanceLabel}
          </Text>
          <Text fw={600} c={isNegativeNextBalance ? 'red' : undefined}>
            {formatRubFromKopeks(nextBalance)}
          </Text>
        </Stack>
      </Group>
    </Card>
  );
};
