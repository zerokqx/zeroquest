import { useGetActualPolicy } from '@/entites/policy/api/get-actual-policy';
import { useGetPlan } from '@/entites/plan';
import { useGetMyProfile } from '@/entites/user';
import { NextBalanceCard } from '@/entites/wallet/ui/next-balance-card';
import {
  PlanEntity,
  PolicyEntityType,
} from '@/shared/api/orval/base-api/base-api.schemas';
import { toPenny } from '@zeroquest/converters';
import {
  Alert,
  Anchor,
  Box,
  Button,
  Center,
  Checkbox,
  Group,
  Loader,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
  Transition,
} from '@mantine/core';
import { useNavigate } from '@tanstack/react-router';
import { AlertCircle, Check } from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { useBuySubscribe } from '../api/buy-subscribe';
import { getBuySubscribeErrorMessage } from '../lib/get-buy-subscribe-error-message';

interface BuyFormState {
  iAcceptThePolicy: boolean;
  deviceName: string;
  iAgreeWithTheFollowingBalance: boolean;
}
interface BuyFormProps {
  planId: PlanEntity['id'];
}

export const BuyForm = ({ planId }: BuyFormProps) => {
  const [submitError, setSubmitError] = useState('');
  const { mutateAsync: buy, isPending, isSuccess, reset } = useBuySubscribe();
  const navigate = useNavigate();
  const { data: plan, isLoading } = useGetPlan(planId);
  const { data: profile, isLoading: isProfileLoading } = useGetMyProfile();
  const { data: actualTermsPolicy, isLoading: isTermsPolicyLoading } =
    useGetActualPolicy(PolicyEntityType.TERMS);

  const amountToSubtract = toPenny(String(plan?.price ?? 0));
  const formattedPrice = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 2,
  }).format(plan?.price ?? 0);

  const { register, formState, handleSubmit } = useForm<BuyFormState>({
    mode: 'onChange',
    defaultValues: {
      iAcceptThePolicy: false,
      iAgreeWithTheFollowingBalance: false,
      deviceName: '',
    },
  });
  const termsVersion = actualTermsPolicy?.version;
  const isTermsUnavailable = !isTermsPolicyLoading && !termsVersion;
  const availableBalance = profile
    ? profile.wallet.balance - profile.wallet.held
    : null;
  const isNotEnoughFunds =
    availableBalance !== null && availableBalance < amountToSubtract;

  if (isLoading || isTermsPolicyLoading || isProfileLoading)
    return (
      <Center>
        <Loader />
      </Center>
    );
  if (!plan) return <p>pdawdwd</p>;

  const submit: SubmitHandler<BuyFormState> = async ({ deviceName }) => {
    setSubmitError('');

    if (!termsVersion) {
      return;
    }

    if (isNotEnoughFunds) {
      setSubmitError('Недостаточно средств на балансе для покупки тарифа.');
      return;
    }

    try {
      await buy({
        data: {
          deviceName: deviceName.trim(),
          planId: plan.id,
          policy: [
            {
              type: PolicyEntityType.TERMS,
              version: termsVersion,
            },
          ],
        },
      });
    } catch (error) {
      setSubmitError(getBuySubscribeErrorMessage(error));
    }
  };

  return (
    <Box pos="relative">
      <form onSubmit={handleSubmit(submit)}>
        <Stack style={{ opacity: isSuccess ? 0.25 : 1 }}>
          {submitError && (
            <Alert color="red" icon={<AlertCircle size={16} />}>
              {submitError}
            </Alert>
          )}
          <NextBalanceCard amount={amountToSubtract} />
          <TextInput
            withAsterisk
            label={'Название подписки'}
            placeholder="Iphone 16 Pro Max"
            error={formState.errors.deviceName?.message}
            disabled={isSuccess}
            {...register('deviceName', {
              required: 'Введите название подписки',
              minLength: {
                value: 4,
                message: 'Минимум 4 символа',
              },
            })}
          />
          <Checkbox
            label={
              <Text size="sm">
                Я принимаю{' '}
                <Anchor
                  href="/policy?type=TERMS"
                  target="_blank"
                  rel="noreferrer"
                >
                  Пользовательское соглашение
                </Anchor>
              </Text>
            }
            error={formState.errors.iAcceptThePolicy?.message}
            disabled={isSuccess || isTermsUnavailable}
            {...register('iAcceptThePolicy', {
              required: 'Нужно принять Пользовательское соглашение',
            })}
          />
          <Checkbox
            label={`Даю согласие на списание стоимости тарифа в размере ${formattedPrice} с баланса аккаунта.`}
            description="Подтверждаю корректность итогового баланса после списания и согласие на исполнение операции после отправки формы."
            error={formState.errors.iAgreeWithTheFollowingBalance?.message}
            disabled={isSuccess}
            {...register('iAgreeWithTheFollowingBalance', {
              required: 'Нужно подтвердить списание',
            })}
          />
          {isTermsUnavailable && (
            <Text c="red" size="sm">
              Не удалось получить актуальную версию условий.
            </Text>
          )}
          {isNotEnoughFunds && (
            <Text c="red" size="sm">
              Недостаточно средств на балансе для покупки тарифа.
            </Text>
          )}
          <Box ta={'right'}>
            <Button
              type="submit"
              loading={isPending || isTermsPolicyLoading}
              disabled={
                !formState.isValid ||
                isSuccess ||
                isTermsUnavailable ||
                isNotEnoughFunds
              }
            >
              Купить
            </Button>
          </Box>
        </Stack>
      </form>

      <Transition mounted={isSuccess} transition="slide-up" duration={250}>
        {(styles) => (
          <Box
            style={{
              ...styles,
              position: 'absolute',
              inset: 0,
              zIndex: 2,
              background: 'var(--mantine-color-body)',
              borderRadius: 'var(--mantine-radius-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'var(--mantine-spacing-md)',
            }}
          >
            <Stack align="center" gap="sm">
              <ThemeIcon size={56} radius="xl" color="green">
                <Check size={28} />
              </ThemeIcon>
              <Text fw={700}>Спасибо за покупку</Text>
              <Text c="dimmed" ta="center">
                Покупка прошла, вы можете перейти в домой или продолжить
                покупку.
              </Text>

              <Group>
                <Button onClick={() => navigate({ to: '/dashboard' })}>
                  Домой
                </Button>
                <Button variant="default" onClick={() => reset()}>
                  Продолжить покупку
                </Button>
              </Group>
              <Text ta={'center'} size="sm" c="dimmed">
                Если подписка не появилась подождите пару минут
              </Text>
            </Stack>
          </Box>
        )}
      </Transition>
    </Box>
  );
};
