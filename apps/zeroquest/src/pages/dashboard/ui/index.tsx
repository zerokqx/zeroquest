import { Profile } from '@/entites/user';
import { WalletCard } from '@/entites/wallet';
import { SubscribeList } from '@/widgets/subscribe/ui/subscibe-list';
import { SimpleGrid } from '@mantine/core';

export const Dashboard = () => {
  return (
    <SimpleGrid
      cols={{ base: 1, md: 2 }}
      w="100%"
      verticalSpacing="md"
      spacing="md"
    >
      <WalletCard />
      <Profile />
      <SubscribeList />
    </SimpleGrid>
  );
};
