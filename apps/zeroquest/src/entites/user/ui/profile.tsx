import {
  Alert,
  Avatar,
  Badge,
  Button,
  Card,
  Divider,
  Group,
  Skeleton,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import {
  Ban,
  CalendarClock,
  Fingerprint,
  MessageSquare,
  RefreshCw,
  UserCircle2,
} from 'lucide-react';
import { useGetMyProfile } from '../api';
import styles from './profile.module.css';
import { ErrorCatSvg } from '@/shared/ui/svg-cat/error-cat';

const formatDate = (value: string): string => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Неизвестно';
  return new Intl.DateTimeFormat('ru-RU', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date);
};

const MyCard = Card.withProps({
  radius: 'xl',
  withBorder: true,
});
export const Profile = () => {
  const { data: profile, isLoading, isError, refetch } = useGetMyProfile();

  if (isLoading) {
    return (
      <MyCard>
        <Stack gap="lg">
          <Group>
            <Skeleton h={56} circle />
            <Stack gap={6} style={{ flex: 1 }}>
              <Skeleton h={18} w="45%" />
              <Skeleton h={14} w="30%" />
            </Stack>
          </Group>
          <Skeleton h={56} radius="md" />
          <Skeleton h={56} radius="md" />
          <Skeleton h={56} radius="md" />
        </Stack>
      </MyCard>
    );
  }

  if (isError) {
    return (
      <Alert color="red" title="Не удалось загрузить профиль" radius="md">
        <Stack gap="sm">
          <Text size="sm">Проверьте соединение или попробуйте снова.</Text>
          <Group justify="center">
            <div style={{ width: 180, opacity: 0.9 }}>
              <ErrorCatSvg />
            </div>
          </Group>
          <Button
            size="xs"
            variant="light"
            leftSection={<RefreshCw size={14} />}
            onClick={() => refetch()}
          >
            Повторить
          </Button>
        </Stack>
      </Alert>
    );
  }

  if (!profile) {
    return (
      <Alert color="gray" title="Профиль пуст" radius="md">
        Данные пользователя не найдены.
      </Alert>
    );
  }

  return (
    <MyCard>
      <Stack gap="lg">
        <div className={styles.header}>
          <Group justify="space-between" align="center" wrap="nowrap">
            <Group wrap="nowrap">
              <Avatar
                size={56}
                radius="xl"
                className={styles.avatar}
                name={profile.login}
              />
              <Stack gap={2}>
                <Title order={3} className={styles.login}>
                  {profile.login}
                </Title>
                <Group gap={8}>
                  <Badge variant="light" color="violet">
                    {profile.role}
                  </Badge>
                  {profile.isBanned ? (
                    <Badge variant="light" color="red">
                      Заблокирован
                    </Badge>
                  ) : (
                    <Badge variant="light" color="green">
                      Активен
                    </Badge>
                  )}
                </Group>
              </Stack>
            </Group>
            <ThemeIcon radius="xl" size={38} variant="light" color="violet">
              <UserCircle2 size={22} />
            </ThemeIcon>
          </Group>
        </div>

        <Group>
          <MyCard>
            <Group gap="sm" wrap="nowrap">
              <ThemeIcon variant="light" color="blue">
                <Fingerprint size={16} />
              </ThemeIcon>
              <Stack gap={0}>
                <Text size="xs" c="dimmed">
                  ID
                </Text>
                <Text fw={600} size="sm" className={styles.mono}>
                  {profile.id}
                </Text>
              </Stack>
            </Group>
          </MyCard>
        </Group>

        <Divider />

        <Group grow>
          <MyCard>
            <Group wrap="nowrap" gap="sm">
              <ThemeIcon
                variant="light"
                color={profile.canComment ? 'teal' : 'gray'}
              >
                <MessageSquare size={16} />
              </ThemeIcon>
              <Stack gap={0}>
                <Text size="xs" c="dimmed">
                  Комментарии
                </Text>
                <Text fw={600}>
                  {profile.canComment ? 'Разрешены' : 'Отключены'}
                </Text>
              </Stack>
            </Group>
          </MyCard>

          <MyCard>
            <Group wrap="nowrap" gap="sm">
              <ThemeIcon
                variant="light"
                color={profile.isBanned ? 'red' : 'green'}
              >
                <Ban size={16} />
              </ThemeIcon>
              <Stack gap={0}>
                <Text size="xs" c="dimmed">
                  Статус
                </Text>
                <Text fw={600}>
                  {profile.isBanned ? 'Заблокирован' : 'В порядке'}
                </Text>
              </Stack>
            </Group>
          </MyCard>
        </Group>

        <Group grow>
          <MyCard >
            <Group wrap="nowrap" gap="sm">
              <ThemeIcon variant="light" color="grape">
                <CalendarClock size={16} />
              </ThemeIcon>
              <Stack gap={0}>
                <Text size="xs" c="dimmed">
                  Создан
                </Text>
                <Text fw={600}>{formatDate(profile.createdAt)}</Text>
              </Stack>
            </Group>
          </MyCard>

          <MyCard>
            <Group wrap="nowrap" gap="sm">
              <ThemeIcon variant="light" color="indigo">
                <CalendarClock size={16} />
              </ThemeIcon>
              <Stack gap={0}>
                <Text size="xs" c="dimmed">
                  Обновлён
                </Text>
                <Text fw={600}>{formatDate(profile.updatedAt)}</Text>
              </Stack>
            </Group>
          </MyCard>
        </Group>

        {profile.telegramId !== null && (
          <Text size="sm" c="dimmed">
            Telegram ID:{' '}
            <Text span fw={700}>
              {profile.telegramId}
            </Text>
          </Text>
        )}
      </Stack>
    </MyCard>
  );
};
