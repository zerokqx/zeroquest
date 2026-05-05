import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { UserRole } from '@zeroquest/db';
import type { Response } from 'express';
import {
  ApiBody,
  ApiCookieAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ReactAdminSimpleRestQueryDto, Role } from '@zeroquest/nest-shared';
import {
  extractIdsFromSimpleRestFilter,
  setSimpleRestListHeaders,
} from '@/common/lib/react-admin-simple-rest';
import { PlanService } from './plan.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { PlanEntity } from './entities/plan.entity';

const toIntIds = (ids: string[]) =>
  ids
    .map((id) => Number(id))
    .filter((id) => Number.isInteger(id) && id >= 0);

@ApiTags('Plan Admin')
@ApiCookieAuth('zeroquestAccess')
@Role(UserRole.ADMIN)
@Controller('admin/plans')
export class PlanAdminController {
  constructor(private readonly planService: PlanService) {}

  @Post()
  @ApiOperation({
    summary: 'Создать план',
    description: 'Создаёт тарифный план. Доступно только ADMIN.',
  })
  @ApiBody({
    type: CreatePlanDto,
    description: 'Данные для создания тарифного плана.',
  })
  @ApiOkResponse({ type: PlanEntity })
  async create(@Body() createPlanDto: CreatePlanDto) {
    const data = await this.planService.create(createPlanDto);
    return new PlanEntity(data);
  }

  @Get()
  @ApiOperation({
    summary: 'Получить список планов',
    description:
      'Возвращает планы в формате, совместимом с React Admin: list и getMany.',
  })
  @ApiOkResponse({ type: PlanEntity, isArray: true })
  async findAll(
    @Query() query: ReactAdminSimpleRestQueryDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const ids = toIntIds(extractIdsFromSimpleRestFilter(query.filter));
    if (ids.length > 0) {
      const data = await this.planService.findManyByIds(ids);
      return data.map((plan) => new PlanEntity(plan));
    }

    const { data, total } = await this.planService.findAllForAdmin({
      skip: query.skip,
      take: query.take,
      sort: query.sortField,
      order: query.sortOrder,
    });

    setSimpleRestListHeaders({
      response: res,
      resource: 'plans',
      skip: query.skip,
      dataLength: data.length,
      total,
    });

    return data.map((plan) => new PlanEntity(plan));
  }

  @Get(':id')
  @ApiOkResponse({ type: PlanEntity })
  async findOne(@Param('id') id: string) {
    const data = await this.planService.findOne(Number(id));
    return data ? new PlanEntity(data) : null;
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Обновить план',
    description: 'Обновляет тарифный план. Доступно только ADMIN.',
  })
  @ApiBody({
    type: UpdatePlanDto,
    description: 'Поля плана для обновления.',
  })
  @ApiOkResponse({ type: PlanEntity })
  async update(@Param('id') id: string, @Body() updatePlanDto: UpdatePlanDto) {
    const data = await this.planService.update(Number(id), updatePlanDto);
    return new PlanEntity(data);
  }

  @Delete(':id')
  @ApiOkResponse({ type: PlanEntity })
  async remove(@Param('id') id: string) {
    const data = await this.planService.remove(Number(id));
    return new PlanEntity(data);
  }
}
