import { SessionEntity } from '@/shared/api/orval/base-api/base-api.schemas';
import dayjs from 'dayjs';
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

export const Session = ({
  data,
  isCurrent = false,
  isDeleting = false,
  onDelete,
}: SessionProps) => {
  const sessionId = data.sid;
  const cat = dayjs(data.cat).format('D MMMM YYYY HH:mm');

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
            {/* <Text size="sm" c="dimmed"> */}
            {/*   {resolveClientTypeLabel(data.)} */}
            {/* </Text> */}
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
        <Text ff="monospace" c={'dimmed'} size="sm">
          {sessionId}
        </Text>
      </Stack>

      <Stack gap="xs" mt="sm">
        <Group gap={6} align="center">
          <MonitorSmartphone size={14} />
          <Text size="xs" c="dimmed">
            Создана
          </Text>
        </Group>

        <Text size="sm" fw={500}>
          {cat}
        </Text>
      </Stack>
      <Stack gap="xs" mt="sm">
        <Group justify="space-between" align="center" wrap="nowrap">
          <Group gap={6} align="center">
            <Fingerprint size={14} />
            <Text size="xs" c="dimmed">
              User-Agent
            </Text>
          </Group>
        </Group>
        <Text ff="monospace" size="sm">
          {data.ua}
        </Text>
      </Stack>

      <Group justify="flex-end" mt="md">
        <Button
          size="xs"
          variant="light"
          color="red"
          leftSection={<Trash2 size={14} />}
          onClick={() => onDelete?.(data.sid)}
          loading={isDeleting}
          disabled={!onDelete}
        >
          Удалить
        </Button>
      </Group>
    </Paper>
  );
};
