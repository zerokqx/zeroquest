import { SimpleGrid, Stack } from '@mantine/core';
import {
  NumberedPromoItemCard,
  SectionHeader,
  SurfaceCard,
} from '../components';
import { afterPurchaseSteps } from '../model/content';
import { motion } from 'motion/react';

export const AfterPurchaseSection = () => {
  return (
    <SurfaceCard>
      <Stack gap="md">
        <SectionHeader
          badge="Сразу после оплаты"
          title="Что вы получаете после покупки"
          description="Весь путь от оплаты до защищенного подключения занимает всего несколько минут."
        />

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md" verticalSpacing="md">
          {afterPurchaseSteps.map((item, index) => (
            <motion.div
              key={index}
              initial={{opacity:0, x:100}}
              whileInView={{opacity:1, x:0}}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.45,
                delay: index * 0.12,
                ease: 'easeOut',
              }}
            >
              <NumberedPromoItemCard
                key={item.title}
                item={item}
                index={index}
              />
            </motion.div>
          ))}
        </SimpleGrid>
      </Stack>
    </SurfaceCard>
  );
};
