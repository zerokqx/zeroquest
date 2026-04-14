import { Body, Controller, Get, Post } from '@nestjs/common';
import { ThreeXUiService } from './three-x-ui.service';
import { XuiClient } from './dto/three-x-ui-client.dto';
import {
  ApiBody,
  ApiCookieAuth,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import {
  ApiRoleOnly,
  LogAccessToRoute,
  Role,
} from '@zeroquest/nest-shared';

@ApiTags('Three X UI')
@ApiCookieAuth('zeroquestAccess')
@Role('ADMIN')
@Controller('three-x-ui')
export class ThreeXUiController {
  constructor(private threeXUiService: ThreeXUiService) {}

  @LogAccessToRoute()
  @ApiRoleOnly('ADMIN')
  @Get()
  @ApiOperation({
    summary: 'Получить inbound из 3x-ui',
    description: 'Запрашивает список inbound из внешней x-ui панели.',
  })
  @ApiOkResponse({
    description: 'Список inbound из 3x-ui успешно получен.',
  })
  @ApiForbiddenResponse({
    description: 'Доступ разрешён только ADMIN.',
  })
  async getInbounds() {
    return this.threeXUiService.getInbounds();
  }

  @LogAccessToRoute()
  @ApiRoleOnly('ADMIN')
  @ApiCookieAuth('zeroquestAccess')
  @Post()
  @ApiOperation({
    summary: 'Добавить клиента в 3x-ui',
    description: 'Создаёт клиента во внешней x-ui панели.',
  })
  @ApiBody({
    type: XuiClient,
    description: 'Данные клиента для отправки в 3x-ui.',
  })
  @ApiOkResponse({
    description: 'Клиент успешно добавлен в 3x-ui.',
  })
  async addClient(@Body() body: XuiClient) {
    return this.threeXUiService.addClient(1, { clients: [body] });
  }
}
