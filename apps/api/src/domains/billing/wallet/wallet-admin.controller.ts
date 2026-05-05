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
import { WalletService } from './wallet.service';
import { WalletEntity } from './entities/wallet.entity';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';

@ApiTags('Wallet Admin')
@ApiCookieAuth('zeroquestAccess')
@Role(UserRole.ADMIN)
@Controller('admin/wallets')
export class WalletAdminController {
  constructor(private readonly walletService: WalletService) {}

  @Post()
  @ApiOperation({
    summary: 'Создать кошелёк',
    description: 'Создаёт кошелёк. Доступно только ADMIN.',
  })
  @ApiBody({
    type: CreateWalletDto,
    description: 'Поля для создания кошелька.',
  })
  @ApiOkResponse({ type: WalletEntity })
  async create(@Body() createWalletDto: CreateWalletDto) {
    const data = await this.walletService.create(createWalletDto);
    return new WalletEntity(data);
  }

  @Get(':id')
  @ApiOkResponse({ type: WalletEntity })
  async findOne(@Param('id') id: string) {
    const data = await this.walletService.findOne(id);
    return new WalletEntity(data);
  }

  @Get()
  @ApiOperation({
    summary: 'Получить список кошельков',
    description:
      'Возвращает кошельки в формате, совместимом с React Admin: list и getMany.',
  })
  @ApiOkResponse({ type: WalletEntity, isArray: true })
  async findAll(
    @Query() query: ReactAdminSimpleRestQueryDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const ids = extractIdsFromSimpleRestFilter(query.filter);
    if (ids.length > 0) {
      const data = await this.walletService.findManyByIds(ids);
      return data.map((wallet) => new WalletEntity(wallet));
    }

    const { data, total } = await this.walletService.findAll({
      skip: query.skip,
      take: query.take,
      sort: query.sortField,
      order: query.sortOrder,
    });

    setSimpleRestListHeaders({
      response: res,
      resource: 'wallets',
      skip: query.skip,
      dataLength: data.length,
      total,
    });

    return data.map((wallet) => new WalletEntity(wallet));
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Обновить кошелёк',
    description: 'Обновляет кошелёк по id. Доступно только ADMIN.',
  })
  @ApiBody({
    type: UpdateWalletDto,
    description: 'Поля кошелька для обновления.',
  })
  @ApiOkResponse({ type: WalletEntity })
  async update(@Param('id') id: string, @Body() updateWalletDto: UpdateWalletDto) {
    const data = await this.walletService.update(id, updateWalletDto);
    return new WalletEntity(data);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Удалить кошелёк',
    description: 'Удаляет кошелёк по id. Доступно только ADMIN.',
  })
  @ApiOkResponse({ type: WalletEntity })
  async remove(@Param('id') id: string) {
    const data = await this.walletService.remove(id);
    return new WalletEntity(data);
  }
}
