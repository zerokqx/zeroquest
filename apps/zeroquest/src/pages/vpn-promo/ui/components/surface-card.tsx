import { Card } from '@mantine/core';
import { HTMLMotionProps, motion } from 'motion/react';

export const SurfaceCard = (props: Card.Props) => {
  return <Card withBorder radius="xl" p={{ base: 'md', md: 'lg' }} {...props} />;
};

export const MotionSurfaceCard = motion.create(
  SurfaceCard,
) as React.ComponentType<Card.Props & HTMLMotionProps<'div'>>;
