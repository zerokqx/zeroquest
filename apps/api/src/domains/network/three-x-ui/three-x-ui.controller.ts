import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ThreeXUiService } from './three-x-ui.service';
import { XuiClient } from './dto/three-x-ui-client.dto';
import {
  ApiBody,
  ApiCookieAuth,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
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
@Controller('three-x-ui/inbounds')
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
  @Post(':inboundId/clients')
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
  async addClient(
    @Param('inboundId', ParseIntPipe) inboundId: number,
    @Body() body: XuiClient,
  ) {
    return this.threeXUiService.addClient(inboundId, { clients: [body] });
  }

  @LogAccessToRoute()
  @ApiRoleOnly('ADMIN')
  @Post(':inboundId/clients/:email/traffic/reset')
  @ApiOperation({
    summary: 'Сбросить трафик клиента',
    description: 'Сбрасывает трафик клиента в конкретном inbound по email.',
  })
  @ApiParam({
    name: 'inboundId',
    type: Number,
    description: 'Идентификатор inbound в 3x-ui.',
  })
  @ApiParam({
    name: 'email',
    type: String,
    description: 'Email/label клиента в 3x-ui.',
  })
  @ApiOkResponse({
    description: 'Трафик клиента успешно сброшен.',
  })
  resetClientTraffic(
    @Param('inboundId', ParseIntPipe) inboundId: number,
    @Param('email') email: string,
  ) {
    return this.threeXUiService.resetClientTraffic(inboundId, email);
  }

  @LogAccessToRoute()
  @ApiRoleOnly('ADMIN')
  @Delete(':inboundId/clients/:uuid')
  @ApiOperation({
    summary: 'Удалить клиента',
    description: 'Удаляет клиента из inbound в 3x-ui по UUID.',
  })
  @ApiParam({
    name: 'inboundId',
    type: Number,
    description: 'Идентификатор inbound в 3x-ui.',
  })
  @ApiParam({
    name: 'uuid',
    type: String,
    description: 'UUID клиента в 3x-ui.',
  })
  @ApiOkResponse({
    description: 'Клиент успешно удалён из inbound.',
  })
  deleteClient(
    @Param('inboundId', ParseIntPipe) inboundId: number,
    @Param('uuid') uuid: string,
  ) {
    return this.threeXUiService.deleteClient(inboundId, uuid);
  }
}
