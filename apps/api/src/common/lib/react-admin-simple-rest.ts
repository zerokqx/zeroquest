import type { Response } from 'express';

export const extractIdsFromSimpleRestFilter = (filter: unknown): string[] => {
  if (typeof filter !== 'object' || filter === null || Array.isArray(filter)) {
    return [];
  }

  const rawIds = (filter as Record<string, unknown>).id;
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
};

export const setSimpleRestListHeaders = (params: {
  dataLength: number;
  resource: string;
  response: Response;
  skip: number;
  total: number;
}) => {
  const { dataLength, resource, response, skip, total } = params;
  const lastIndex = dataLength > 0 ? skip + dataLength - 1 : skip;
  response.setHeader('Content-Range', `${resource} ${skip}-${lastIndex}/${total}`);
  response.setHeader('X-Total-Count', String(total));
  response.setHeader('Access-Control-Expose-Headers', 'Content-Range, X-Total-Count');
};
