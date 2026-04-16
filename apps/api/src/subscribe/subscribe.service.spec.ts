import { BadRequestException } from '@nestjs/common';
import { SubscribeStatus } from '@zeroquest/db';
import { WALLET_RESPONSE_TYPE } from '@zeroquest/types';
import { SubscribeService } from './subscribe.service';

describe('SubscribeService', () => {
  let service: SubscribeService;

  const subscribeRepository = {
    changeStatus: jest.fn(),
    changeNextPaymentDate: jest.fn(),
  };

  const walletService = {
    debit: jest.fn(),
    credit: jest.fn(),
  };

  const prisma = {
    subscribe: {
      findUniqueOrThrow: jest.fn(),
    },
  };

  const threeXUiService = {
    resetClientTraffic: jest.fn(),
    updateClient: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    service = new SubscribeService(
      subscribeRepository as never,
      walletService as never,
      prisma as never,
      threeXUiService as never,
    );
    prisma.subscribe.findUniqueOrThrow.mockResolvedValue({
      email: 'client@mail.test',
      vlessClientId: 'vless-client-1',
      plan: {
        id: 5,
        price: 500,
        duratationDays: 30,
        inbound: {
          inboundId: 6,
        },
      },
    });
  });

  it('успешно ресетит подписку после списания', async () => {
    walletService.debit.mockResolvedValue({
      ok: true,
      type: WALLET_RESPONSE_TYPE.SUCCESS,
    });
    subscribeRepository.changeStatus.mockResolvedValue({});
    subscribeRepository.changeNextPaymentDate.mockResolvedValue({});
    threeXUiService.resetClientTraffic.mockResolvedValue({});
    threeXUiService.updateClient.mockResolvedValue({});

    await service.resetSubscribtion('sub_1', 'user_1');

    expect(walletService.debit).toHaveBeenCalledWith({
      userId: 'user_1',
      amount: 50000,
    });
    expect(subscribeRepository.changeStatus).toHaveBeenCalledWith(
      'sub_1',
      SubscribeStatus.ACTIVE,
    );
    expect(subscribeRepository.changeNextPaymentDate).toHaveBeenCalledWith(
      'sub_1',
      expect.any(Date),
    );
    expect(threeXUiService.resetClientTraffic).toHaveBeenCalledWith(
      6,
      'client@mail.test',
    );
    expect(threeXUiService.updateClient).toHaveBeenCalledWith(
      'vless-client-1',
      expect.objectContaining({
        enable: true,
        expiryTime: expect.any(Number),
      }),
    );
  });

  it('кидает BadRequestException при неуспешном списании', async () => {
    walletService.debit.mockResolvedValue({
      ok: false,
      type: WALLET_RESPONSE_TYPE.NOT_ENOUGH_FUNDS,
    });

    await expect(service.resetSubscribtion('sub_1', 'user_1')).rejects.toThrow(
      BadRequestException,
    );

    expect(subscribeRepository.changeStatus).not.toHaveBeenCalled();
    expect(threeXUiService.updateClient).not.toHaveBeenCalled();
  });

  it('делает rollback credit, если внешние действия упали после debit', async () => {
    walletService.debit.mockResolvedValue({
      ok: true,
      type: WALLET_RESPONSE_TYPE.SUCCESS,
    });
    walletService.credit.mockResolvedValue({
      ok: true,
      type: WALLET_RESPONSE_TYPE.SUCCESS,
    });
    subscribeRepository.changeStatus.mockResolvedValue({});
    subscribeRepository.changeNextPaymentDate.mockResolvedValue({});
    threeXUiService.resetClientTraffic.mockRejectedValue(
      new Error('3x-ui error'),
    );

    await expect(service.resetSubscribtion('sub_1', 'user_1')).rejects.toThrow(
      '3x-ui error',
    );

    expect(walletService.credit).toHaveBeenCalledWith({
      userId: 'user_1',
      amount: 50000,
    });
  });
});
