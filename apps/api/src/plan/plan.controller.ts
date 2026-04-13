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
import { Role } from '@/common/role/role.decorator';
import { ApiCookieAuth, ApiParam } from '@nestjs/swagger';
import { Public } from '@/auth/auth.decorator';

@Controller('plan')
export class PlanController {
  constructor(private readonly planService: PlanService) {}


  @ApiParam({
    type: CreatePlanDto,
    name:"Создание плана"
  })
  @Post('internal/create')
  @Role('ADMIN')
  async create(@Body() createPlanDto: CreatePlanDto) {
    return this.planService.create(createPlanDto);
  }

  @Get()
  @Public()
  async findAll() {
    return this.planService.findAll();
  }

  @Get(':id')
  @Public()
  async findOne(@Param('id') id: string) {
    return this.planService.findOne(+id);
  }

  @ApiCookieAuth('zeroquestAccess')
  @Patch('internal/:id')
  @Role('ADMIN')
  async update(@Param('id') id: string, @Body() updatePlanDto: UpdatePlanDto) {
    return this.planService.update(+id, updatePlanDto);
  }

  @Delete('internal/:id')
  @Role('ADMIN')
  async remove(@Param('id') id: string) {
    return this.planService.remove(+id);
  }
}
