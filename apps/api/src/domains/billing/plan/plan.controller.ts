import {
  Controller,
  Get,
  Param,
} from '@nestjs/common';
import { PlanService } from './plan.service';
import {
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { Public } from '@zeroquest/nest-shared';
import { PlanEntity } from './entities/plan.entity';

@ApiTags('Plan')
@Controller('plans')
export class PlanController {
  constructor(private readonly planService: PlanService) {}

  @Get()
  @Public()
  @ApiOperation({
    summary: 'Получить список планов',
    description: 'Возвращает публичный список тарифных планов.',
  })
  @ApiOkResponse({
    description: 'Список планов успешно получен.',
    type: PlanEntity,
    isArray: true,
  })
  async findAll() {
    const data = await this.planService.findAll();
    return data.map((plan) => new PlanEntity(plan));
  }

  @Get(':id')
  @Public()
  @ApiOperation({
    summary: 'Получить план по id',
    description: 'Возвращает один тарифный план по идентификатору.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Идентификатор плана.',
  })
  @ApiOkResponse({
    description: 'План успешно найден.',
    type: PlanEntity,
  })
  async findOne(@Param('id') id: string) {
    const data = await this.planService.findOne(+id);
    return data ? new PlanEntity(data) : null;
  }
}
