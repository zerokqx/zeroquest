import {
  PaymentEntity,
  PaymentEntityStatus,
} from '@/shared/api/orval/base-api/base-api.schemas';
import { formatDate } from '@/shared/lib/format-date';
import { fromPenny } from '@zeroquest/converters';
import {
  ActionIcon,
  Anchor,
  Badge,
  CopyButton,
  Divider,
  Group,
  Modal,
  Paper,
  rem,
  Stack,
  Text,
  ThemeIcon,
  UnstyledButton,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import {
  Check,
  Clock3,
  Copy,
  CreditCard,
  ExternalLink,
  ReceiptText,
  X,
} from 'lucide-react';

interface PaymentProps {
  data: PaymentEntity;
}

type PaymentStatusTone = 'success' | 'warning' | 'danger';

type PaymentStatusMeta = {
  label: string;
  color: string;
  tone: PaymentStatusTone;
};

const STATUS_META: Record<PaymentEntityStatus, PaymentStatusMeta> = {
  PENDING: { label: 'Ожидает оплаты', color: 'yellow', tone: 'warning' },
  PROCESSING: { label: 'В обработке', color: 'yellow', tone: 'warning' },
  WAITING_FOR_CONFIRMATION: {
    label: 'В обработке',
    color: 'yellow',
    tone: 'warning',
  },
  SUCCEEDED: { label: 'Завершен', color: 'green', tone: 'success' },
  FAILED: { label: 'Отклонено', color: 'red', tone: 'danger' },
  CANCELED: { label: 'Отклонено', color: 'red', tone: 'danger' },
  REFUND_PENDING: {
    label: 'Возврат в обработке',
    color: 'orange',
    tone: 'warning',
  },
  REFUNDED: { label: 'Возвращен', color: 'teal', tone: 'success' },
};

const formatAmount = (value: string, currency: string) =>
  new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: currency.toUpperCase(),
    maximumFractionDigits: 2,
  }).format(Number(value));

const STATUS_TONE_STYLES = {
  success: {
    bg: 'var(--mantine-color-green-1)',
    text: 'var(--mantine-color-green-8)',
    Icon: Check,
  },
  warning: {
    bg: 'var(--mantine-color-yellow-1)',
    text: 'var(--mantine-color-yellow-8)',
    Icon: Clock3,
  },
  danger: {
    bg: 'var(--mantine-color-red-1)',
    text: 'var(--mantine-color-red-8)',
    Icon: X,
  },
} as const satisfies Record<
  PaymentStatusTone,
  { bg: string; text: string; Icon: typeof Check }
>;

