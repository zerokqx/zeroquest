import { Subscribe, useGetAllSubscribes } from '@/entites/subscribe';
import { UndefinedSvgCat } from '@/shared/ui/svg-cat';
import {
  Anchor,
  Card,
  Center,
  Group,
  SimpleGrid,
  Stack,
  Text,
} from '@mantine/core';
import { Ban } from 'lucide-react';
import { motion } from 'motion/react';
const MotionSubscribe = motion.create(Subscribe);

type SubscribeListProps = Stack.Props;
export const SubscribeList = (props: SubscribeListProps) => {
  const { data: subscribes } = useGetAllSubscribes();
  const isEmpty = !subscribes || subscribes.length === 0;

  return (
    <Stack bd={'1px solid gray.3'} bdrs={'xl'} p={'md'} w="100%" {...props}>
      {isEmpty && (
        <Card withBorder radius="xl" p="lg" bg="gray.0">
          <SimpleGrid
            cols={{ base: 1, md: 2 }}
            spacing="lg"
            verticalSpacing="md"
          >
            <Stack justify="center" gap="xs">
              <Group gap="xs">
                <Ban size={16} />
                <Text fw={700}>Подписок пока нет</Text>
              </Group>
              <Text c="dimmed">
                Купите первый тариф в магазине и он сразу появится в этом
                разделе.
              </Text>
              <Anchor href="/magazine" w="fit-content">
                Перейти в магазин
              </Anchor>
            </Stack>

            <Center>
              <div
                style={{
                  width: '100%',
                  maxWidth: 280,
                  opacity: 0.95,
                }}
              >
                <UndefinedSvgCat />
              </div>
            </Center>
          </SimpleGrid>
        </Card>
      )}
      {subscribes?.map((subscribe, index) => (
        <motion.div
          viewport={{once:true}}
          key={subscribe.id}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
        >
          <Subscribe data={subscribe} />
        </motion.div>
      ))}
    </Stack>
  );
};
