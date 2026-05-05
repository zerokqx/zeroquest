import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';

type SortOrder = 'ASC' | 'DESC';
type SortTuple = [string, SortOrder];
type RangeTuple = [number, number];

const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const parseJson = <T>(value: unknown, fallback: T): T => {
  if (typeof value !== 'string' || value.trim() === '') return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
};

const toNonNegativeInt = (value: unknown, fallback: number) => {
  if (typeof value !== 'number' || !Number.isFinite(value)) return fallback;
  const normalized = Math.floor(value);
  return normalized >= 0 ? normalized : fallback;
};

const normalizeSort = (value: unknown): SortTuple => {
  const parsed = parseJson<[unknown, unknown]>(value, ['id', 'ASC']);
  const field = typeof parsed[0] === 'string' && parsed[0].trim() ? parsed[0] : 'id';
  const order: SortOrder = String(parsed[1]).toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
  return [field, order];
};

const normalizeRange = (value: unknown): RangeTuple => {
  const parsed = parseJson<[unknown, unknown]>(value, [0, 9]);
  const start = toNonNegativeInt(parsed[0], 0);
  const end = toNonNegativeInt(parsed[1], start + 9);
  return [start, end];
};

const normalizeFilter = (value: unknown): Record<string, unknown> => {
  const parsed = parseJson<unknown>(value, {});
  return isObject(parsed) ? parsed : {};
};

export class ReactAdminSimpleRestQueryDto {
  @ApiPropertyOptional({
    example: '["id","ASC"]',
    description: 'JSON-массив вида [field, order]',
  })
  @Transform(({ value }) => normalizeSort(value))
  sort: SortTuple = ['id', 'ASC'];

  @ApiPropertyOptional({
    example: '[0,9]',
    description: 'JSON-массив вида [start, end]',
  })
  @Transform(({ value }) => normalizeRange(value))
  range: RangeTuple = [0, 9];

  @ApiPropertyOptional({
    example: '{"id":["abc123"]}',
    description: 'JSON-объект фильтра',
  })
  @Transform(({ value }) => normalizeFilter(value))
  filter: Record<string, unknown> = {};

  @ApiPropertyOptional({
    example: '["wallet"]',
    description: 'JSON-массив embed-полей',
  })
  @IsOptional()
  embed?: string;

  get skip(): number {
    const range = Array.isArray(this.range) ? this.range : [0, 9];
    return toNonNegativeInt(range[0], 0);
  }

  get take(): number {
    const range = Array.isArray(this.range) ? this.range : [0, 9];
    const start = toNonNegativeInt(range[0], 0);
    const end = toNonNegativeInt(range[1], start + 9);
    return end >= start ? end - start + 1 : 10;
  }

  get sortField(): string {
    const sort = Array.isArray(this.sort) ? this.sort : ['id', 'ASC'];
    return typeof sort[0] === 'string' && sort[0].trim() ? sort[0] : 'id';
  }

  get sortOrder(): SortOrder {
    const sort = Array.isArray(this.sort) ? this.sort : ['id', 'ASC'];
    return String(sort[1]).toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
  }

  get ids(): string[] {
    const filter = isObject(this.filter) ? this.filter : {};
    const rawIds = filter.id;
    if (rawIds === undefined || rawIds === null) return [];

    if (Array.isArray(rawIds)) {
      return rawIds
        .filter(
          (id): id is string | number =>
            typeof id === 'string' || typeof id === 'number',
        )
        .map((id) => String(id));
    }

    if (typeof rawIds === 'string' || typeof rawIds === 'number') {
      return [String(rawIds)];
    }

    return [];
  }
}
