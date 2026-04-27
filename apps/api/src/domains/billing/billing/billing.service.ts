import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService, SubscribeStatus } from '@zeroquest/db';
import { toPenny } from '@zeroquest/converters';
import { ThreeXUiService } from '@/domains/network/three-x-ui/three-x-ui.service';
import { WalletService } from '@/domains/billing/wallet/wallet.service';

@Injectable()
export class BillingService {
  private readonly logger = new Logger(BillingService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly threeXUiService: ThreeXUiService,
    private readonly walletService: WalletService,
  ) {}

  @Cron(CronExpression.EVERY_1ST_DAY_OF_MONTH_AT_MIDNIGHT)
  async debitMoneyForSubscribtion() {
    const date = new Date();
    this.logger.verbose(
      `Крон биллинга запущен: statusFilter=${SubscribeStatus.ACTIVE}`,
    );

    const subscribes = await this.prisma.subscribe.findMany({
      where: {
        nextPaymentDate: {
          lte: date,
        },
        status: SubscribeStatus.ACTIVE,
      },
      select: {
        nextPaymentDate: true,
        email: true,
        vlessClientId: true,
        status: true,
        id: true,
        plan: true,
        user: {
          select: {
            login: true,
            id: true,
          },
        },
      },
    });

    this.logger.verbose(
      `Найдены подписки к списанию: count=${subscribes.length}`,
    );
    if (subscribes.length === 0) {
      this.logger.debug('Крон биллинга завершен: списывать нечего');
      return;
    }

    for (const {
      user,
      plan,
      id,
      nextPaymentDate,
      vlessClientId,
    } of subscribes) {
      try {
        const amount = toPenny(plan.price.toString());
        this.logger.debug(
          `Начато списание по подписке: subscribeId=${id}, userId=${user.id}, login=${user.login}, planId=${plan.id}, amountKopek=${amount}, dueAt=${nextPaymentDate}`,
        );

        const debitResponse = await this.walletService.debit({
          userId: user.id,
          amount,
        });

        this.logger.debug(
          `Результат списания из кошелька: subscribeId=${id}, userId=${user.id}, ok=${debitResponse.ok}, type=${debitResponse.type}`,
        );

        if (!debitResponse.ok) {
          this.logger.warn(
            `Списание не выполнено, подписка будет остановлена: subscribeId=${id}, userId=${user.id}, walletType=${debitResponse.type}`,
          );

          await Promise.all([
            this.prisma.subscribe.update({
              where: {
                id,
              },
              data: {
                status: SubscribeStatus.STOPPED,
              },
            }),
            this.threeXUiService.updateClient(vlessClientId, {
              enable: false,
            }),
          ]);
          this.logger.warn(
            `Подписка остановлена: subscribeId=${id}, userId=${user.id}`,
          );
          continue;
        }

        const expiryTime = new Date();
        expiryTime.setDate(expiryTime.getDate() + plan.duratationDays);

        await this.prisma.subscribe.update({
          where: {
            id,
          },
          data: {
            nextPaymentDate: expiryTime,
            expiresAt: expiryTime,
          },
        });

        await this.threeXUiService.updateClient(vlessClientId, {
          totalGb: plan.totalGb,
          expiryTime: expiryTime.getTime(),
        });
        this.logger.debug(
          `Клиент обновлен в 3x-ui: subscribeId=${id}, userId=${user.id}, totalGb=${plan.totalGb}`,
        );

        this.logger.log(
          `Списание успешно: subscribeId=${id}, userId=${user.id}, amountKopek=${amount}, login=${user.login}`,
        );
      } catch (error) {
        const trace = error instanceof Error ? error.stack : undefined;
        const message =
          error instanceof Error ? error.message : 'Unknown billing error';
        this.logger.error(
          `Ошибка обработки списания: subscribeId=${id}, userId=${user.id}, error=${message}`,
          trace,
        );
      }
    }

    this.logger.verbose(
      `Крон биллинга завершен: processed=${subscribes.length}`,
    );
  }



}
