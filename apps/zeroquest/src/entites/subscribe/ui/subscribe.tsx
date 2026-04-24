import { SubscribeEntity } from '@/shared/api/orval/base-api/base-api.schemas';
import { formatDate } from '@/shared/lib/format-date';
import { getDaysLeft } from '@/shared/lib/get-days-left';
import {
  ActionIcon,
  Badge,
  Card,
  CopyButton,
  Group,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import {
  CalendarClock,
  Copy,
  Database,
  Eye,
  EyeClosed,
  Infinity as InfinityIcon,
  ShieldCheck,
  ShieldX,
} from 'lucide-react';
import { customAlphabet } from 'nanoid';
import { useMemo, useRef, useState } from 'react';
interface SubscribeProps {
  data: SubscribeEntity;
}

export const Subscribe = ({ data }: SubscribeProps) => {
  const expiresAt = formatDate(data.expiresAt);
  const daysLeft = getDaysLeft(data.expiresAt);
  const [visible, setVisible] = useState(false);
  const isStopped = data.status === 'STOPPED';
  const masked = data.vlessLink.replace(/[^\n]/g, '•');
  const isUnlimitedTraffic = data.totalGb === 0;

  return (
    <Card withBorder radius="xl" p="lg">
      <Stack gap="md">
        <Group justify="space-between" align="flex-start">
          <Stack gap={2}>
            <Text size="xs" c="dimmed" tt="uppercase" fw={700}>
              Подписка
            </Text>
            <Title order={4}>{data.name}</Title>
          </Stack>
          <Badge variant="light" color={isStopped ? 'red' : 'green'}>
            {isStopped ? 'Остановлена' : 'Активна'}
          </Badge>
        </Group>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm">
          <Card withBorder radius="md" p="sm">
            <Group wrap="nowrap" gap="sm">
              <ThemeIcon variant="light" color="blue">
                <CalendarClock size={16} />
              </ThemeIcon>
              <Stack gap={0}>
                <Text size="xs" c="dimmed">
                  Истекает
                </Text>
                <Text fw={600}>{expiresAt}</Text>
                <Text size="xs" c={daysLeft <= 3 ? 'red' : 'dimmed'}>
                  Осталось: {daysLeft} дн.
                </Text>
              </Stack>
            </Group>
          </Card>

          <Card withBorder radius="md" p="sm">
            <Group wrap="nowrap" gap="sm">
              <ThemeIcon variant="light" color="grape">
                {isUnlimitedTraffic ? (
                  <InfinityIcon size={16} />
                ) : (
                  <Database size={16} />
                )}
              </ThemeIcon>
              <Stack gap={0}>
                <Text size="xs" c="dimmed">
                  Трафик
                </Text>
                <Text fw={600}>
                  {isUnlimitedTraffic ? '∞ GB' : `${data.totalGb} GB`}
                </Text>
                <Text size="xs" c="dimmed">
                  План: #{data.planId}
                </Text>
              </Stack>
            </Group>
          </Card>
        </SimpleGrid>

        <Card withBorder radius="md" p="sm" bg="gray.0">
          <Group justify="space-between" align="center" mb={4}>
            <Text size="xs" c="dimmed">
              VLESS-ссылка
            </Text>
            <Group>
              <ActionIcon
                color="blue"
                bdrs={'xl'}
                variant="light"
                onClick={() => {
                  setVisible((prev) => !prev);
                }}
              >
                {visible ? <Eye /> : <EyeClosed />}
              </ActionIcon>
              <CopyButton value={data.vlessLink}>
                {(data) => {
                  return (
                    <ActionIcon
                      bdrs={'xl'}
                      onClick={data.copy}
                      color={data.copied ? 'blue' : undefined}
                      variant={data.copied ? 'transparent' : 'light'}
                    >
                      <Copy />
                    </ActionIcon>
                  );
                }}
              </CopyButton>

              <ThemeIcon
                radius="xl"
                variant="light"
                color={isStopped ? 'red' : 'teal'}
              >
                {isStopped ? <ShieldX size={14} /> : <ShieldCheck size={14} />}
              </ThemeIcon>
            </Group>
          </Group>
          <Text
            ff="monospace"
            size="xs"
            style={{
              filter: `blur(${visible ? '0' : '4'}px)`,
              whiteSpace: 'pre-wrap',
              overflow: 'auto',
              overflowWrap: 'anywhere',
              wordBreak: 'break-all',
              userSelect: visible ? 'auto' : 'none',
            }}
          >
            {visible ? data.vlessLink : masked}
          </Text>
        </Card>
      </Stack>
    </Card>
  );
};
