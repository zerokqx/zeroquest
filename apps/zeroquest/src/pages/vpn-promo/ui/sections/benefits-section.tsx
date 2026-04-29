import { SimpleGrid, Stack, Text, ThemeIcon } from '@mantine/core';
import { benefits } from '../model/content';
import { MotionSurfaceCard } from '../components/surface-card';

export const BenefitsSection = () => {
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, lg: 3 }}
      spacing="md"
      verticalSpacing="md"
    >
      {benefits.map((item, index) => {
        const Icon = item.icon;

        return (
          <MotionSurfaceCard
            key={item.title}
            p="lg"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.45,
              delay: index * 0.12,
              ease: 'easeOut',
            }}
          >
            <Stack gap="sm">
              <ThemeIcon size={38} radius="md" variant="light">
                <Icon size={18} />
              </ThemeIcon>

              <Text fw={700}>{item.title}</Text>

              <Text c="dimmed" fz="sm">
                {item.description}
              </Text>
            </Stack>
          </MotionSurfaceCard>
        );
      })}
    </SimpleGrid>
  );
};
