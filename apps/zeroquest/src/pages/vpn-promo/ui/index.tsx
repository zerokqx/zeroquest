import { useIsAuth } from '@/entites/user/model';
import { Container, Stack } from '@mantine/core';
import {
  AfterPurchaseSection,
  BenefitsSection,
  FaqSection,
  FinalCtaSection,
  HeroSection,
  PurchaseReasonsSection,
} from './sections';

export const VpnPromoPage = () => {
  const isAuth = useIsAuth();

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
