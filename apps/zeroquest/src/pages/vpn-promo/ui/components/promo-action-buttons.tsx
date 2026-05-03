import { Button, Group } from '@mantine/core';
import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

type PromoActionButtonsProps = {
  isAuth: boolean;
  authLabel: string;
  guestLabel: string;
  secondaryButtonProps?: Button.Props;
};

export const PromoActionButtons = ({
  isAuth,
  authLabel,
  guestLabel,
  secondaryButtonProps,
}: PromoActionButtonsProps) => {
  return (
    <Group gap="sm">
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity }}
      >
        <Button
          renderRoot={(props) => <Link to="/sign-up" search={{ mode: 'sign-in' }} {...props}/>}
          size="md"
          radius="xl"
          rightSection={<ArrowRight size={16} />}
        >
          {isAuth ? authLabel : guestLabel}
        </Button>
      </motion.div>
      <Button
        component={Link}
        to="/manual"
        variant="light"
        size="md"
        radius="xl"
        {...secondaryButtonProps}
      >
        Смотреть инструкцию
      </Button>
    </Group>
  );
};
