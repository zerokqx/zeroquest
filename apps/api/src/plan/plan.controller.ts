import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PlanService } from './plan.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCookieAuth,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { Public, Role } from '@zeroquest/nest-shared';
import { PlanEntity } from './entities/plan.entity';

@ApiTags('Plan')
@Controller('plans')
export class PlanController {
  constructor(private readonly planService: PlanService) {}

  @Post()
  @Role('ADMIN')
  @ApiCookieAuth('zeroquestAccess')
  @ApiOperation({
    summary: 'Создать план',
    description: 'Создаёт тарифный план. Доступно только ADMIN.',
  })
  @ApiBody({
    type: CreatePlanDto,
    description: 'Данные для создания тарифного плана.',
  })
  @ApiOkResponse({
    description: 'План успешно создан.',
    type: PlanEntity,
  })
  @ApiBadRequestResponse({
    description: 'Некорректные данные для создания плана.',
  })
  @ApiForbiddenResponse({
    description: 'Доступ разрешён только ADMIN.',
  })
  async create(@Body() createPlanDto: CreatePlanDto) {
    return this.planService.create(createPlanDto);
  }

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
    return this.planService.findAll();
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
    return this.planService.findOne(+id);
  }

  @ApiCookieAuth('zeroquestAccess')
  @Patch(':id')
  @Role('ADMIN')
  @ApiOperation({
    summary: 'Обновить план',
    description: 'Обновляет тарифный план. Доступно только ADMIN.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Идентификатор плана.',
  })
  @ApiBody({
    type: UpdatePlanDto,
    description: 'Поля плана для обновления.',
  })
  @ApiOkResponse({
    description: 'План успешно обновлён.',
    type: PlanEntity,
  })
  async update(@Param('id') id: string, @Body() updatePlanDto: UpdatePlanDto) {
    return this.planService.update(+id, updatePlanDto);
  }

  @Delete(':id')
  @Role('ADMIN')
  @ApiCookieAuth('zeroquestAccess')
  @ApiOperation({
    summary: 'Удалить план',
    description: 'Удаляет тарифный план. Доступно только ADMIN.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Идентификатор плана.',
  })
  @ApiOkResponse({
    description: 'План успешно удалён.',
    type: PlanEntity,
  })
  async remove(@Param('id') id: string) {
    return this.planService.remove(+id);
  }
}
