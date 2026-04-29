import { SimpleGrid, Stack } from '@mantine/core';
import { PromoItemCard, SectionHeader } from '../components';
import { purchaseReasons } from '../model/content';
import { MotionSurfaceCard } from '../components/surface-card';

export const PurchaseReasonsSection = () => {
  return (
    <MotionSurfaceCard
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Stack gap="md">
        <SectionHeader
          badge="Почему это выгодно"
          title="Покупка VPN окупается с первого дня использования"
          description="Три ключевые причины, из-за которых подключение дает быстрый и понятный результат."
        />

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="md" verticalSpacing="md">
          {purchaseReasons.map((item) => (
            <PromoItemCard key={item.title} item={item} />
          ))}
        </SimpleGrid>
      </Stack>
    </MotionSurfaceCard>
  );
};
