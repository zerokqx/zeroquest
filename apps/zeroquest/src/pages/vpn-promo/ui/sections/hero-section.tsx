import { Badge, Paper, Stack, Text, Title } from '@mantine/core';
import { PromoActionButtons } from '../components';
import { motion } from 'motion/react';

type HeroSectionProps = {
  isAuth: boolean;
};

export const HeroSection = ({ isAuth }: HeroSectionProps) => {
  return (
    <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      <Paper withBorder radius="xl" p={{ base: 'md', md: 'xl' }}>
        <Stack gap="sm">
          <Badge variant="light" w="fit-content">
            ZeroQuest VPN
          </Badge>

          <Title
            order={1}
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              maxWidth: 820,
            }}
          >
            Быстрый и защищенный VPN для работы, стриминга и ежедневного
            серфинга
          </Title>

          <Text c="dimmed" maw={760}>
            Подключайтесь за пару минут: пополните баланс, купите тариф и
            импортируйте ссылку конфигурации в Happ или V2Ray.
          </Text>

          <PromoActionButtons
            isAuth={isAuth}
            authLabel="Выбрать тариф"
            guestLabel="Подключить VPN сейчас"
          />
        </Stack>
      </Paper>
    </motion.div>
  );
};
