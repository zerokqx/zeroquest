import { Accordion, Stack, Text } from '@mantine/core';
import { SurfaceCard } from '../components';
import { faqItems } from '../model/content';
import { motion } from 'motion/react';

export const FaqSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{once:true}}
    >
      <SurfaceCard>
        <Stack gap="xs">
          <Text fw={700}>Частые вопросы перед покупкой</Text>
          <Accordion variant="separated" radius="md">
            {faqItems.map((item) => (
              <Accordion.Item key={item.question} value={item.question}>
                <Accordion.Control>{item.question}</Accordion.Control>
                <Accordion.Panel>{item.answer}</Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </Stack>
      </SurfaceCard>
    </motion.div>
  );
};
