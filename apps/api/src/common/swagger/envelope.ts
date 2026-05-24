import { applyDecorators, Type } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';

export class EnvelopeDto<T> {
  type!: string; // Тип ответа (например, 'auth_success', 'error', 'totp_required')
  data?: T; // Сами полезные данные
  meta?: any; // Доп. информация (пагинация, время запроса, версия API)

  constructor(partial: EnvelopeDto<T>) {

Object.assign(this,partial)
  }
}

export interface EnvelopeMap {
  typeValue: string;
  model?: Type<any>; // Делаем model опциональной
}

export interface EnvelopeMap {
  typeValue: string;
  model?: Type<any>;
}

export const ApiEnvelopeResponse = (items: EnvelopeMap[]) => {
  // Собираем все уникальные модели для регистрации
  const models = Array.from(new Set(items.map((i) => i.model).filter(Boolean)));

  return applyDecorators(
    ApiExtraModels(EnvelopeDto, ...models),
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(EnvelopeDto) }, // Базовая структура
          {
            type: 'object',
            properties: {
              type: { type: 'string', enum: items.map((i) => i.typeValue) },
              data: {
                oneOf: items.map(
                  (i) =>
                    i.model
                      ? { $ref: getSchemaPath(i.model) } // Ссылка на DTO
                      : { type: 'object', example: {} }, // Пустой объект
                ),
              },
            },
            required: ['type', 'data'],
          },
        ],
      },
    }),
  );
};
