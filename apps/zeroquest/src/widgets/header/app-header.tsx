import { useLogout } from '@/features/logout';
import { fromPenny } from '@zeroquest/converters';
import { useGetMyProfile } from '@/entites/user';
import { getUserControllerMeQueryKey } from '@/shared/api/orval/base-api/user/user';
import {
  Avatar,
  Burger,
  Card,
  Group,
  Menu,
  Modal,
  Stack,
  Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from '@tanstack/react-router';
import { DollarSign, LogOut, Wallet } from 'lucide-react';
import { CreditBalanceForm } from '@/features/credit-balance';

export const AppHeader = () => {
  const { data } = useGetMyProfile();
  const [
    openedPaymentModal,
    { close: closePaymentModal, toggle: togglePaymentModal },
  ] = useDisclosure(false);
  const { data: user } = useGetMyProfile();
  const { logout } = useLogout();
  const queryClient = useQueryClient();
  const [opened, { toggle, close, open }] = useDisclosure(false);
  const router = useRouter();

  if (!data) return;
  const balance = fromPenny(data.wallet.balance);
  return (
    <>
      <Modal opened={openedPaymentModal} onClose={closePaymentModal}>
        <CreditBalanceForm />
      </Modal>
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
              <Menu.Label>Аккаунт</Menu.Label>
              <Menu.Item leftSection={<DollarSign size={14} />} disabled>
                Баланс: {balance} ₽
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item
                leftSection={<Wallet size={14} />}
                onClick={togglePaymentModal}
              >
                Пополнить баланс
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
    </>
  );
};
