import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import { Plan, Prisma } from '@/generated/prisma/client';
import { PrismaService } from '@/prisma.service';
import { Inject, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class PlanRepository {
  private readonly logger = new Logger(PlanRepository.name);
  private readonly cacheTtlMs = 60_000;
  private readonly planListCacheKey = 'plan:list';

  constructor(
    private readonly prisma: PrismaService,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {}

  async create(data: Prisma.PlanCreateInput) {
    const plan = await this.prisma.plan.create({ data });
    await this.cacheManager.del(this.planListCacheKey);
    await this.cacheManager.del(this.planByIdCacheKey(plan.id));
    return plan;
  }

  async findMany() {
    const cached = await this.cacheManager.get<Plan[]>(this.planListCacheKey);
    if (cached) {
      this.logger.debug('Список планов взят из кеша');
      return cached;
    }

    const plans = await this.prisma.plan.findMany();
    await this.cacheManager.set(this.planListCacheKey, plans, this.cacheTtlMs);
    return plans;
  }

  async findById(id: number) {
    this.logger.debug(`Поиск плана: planId=${id}`);
    const cacheKey = this.planByIdCacheKey(id);
    const cached = await this.cacheManager.get<Plan | null>(cacheKey);
    if (cached !== undefined) {
      this.logger.debug(`План взят из кеша: planId=${id}`);
      return cached;
    }

    const plan = await this.prisma.plan.findUnique({ where: { id } });
    await this.cacheManager.set(cacheKey, plan, this.cacheTtlMs);
    return plan;
  }

  async updateById(id: number, data: Prisma.PlanUpdateInput) {
    const plan = await this.prisma.plan.update({ where: { id }, data });
    await this.cacheManager.del(this.planListCacheKey);
    await this.cacheManager.del(this.planByIdCacheKey(id));
    return plan;
  }

  async deleteById(id: number) {
    const plan = await this.prisma.plan.delete({ where: { id } });
    await this.cacheManager.del(this.planListCacheKey);
    await this.cacheManager.del(this.planByIdCacheKey(id));
    return plan;
  }

  private planByIdCacheKey(id: number) {
    return `plan:${id}`;
  }
}
