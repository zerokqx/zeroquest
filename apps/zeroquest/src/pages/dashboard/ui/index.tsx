import { Profile } from '@/entites/user';
import { WalletCard } from '@/entites/wallet';
import { SubscribeList } from '@/widgets/subscribe/ui/subscibe-list';
import { SimpleGrid } from '@mantine/core';
import { motion } from 'motion/react';

export const Dashboard = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -100,
      }}
      animate={{ opacity: 1, y: 0 }}
    >
      <SimpleGrid
        cols={{ base: 1, md: 2 }}
        w="100%"
        verticalSpacing="md"
        spacing="md"
      >
        <WalletCard h={'100%'} />
        <Profile />
        <SubscribeList />
      </SimpleGrid>
    </motion.div>
  );
};
