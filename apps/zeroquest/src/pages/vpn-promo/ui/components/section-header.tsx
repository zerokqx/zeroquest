import { Badge, Stack, Text, Title } from '@mantine/core';

type SectionHeaderProps = {
  badge: string;
  title: string;
  description: string;
};

export const SectionHeader = ({ badge, title, description }: SectionHeaderProps) => {
  return (
    <Stack gap={4}>
      <Badge variant="light" w="fit-content">
        {badge}
      </Badge>
      <Title order={3} style={{ lineHeight: 1.1 }}>
        {title}
      </Title>
      <Text c="dimmed">{description}</Text>
    </Stack>
  );
};
