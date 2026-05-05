import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsIn, IsInt, IsOptional, IsString, Min } from 'class-validator';

export class ReactAdminPaginationDto {
  @ApiPropertyOptional({ example: 0 })
  @Type(() => Number)
  @IsInt()
  @Min(0)
  _start = 0;

  @ApiPropertyOptional({ example: 10 })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  _end = 10;

  @ApiPropertyOptional({ example: 'id' })
  @IsOptional()
  @IsString()
  _sort?: string = 'id';

  @ApiPropertyOptional({ example: 'ASC', enum: ['ASC', 'DESC'] })
  @IsOptional()
  @IsIn(['ASC', 'DESC', 'asc', 'desc'])
  _order?: 'ASC' | 'DESC' | 'asc' | 'desc' = 'ASC';
}
