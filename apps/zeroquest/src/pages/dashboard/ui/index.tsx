import { Profile } from '@/entites/user';
import { WalletCard } from '@/entites/wallet';
import { SubscribeList } from '@/widgets/subscribe/ui/subscibe-list';
import { SimpleGrid } from '@mantine/core';
import { motion } from 'motion/react';

export const Dashboard = () => {
  return (
    <SimpleGrid
      cols={{ base: 1, md: 2 }}
      w="100%"
      verticalSpacing="md"
      spacing="md"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <WalletCard h={'100%'} />
      </motion.div>
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Profile />
      </motion.div>
      <motion.div
        initial={{ y: -70, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <SubscribeList />
      </motion.div>
    </SimpleGrid>
  );
};
