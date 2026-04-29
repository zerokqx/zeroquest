import { Group, Paper, Stack, Text, ThemeIcon } from '@mantine/core';
import type { PromoItem } from '../model/types';

type PromoItemCardProps = {
  item: PromoItem;
};

export const PromoItemCard = ({ item }: PromoItemCardProps) => {
  const Icon = item.icon;

  return (
    <Paper withBorder radius="lg" p="md" style={{ height: '100%' }}>
      <Stack gap="xs">
        <ThemeIcon size={34} radius="md" variant="light">
          <Icon size={16} />
        </ThemeIcon>
        <Text fw={700}>{item.title}</Text>
        <Text c="dimmed" fz="sm">
          {item.description}
        </Text>
      </Stack>
    </Paper>
  );
};

type NumberedPromoItemCardProps = {
  item: PromoItem;
  index: number;
};

export const NumberedPromoItemCard = ({ item, index }: NumberedPromoItemCardProps) => {
  const Icon = item.icon;

  return (
    <Paper withBorder radius="lg" p="md" style={{ height: '100%' }}>
      <Stack gap="xs">
        <Group gap="xs" wrap="nowrap">
          <ThemeIcon size={30} radius="xl" variant="light">
            <Text fw={700} fz="xs">
              {String(index + 1).padStart(2, '0')}
            </Text>
          </ThemeIcon>
          <ThemeIcon size={30} radius="md" variant="light">
            <Icon size={15} />
          </ThemeIcon>
          <Text fw={700}>{item.title}</Text>
        </Group>
        <Text c="dimmed" fz="sm">
          {item.description}
        </Text>
      </Stack>
    </Paper>
  );
};
