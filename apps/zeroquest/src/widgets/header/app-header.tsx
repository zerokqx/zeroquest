import { useLogout } from '@/features/logout';
import { useGetMyProfile } from '@/entites/user';
import { getUserControllerMeQueryKey } from '@/shared/api/orval/base-api/user/user';
import { Avatar, Burger, Card, Group, Menu, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate, useRouter } from '@tanstack/react-router';
import { Home, LogOut, ShoppingBag, UserStar } from 'lucide-react';
import { Logotype } from '@/shared/ui/logotype';

export const AppHeader = () => {
  const { data: user } = useGetMyProfile();
  const { logout } = useLogout();
  const queryClient = useQueryClient();
  const [opened, { toggle, close, open }] = useDisclosure(false);
  const navigate = useNavigate();
  const router = useRouter();

  if (!user) return null;
  return (
    <Card
      withBorder
      radius={0}
      p="xs"
      style={{
        marginTop: 'calc(-1 * var(--mantine-spacing-xs))',
        marginInline: 'calc(-1 * var(--mantine-spacing-xs))',
      }}
    >
      <Group justify="space-between" align="center" wrap="wrap">
        <Logotype
          onClick={() => {
            navigate({ to: '/' });
          }}
        />

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
              onClick={() => {
                navigate({ to: '/dashboard' });
              }}
            >
              Дом
            </Menu.Item>

            <Menu.Item
              leftSection={<UserStar size={14} />}
              onClick={() => {
                navigate({ to: '/review' });
              }}
            >
              Отзывы
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
