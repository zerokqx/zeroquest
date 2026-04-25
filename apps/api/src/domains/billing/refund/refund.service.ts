import { PaymentRepository } from '@/domains/billing/payment/payment.repository';
import { WalletService } from '@/domains/billing/wallet/wallet.service';
import { YookassaService } from '@/domains/billing/yookassa/yookassa.service';
import { fromPenny } from '@zeroquest/converters';
import { Prisma, PrismaService } from '@zeroquest/db';
import type { AuthServiceTypes } from '@zeroquest/types';
import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateRefundDto } from './dto/create-refund.dto';
import { RefundRepository } from './refund.repository';

@Injectable()
export class RefundService {
  private readonly statuses = {
    APPROVE: 'APPROVE',
    REJECTED: 'REJECTED',
  } as const;

  constructor(
    private readonly prisma: PrismaService,
    private readonly refundRepository: RefundRepository,
    private readonly paymentRepository: PaymentRepository,
    private readonly walletService: WalletService,
    private readonly yookassaService: YookassaService,
  ) {}

  async create(
    createRefundDto: CreateRefundDto,
    payload: AuthServiceTypes.JwtPayload,
  ) {
    const payment = await this.paymentRepository.findOneByIdAndUserId(
      createRefundDto.paymentId,
      payload.sub,
    );

    if (!payment) {
      throw new NotFoundException('Платёж не найден.');
    }

    await this.walletService.heldMoney({
      userId: payload.sub,
      amount: payment.value,
    });

    try {
      return await this.refundRepository.create({
        payment: {
          connect: { id: createRefundDto.paymentId },
        },
      });
    } catch (error) {
      await this.walletService.unheldMoney({
        userId: payload.sub,
        amount: payment.value,
      });
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException(
          'Заявка на возврат для этого платежа уже существует.',
        );
      }
      throw error;
    }
  }

  findAll() {
    return this.refundRepository.findAll();
  }

  async approve(id: number, idempotenceKey?: string) {
    const refund = await this.prisma.refund.findUnique({
      where: {
        id,
      },
      include: {
        payment: true,
      },
    });

    if (!refund) {
      throw new NotFoundException('Заявка на возврат не найдена.');
    }

    if (refund.status === this.statuses.REJECTED) {
      throw new BadRequestException(
        'Нельзя подтвердить заявку со статусом REJECTED.',
      );
    }

    if (refund.status === this.statuses.APPROVE) {
      return refund;
    }

    const providerResponse = await this.yookassaService.refundPayment(
      {
        paymentId: refund.payment.providerPaymentId,
        amount: {
          currency: refund.payment.currency,
          value: fromPenny(refund.payment.value),
        },
      },
      idempotenceKey,
    );

    const updatedRefund = await this.refundRepository.updateStatusById(
      id,
      this.statuses.APPROVE,
    );

    return {
      refund: updatedRefund,
      providerRefund: providerResponse.data,
    };
  }

  async reject(id: number) {
    const refund = await this.refundRepository.findById(id);

    if (!refund) {
      throw new NotFoundException('Заявка на возврат не найдена.');
    }

    if (refund.status === this.statuses.APPROVE) {
      throw new BadRequestException(
        'Нельзя отклонить заявку со статусом APPROVE.',
      );
    }

    if (refund.status === this.statuses.REJECTED) {
      return refund;
    }

    return this.refundRepository.updateStatusById(id, this.statuses.REJECTED);
  }
}
