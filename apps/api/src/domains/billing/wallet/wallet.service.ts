import { Injectable, NotFoundException } from '@nestjs/common';
import { CreditWalletDto } from './dto/credit-wallet.dto';
import { DebitWalletDto } from './dto/debit-wallet.dto';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import {
  WalletCreditEvent,
  WalletDebitEvent,
  walletPaternsForProcessor,
} from '@zeroquest/types';
import { FindAllWalletsParams, WalletRepository } from './wallet.repository';
import { Prisma, Wallet } from '@zeroquest/db';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';

@Injectable()
export class WalletService {
  constructor(
    private readonly walletReposiory: WalletRepository,
    @InjectQueue('wallet') private readonly walletQueue: Queue,
  ) {}

  async creditWithQueue(data: CreditWalletDto) {
    return this.walletQueue.add(
      walletPaternsForProcessor.CREDIT,
      data as WalletCreditEvent,
    );
  }

  async debitWithQueue(data: DebitWalletDto) {
    return this.walletQueue.add(
      walletPaternsForProcessor.DEBIT,
      data as WalletDebitEvent,
    );
  }

  async credit({ userId, amount }: CreditWalletDto) {
    return this.walletReposiory.creditByUserId(userId, amount);
  }

  async debit({ userId, amount }: DebitWalletDto) {
    return this.walletReposiory.debitByUserId(userId, amount);
  }

  async debitFromHeld({ userId, amount }: DebitWalletDto) {
    return this.walletReposiory.debitFromHeldByUserId(userId, amount);
  }

  async heldMoney({ userId, amount }: DebitWalletDto) {
    return this.walletReposiory.heldMoney(userId, amount);
  }

  async unheldMoney({ userId, amount }: DebitWalletDto) {
    return this.walletReposiory.unheldMoney(userId, amount);
  }

  async giveBonus({ userId, amount }: { userId: string; amount: number }) {
    return this.walletReposiory.giveBonusByUserId(userId, amount);
  }

  create(createWalletDto: CreateWalletDto) {
    return this.walletReposiory.create({
      held: createWalletDto.held ?? 0,
      balance: createWalletDto.balance ?? 0,
    });
  }

  async findOne(walletId: Wallet['id']) {
    const data = await this.walletReposiory.findOneById(walletId);
    if (!data) throw new NotFoundException('Wallet not found');
    return data;
  }

  async findOneByUserId(walletId: Wallet['id'], userId: string) {
    const data = await this.walletReposiory.findOneByIdAndUserId(
      walletId,
      userId,
    );
    if (!data) throw new NotFoundException('Wallet not found');
    return data;
  }

  findAll(params: FindAllWalletsParams) {
    return this.walletReposiory.findAll(params);
  }

  findManyByIds(ids: Wallet['id'][]) {
    return this.walletReposiory.findManyByIds(ids);
  }

  async update(walletId: Wallet['id'], updateWalletDto: UpdateWalletDto) {
    try {
      return await this.walletReposiory.updateById(walletId, updateWalletDto);
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException('Wallet not found');
      }
      throw error;
    }
  }

  async remove(walletId: Wallet['id']) {
    try {
      return await this.walletReposiory.deleteById(walletId);
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException('Wallet not found');
      }
      throw error;
    }
  }
}
