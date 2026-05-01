import { SessionEntity } from '@/shared/api/orval/base-api/base-api.schemas';
import {
  ActionIcon,
  Badge,
  Button,
  CopyButton,
  Group,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Tooltip,
  rem,
} from '@mantine/core';
import {
  Check,
  Copy,
  Fingerprint,
  MonitorSmartphone,
  Trash2,
} from 'lucide-react';

interface SessionProps {
  data: SessionEntity;
  isCurrent?: boolean;
  isDeleting?: boolean;
  onDelete?: (sessionId: string) => void | Promise<void>;
}

const compact = (value: string, start = 10, end = 8) => {
  if (value.length <= start + end + 3) return value;
  return `${value.slice(0, start)}...${value.slice(-end)}`;
};

const resolveClientTypeLabel = (clientTypeId: number) => {
  if (clientTypeId === 1) return 'Web';
  return `Client #${clientTypeId}`;
};

export const Session = ({
  data,
  isCurrent = false,
  isDeleting = false,
  onDelete,
}: SessionProps) => {
  const sessionId = data.id;
  const userAgentHash = data.userAgentHash;

  return (
    <Paper withBorder radius="md" p="md">
      <Group justify="space-between" align="flex-start" wrap="nowrap">
        <Group gap="sm" wrap="nowrap" style={{ minWidth: 0 }}>
          <ThemeIcon
            variant="light"
            radius="xl"
            size={rem(40)}
            style={{ flexShrink: 0 }}
          >
            <MonitorSmartphone size={16} />
          </ThemeIcon>

          <Stack gap={4} style={{ minWidth: 0 }}>
            <Text fw={600} size="lg" lineClamp={1}>
              {isCurrent ? 'Текущая сессия' : 'Активная сессия'}
            </Text>
            <Text size="sm" c="dimmed">
              {resolveClientTypeLabel(data.clientTypeId)}
            </Text>
          </Stack>
        </Group>

        <Badge variant="light" color={isCurrent ? 'teal' : 'gray'}>
          {isCurrent ? 'Текущее устройство' : 'Другое устройство'}
        </Badge>
      </Group>

      <Stack gap="xs" mt="md">
        <Group justify="space-between" align="center" wrap="nowrap">
          <Text size="xs" c="dimmed">
            Session ID
          </Text>

          <CopyButton value={sessionId}>
            {({ copy, copied }) => (
              <Tooltip label={copied ? 'Скопировано' : 'Скопировать ID'}>
                <ActionIcon
                  onClick={copy}
                  variant="subtle"
                  color={copied ? 'teal' : 'gray'}
                  aria-label="Скопировать session id"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                </ActionIcon>
              </Tooltip>
            )}
          </CopyButton>
        </Group>
        <Text ff="monospace" size="sm">
          {compact(sessionId)}
        </Text>
      </Stack>

      <Stack gap="xs" mt="sm">
        <Group justify="space-between" align="center" wrap="nowrap">
          <Group gap={6} align="center">
            <Fingerprint size={14} />
            <Text size="xs" c="dimmed">
              User-Agent Hash
            </Text>
          </Group>

          <CopyButton value={userAgentHash}>
            {({ copy, copied }) => (
              <Tooltip label={copied ? 'Скопировано' : 'Скопировать hash'}>
                <ActionIcon
                  onClick={copy}
                  variant="subtle"
                  color={copied ? 'teal' : 'gray'}
                  aria-label="Скопировать user-agent hash"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                </ActionIcon>
              </Tooltip>
            )}
          </CopyButton>
        </Group>
        <Text ff="monospace" size="sm">
          {compact(userAgentHash)}
        </Text>
      </Stack>

      <Group justify="flex-end" mt="md">
        <Button
          size="xs"
          variant="light"
          color="red"
          leftSection={<Trash2 size={14} />}
          onClick={() => onDelete?.(data.id)}
          loading={isDeleting}
          disabled={!onDelete}
        >
          Удалить
        </Button>
      </Group>
    </Paper>
  );
};
