import { Plan, useGetPlans } from '@/entites/plan';
import { BuyForm } from '@/features/buy-subscribe';
import { Center, Modal, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { useState } from 'react';

export const Magazine = () => {
  const [oppened, { close, toggle }] = useDisclosure();
  const [planId, setPlanId] = useState<null | number>(null);
  const { data: plans } = useGetPlans();
  const isMobile = useMediaQuery('(max-width: 48em)');

  return (
    <Center w="100%">
      <Stack w="min(1200px, 100%)" gap="lg">
        <Stack gap={4}>
          <Title order={2}>Магазин тарифов</Title>
          <Text c="dimmed">
            Выберите план и оформите подписку за пару кликов.
          </Text>
        </Stack>

        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 3 }}
          spacing="md"
          verticalSpacing="md"
        >
          {plans?.map((plan) => (
            <Plan
              key={plan.id}
              onButtonClck={() => {
                setPlanId(plan.id);
                toggle()
              }}
              data={plan}
            />
          ))}
        </SimpleGrid>
      </Stack>
      {planId && (
        <Modal opened={oppened} onClose={close} fullScreen={isMobile}>
          <BuyForm planId={planId} />
        </Modal>
      )}
    </Center>
  );
};