const formatCardDate = (dateString: string) => {
  const date = new Date(dateString);
  const datePart = new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
  const timePart = new Intl.DateTimeFormat('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);

  return `${datePart}, ${timePart}`;
};

const getPaymentTitle = (data: PaymentEntity) => {
  const description = data.description?.trim();
  if (description) return description;
  if (data.planId) return 'Оплата подписки';

  return 'Пополнение баланса';
};

export const Payment = ({ data }: PaymentProps) => {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: 48em)');
  const isCompact = useMediaQuery('(max-width: 40em)');
  const statusMeta = STATUS_META[data.status];
  const statusToneStyle = STATUS_TONE_STYLES[statusMeta.tone];
  const StatusIcon = statusToneStyle.Icon;
  const createdAt = formatDate(data.createdAt);
  const cardDate = formatCardDate(data.createdAt);
  const amount = formatAmount(fromPenny(data.value), data.currency);
  const paymentTitle = getPaymentTitle(data);

  return (
    <>
      <UnstyledButton
        onClick={open}
        style={{ width: '100%', display: 'block', cursor: 'pointer' }}
      >
        <Paper withBorder radius="md" p="md">
          {isCompact ? (
            <Stack gap="sm">
              <Group gap="sm" align="flex-start" wrap="nowrap">
                <ThemeIcon
                  variant="light"
                  radius="xl"
                  size={rem(40)}
                  style={{ flexShrink: 0 }}
                >
                  <CreditCard size={16} />
                </ThemeIcon>

                <Stack gap={4} style={{ minWidth: 0 }}>
                  <Text fw={600} size="md" lineClamp={1}>
                    {paymentTitle}
                  </Text>
                  <Text size="sm" c="dimmed" lineClamp={1}>
                    {cardDate}
                  </Text>
                </Stack>
              </Group>

              <Group justify="space-between" align="flex-end" wrap="nowrap">
                <Text fw={600} size="xl">
                  {amount}
                </Text>
                <Badge
                  radius="xl"
                  leftSection={<StatusIcon size={12} />}
                  styles={{
                    root: {
                      textTransform: 'none',
                      fontWeight: 500,
                      backgroundColor: statusToneStyle.bg,
                      color: statusToneStyle.text,
                      border: 0,
                    },
                    section: {
                      color: statusToneStyle.text,
                    },
                  }}
                >
                  {statusMeta.label}
                </Badge>
              </Group>
            </Stack>
          ) : (
            <Group justify="space-between" align="center" wrap="nowrap">
              <Group gap="sm" wrap="nowrap" style={{ minWidth: 0, flex: 1 }}>
                <ThemeIcon
                  variant="light"
                  radius="xl"
                  size={rem(40)}
                  style={{ flexShrink: 0 }}
                >
                  <CreditCard size={16} />
                </ThemeIcon>

                <Stack gap={4} style={{ minWidth: 0 }}>
                  <Text fw={600} size="lg" lineClamp={1}>
                    {paymentTitle}
                  </Text>
                  <Text size="md" c="dimmed" lineClamp={1}>
                    {cardDate}
                  </Text>
                </Stack>
              </Group>

              <Stack gap={8} align="flex-end" style={{ flexShrink: 0 }}>
                <Text fw={600} size="xl">
                  {amount}
                </Text>
                <Badge
                  radius="xl"
                  leftSection={<StatusIcon size={12} />}
                  styles={{
                    root: {
                      textTransform: 'none',
                      fontWeight: 500,
                      backgroundColor: statusToneStyle.bg,
                      color: statusToneStyle.text,
                      border: 0,
                    },
                    section: {
                      color: statusToneStyle.text,
                    },
                  }}
                >
                  {statusMeta.label}
                </Badge>
              </Stack>
            </Group>
          )}
        </Paper>
      </UnstyledButton>

      <Modal
        opened={opened}
        onClose={close}
        centered
        fullScreen={isMobile}
      >
        <Stack gap="md">
          <Group justify="space-between" align="flex-start">
            <Text fw={700} size="xl">
              {amount}
            </Text>
            <Badge variant="light" color={statusMeta.color}>
              {statusMeta.label}
            </Badge>
          </Group>

          <Divider />

          <Stack gap="xs">
            <Text size="xs" c="dimmed">
              Дата создания
            </Text>
            <Text size="sm">{createdAt}</Text>
          </Stack>

          <Stack gap="xs">
            <Text size="xs" c="dimmed">
              Валюта
            </Text>
            <Text size="sm" fw={600}>
              {data.currency.toUpperCase()}
            </Text>
          </Stack>

          <Stack gap="xs">
            <Group justify="space-between" align="center">
              <Text size="xs" c="dimmed">
                ID провайдера
              </Text>
              <CopyButton value={data.providerPaymentId}>
                {({ copy, copied }) => (
                  <ActionIcon
                    onClick={copy}
                    variant="light"
                    color={copied ? 'teal' : 'gray'}
                    aria-label="Скопировать ID платежа"
                  >
                    <Copy size={14} />
                  </ActionIcon>
                )}
              </CopyButton>
            </Group>
            <Text ff="monospace" size="sm">
              {data.providerPaymentId}
            </Text>
          </Stack>

          {data.description && (
            <Stack gap="xs">
              <Text size="xs" c="dimmed">
                Описание
              </Text>
              <Text size="sm">{data.description}</Text>
            </Stack>
          )}

          {data.confirmationUrl && data.status !== 'SUCCEEDED' && (
            <Anchor href={data.confirmationUrl} target="_blank" rel="noreferrer">
              <Group gap={6} wrap="nowrap">
                <ReceiptText size={14} />
                <Text size="sm" fw={600}>
                  Перейти к оплате
                </Text>
                <ExternalLink size={14} />
              </Group>
            </Anchor>
          )}
        </Stack>
      </Modal>
    </>
  );
};
