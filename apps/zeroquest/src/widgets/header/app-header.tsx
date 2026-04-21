import { useLogout } from '@/features/logout';
import { useGetMyProfile } from '@/entites/user';
import { getUserControllerMeQueryKey } from '@/shared/api/orval/base-api/user/user';
import { Avatar, Burger, Card, Group, Menu, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useQueryClient } from '@tanstack/react-query';
import { useMatchRoute, useNavigate, useRouter } from '@tanstack/react-router';
import { Home, LogOut, ShoppingBag } from 'lucide-react';

export const AppHeader = () => {
  const { data: user } = useGetMyProfile();
  const { logout } = useLogout();
  const queryClient = useQueryClient();
  const [opened, { toggle, close, open }] = useDisclosure(false);
  const navigate = useNavigate();
  const router = useRouter();
  const matchRouter = useMatchRoute();
  const isDashboard = matchRouter({
    to: '/dashboard',
    fuzzy: true,
  });

  if (!user) return null;
  return (
    <Card
        withBorder
        radius={0}
        p="sm"
        style={{
          marginTop: 'calc(-1 * var(--mantine-spacing-xs))',
          marginInline: 'calc(-1 * var(--mantine-spacing-xs))',
        }}
      >
        <Group justify="space-between" align="center" wrap="wrap">
          <Group gap="sm" wrap="nowrap">
            <Avatar name={user?.login ?? 'User'} radius="xl" color="violet" />
            <Stack gap={0}>
              <Text fw={600}>{user?.login ?? 'Пользователь'}</Text>
              <Text size="xs" c="dimmed">
                Личный кабинет
              </Text>
            </Stack>
          </Group>

          <Menu
            shadow="md"
            width={240}
            opened={opened}
            onOpen={open}
            onClose={close}
            position="bottom-end"
            withinPortal
          >
            <Menu.Target>
              <Burger
                opened={opened}
                onClick={toggle}
                aria-label="Открыть меню профиля"
              />
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                leftSection={<Home size={14} />}
                disabled={!!isDashboard}
                onClick={() => {
                  navigate({ to: '/dashboard' });
                }}
              >
                Дом
              </Menu.Item>
              <Menu.Item
                leftSection={<ShoppingBag size={14} />}
                onClick={() => {
                  navigate({ to: '/magazine' });
                }}
              >
                Магазин
              </Menu.Item>
              <Menu.Item
                color="red"
                leftSection={<LogOut size={14} />}
                onClick={async () => {
                  await logout();
                  await queryClient.invalidateQueries({
                    queryKey: getUserControllerMeQueryKey(),
                  });
                  await router.invalidate();
                  await router.navigate({ to: '/sign-up' });
                  close();
                }}
              >
                Выйти
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Card>
  );
};
