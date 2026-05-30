import { useLogout } from '@/features/logout';
import { useGetMyProfile } from '@/entites/user';
import { getUserControllerMeQueryKey } from '@/shared/api/orval/base-api/user/user';
import { Burger, Card, Group, Menu } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate, useRouter } from '@tanstack/react-router';
import {
  Home,
  LogOut,
  MonitorSmartphone,
  ShoppingBag,
  UserStar,
} from 'lucide-react';
import { UserEntityRole } from '@/shared/api/orval/base-api/base-api.schemas';

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
              leftSection={<ShoppingBag size={14} />}
              onClick={() => {
                navigate({ to: '/magazine' });
              }}
            >
              Магазин
            </Menu.Item>

            {user.role === UserEntityRole.ADMIN && (
              <Menu.Item
                leftSection={<MonitorSmartphone size={14} />}
                onClick={() => {
                  navigate({ to: '/admin' });
                }}
              >
                Админ Панель
              </Menu.Item>
            )}
            <Menu.Item
              leftSection={<MonitorSmartphone size={14} />}
              onClick={() => {
                navigate({ to: '/sessions' });
              }}
            >
              Сессии
            </Menu.Item>
            <Menu.Item
              color="red"
              leftSection={<LogOut size={14} />}
              onClick={async () => {
                await logout();
                await router.navigate({ to: '/' });
                await queryClient.invalidateQueries({
                  queryKey: getUserControllerMeQueryKey(),
                });
                await router.invalidate();
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
