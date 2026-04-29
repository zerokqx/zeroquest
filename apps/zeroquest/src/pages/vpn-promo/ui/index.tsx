import { motion, useScroll, useTransform } from 'motion/react';
import { useIsAuth } from '@/entites/user/model';
import { Box, Center, Container, Stack, useMantineTheme } from '@mantine/core';
import { useRef } from 'react';
import {
  AfterPurchaseSection,
  BenefitsSection,
  FaqSection,
  FinalCtaSection,
  HeroSection,
  PurchaseReasonsSection,
} from './sections';

export const VpnPromoPage = () => {
  const theme = useMantineTheme()
  const isAuth = useIsAuth();
  const ref = useRef<HTMLParagraphElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <Container size="lg" w="100%" py="md" px={{ base: 'sm', sm: 'md' }}>
      <Stack gap="lg" pb="xl">
        <HeroSection isAuth={isAuth} />
        <BenefitsSection />
        <PurchaseReasonsSection />
        <AfterPurchaseSection />

        <FaqSection  />
        <FinalCtaSection isAuth={isAuth} />
      </Stack>
    </Container>
  );
};
