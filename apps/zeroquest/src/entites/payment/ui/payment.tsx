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
  Card,
  CopyButton,
  Divider,
  Group,
  Modal,
  rem,
  Stack,
  Text,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { CalendarClock, Copy, ExternalLink, ReceiptText } from 'lucide-react';

interface PaymentProps {
  data: PaymentEntity;
}

const STATUS_META: Record<
  PaymentEntityStatus,
  { label: string; color: string }
> = {
  PENDING: { label: 'Ожидает оплаты', color: 'yellow' },
  PROCESSING: { label: 'В обработке', color: 'blue' },
  WAITING_FOR_CONFIRMATION: {
    label: 'Ожидает подтверждения',
    color: 'cyan',
  },
  SUCCEEDED: { label: 'Успешно', color: 'green' },
  FAILED: { label: 'Ошибка', color: 'red' },
  CANCELED: { label: 'Отменен', color: 'gray' },
  REFUND_PENDING: {
    label: 'Возврат в обработке',
    color: 'orange',
  },
  REFUNDED: { label: 'Возвращен', color: 'teal' },
};

const formatAmount = (value: string, currency: string) =>
  new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: currency.toUpperCase(),
    maximumFractionDigits: 2,
  }).format(Number(value));

export const Payment = ({ data }: PaymentProps) => {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: 48em)');
  const statusMeta = STATUS_META[data.status];
  const createdAt = formatDate(data.createdAt);
  const amount = formatAmount(fromPenny(data.value), data.currency);

  return (
    <>
      <Card
        miw={rem(340)}
        withBorder
        radius="xl"
        p="sm"
        onClick={open}
        style={{ cursor: 'pointer', flexShrink: 0 }}
      >
        <Group justify="space-between" wrap="nowrap">
          <Group gap="sm" wrap="nowrap">
            <Text fw={700} size="sm">
              {amount}
            </Text>
            <Badge variant="light" color={statusMeta.color}>
              {statusMeta.label}
            </Badge>
          </Group>

          <Group gap="xs" wrap="nowrap">
            <Group gap={4} wrap="nowrap">
              <CalendarClock size={12} />
              <Text size="xs" c="dimmed">
                {createdAt}
              </Text>
            </Group>
          </Group>
        </Group>
      </Card>

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
