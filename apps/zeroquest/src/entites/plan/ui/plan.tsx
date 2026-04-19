import { capitalize, upperCase } from 'lodash';
import styles from './plan.module.css';
import { getDiscountedPrice, toPercent } from '@/shared/lib/pricing';
import {
  Badge,
  Button,
  Group,
  List,
  rem,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { PlanEntity } from '@/shared/api/orval/base-api/base-api.schemas';
import { Check, ShoppingCart } from 'lucide-react';
import { MouseEvent } from 'react';

interface PlanProps {
  data: PlanEntity;
  onButtonClck?: (e: MouseEvent<HTMLButtonElement>, data: PlanEntity) => void;
}

export const Plan = ({ data, onButtonClck }: PlanProps) => {
  const isSpecial = data.isSpecial;
  const percentDiscounted = toPercent(data.discountedPercent as unknown);
  const discountedPrice = getDiscountedPrice(data.price, percentDiscounted);
  return (
    <Stack
      className={styles.plan}
      data-is-special={isSpecial.toString()}
      miw={rem(260)}
      bdrs={'lg'}
      p={'0'}
      style={{
        flex: '1 1 320px',
        overflow: 'clip',
      }}
      bd={`${isSpecial ? '2px' : '1px'} solid ${isSpecial ? 'violet' : 'gray'}`}
    >
      {isSpecial && (
        <Group bg={'violet'} justify="center">
          <Text size="md" c={'white'}>
            {upperCase('Лучшие предложение')}
          </Text>
        </Group>
      )}
      <Stack p={'md'}>
        <Group justify="space-between">
          <Title size={'xl'} c={'violet.9'}>
            {capitalize(data.name)}
          </Title>
          {percentDiscounted !== 0 && (
            <Badge variant='light'>Скидка {Math.round(percentDiscounted)}%</Badge>
          )}
        </Group>
        <Stack gap={'0'}>
          {percentDiscounted > 0 && (
            <Text size="sm" c="dimmed" td="line-through">
              {data.price}₽
            </Text>
          )}
          <Text size="xl" c={'violet.9'}>
            {discountedPrice}₽
            <Text span size="md" c={'dimmed'}>
              {' '}
              /{data.duratationDays} Дней
            </Text>
          </Text>
        </Stack>
        <Button
          bdrs={'xl'}
          leftSection={isSpecial && <ShoppingCart />}
          onClick={(e) => {
            onButtonClck?.(e, data);
          }}
          variant={isSpecial ? 'filled' : 'outline'}
        >
          Купить {data.name}
        </Button>
        {data.description && <Text c='dimmed'>{data.description}</Text>}

        <List m={0} p={0}>
          {data.features?.split(',').map((pluse) => (
            <List.Item
              icon={
                <ThemeIcon color="green" variant="transparent">
                  <Check />
                </ThemeIcon>
              }
            >
              {pluse}
            </List.Item>
          ))}
        </List>
      </Stack>
    </Stack>
  );
};
