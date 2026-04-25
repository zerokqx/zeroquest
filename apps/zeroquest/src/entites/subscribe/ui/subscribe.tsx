import { SubscribeEntity } from '@/shared/api/orval/base-api/base-api.schemas';
import { subscribeControllerGetLink } from '@/shared/api/orval/base-api/subscribe/subscribe';
import { formatDate } from '@/shared/lib/format-date';
import { getDaysLeft } from '@/shared/lib/get-days-left';
import {
  ActionIcon,
  Badge,
  Card,
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
import { useEffect, useMemo, useState } from 'react';

interface SubscribeProps {
  data: SubscribeEntity;
}

export const Subscribe = ({ data }: SubscribeProps) => {
  const expiresAt = formatDate(data.expiresAt);
  const daysLeft = getDaysLeft(data.expiresAt);
  const [visible, setVisible] = useState(false);
  const [subscribeLink, setSubscribeLink] = useState<string | null>(null);
  const [isLinkLoading, setIsLinkLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const isStopped = data.status === 'STOPPED';
  const isUnlimitedTraffic = data.totalGb === 0;

  const masked = useMemo(() => {
    const maskLength = Math.max(16, Math.min(data.lenght, 96));
    return '•'.repeat(maskLength);
  }, [data.lenght]);

  const ensureLinkLoaded = async (): Promise<string | null> => {
    if (subscribeLink) return subscribeLink;

    setIsLinkLoading(true);
    try {
      const loaded = await subscribeControllerGetLink(data.id);
      setSubscribeLink(loaded);
      return loaded;
    } catch {
      setSubscribeLink(null);
      return null;
    } finally {
      setIsLinkLoading(false);
    }
  };

  const toggleVisibility = async () => {
    if (visible) {
      setVisible(false);
      setSubscribeLink(null);
      return;
    }

    const loaded = await ensureLinkLoaded();
    if (loaded) setVisible(true);
  };

  const copyLink = async () => {
    const loaded = await ensureLinkLoaded();
    if (!loaded || typeof navigator === 'undefined' || !navigator.clipboard) {
      return;
    }

    await navigator.clipboard.writeText(loaded);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  useEffect(() => {
    if (!visible) return;

    const timer = window.setTimeout(() => {
      setVisible(false);
      setSubscribeLink(null);
    }, 20000);

    return () => window.clearTimeout(timer);
  }, [visible]);

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
                bdrs="xl"
                variant="light"
                onClick={toggleVisibility}
                loading={isLinkLoading}
              >
                {visible ? <EyeClosed /> : <Eye />}
              </ActionIcon>
              <ActionIcon
                bdrs="xl"
                onClick={copyLink}
                color={copied ? 'blue' : undefined}
                variant={copied ? 'transparent' : 'light'}
                loading={isLinkLoading}
              >
                <Copy />
              </ActionIcon>

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
            {visible ? subscribeLink ?? 'Ссылка недоступна' : masked}
          </Text>
          <Text size="xs" c="dimmed" mt={6}>
            Ссылка загружается по запросу и скрывается через 20 секунд.
          </Text>
        </Card>
      </Stack>
    </Card>
  );
};
