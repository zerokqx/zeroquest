import { BillingService } from './billing.service';
import { SubscribeStatus } from '@zeroquest/db';
import { WALLET_RESPONSE_TYPE } from '@zeroquest/types';

describe('BillingService', () => {
  let service: BillingService;

  const prisma = {
    subscribe: {
      findMany: jest.fn(),
      update: jest.fn(),
    },
  };

  const threeXUiService = {
    updateClient: jest.fn(),
  };

  const walletService = {
    debit: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    service = new BillingService(
      prisma as never,
      threeXUiService as never,
      walletService as never,
    );
  });

  it('обновляет nextPaymentDate/expiresAt и клиента 3x-ui после успешного списания', async () => {
    prisma.subscribe.findMany.mockResolvedValue([
      {
        id: 'sub_1',
        vlessClientId: 'vless_1',
        nextPaymentDate: new Date('2026-04-16T00:00:00.000Z'),
        status: SubscribeStatus.ACTIVE,
        email: 'test@example.com',
        plan: {
          id: 10,
          price: 500,
          totalGb: 30,
          duratationDays: 30,
        },
        user: {
          id: 'user_1',
          login: 'test',
        },
      },
    ]);
    walletService.debit.mockResolvedValue({
      ok: true,
      type: WALLET_RESPONSE_TYPE.SUCCESS,
    });
    prisma.subscribe.update.mockResolvedValue({});
    threeXUiService.updateClient.mockResolvedValue({});

    await service.debitMoneyForSubscribtion();

    expect(walletService.debit).toHaveBeenCalledWith({
      userId: 'user_1',
      amount: 50000,
    });

    expect(prisma.subscribe.update).toHaveBeenCalledWith({
      where: { id: 'sub_1' },
      data: {
        nextPaymentDate: expect.any(Date),
        expiresAt: expect.any(Date),
      },
    });

    expect(threeXUiService.updateClient).toHaveBeenCalledWith('vless_1', {
      totalGb: 30,
      expiryTime: expect.any(Number),
    });
  });

  it('ставит подписку в STOPPED и отключает клиента, если списание неуспешно', async () => {
    prisma.subscribe.findMany.mockResolvedValue([
      {
        id: 'sub_2',
        vlessClientId: 'vless_2',
        nextPaymentDate: new Date('2026-04-16T00:00:00.000Z'),
        status: SubscribeStatus.ACTIVE,
        email: 'test2@example.com',
        plan: {
          id: 11,
          price: 700,
          totalGb: 100,
          duratationDays: 30,
        },
        user: {
          id: 'user_2',
          login: 'test2',
        },
      },
    ]);
    walletService.debit.mockResolvedValue({
      ok: false,
      type: WALLET_RESPONSE_TYPE.NOT_ENOUGH_FUNDS,
    });
    prisma.subscribe.update.mockResolvedValue({});
    threeXUiService.updateClient.mockResolvedValue({});

    await service.debitMoneyForSubscribtion();

    expect(prisma.subscribe.update).toHaveBeenCalledWith({
      where: { id: 'sub_2' },
      data: { status: SubscribeStatus.STOPPED },
    });

    expect(threeXUiService.updateClient).toHaveBeenCalledWith('vless_2', {
      enable: false,
    });

    expect(threeXUiService.updateClient).not.toHaveBeenCalledWith(
      'vless_2',
      expect.objectContaining({ totalGb: expect.any(Number) }),
    );
  });
});
