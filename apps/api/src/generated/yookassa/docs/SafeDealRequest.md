# SafeDealRequest

Данные для создания сделки.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**DealType**](DealType.md) |  | [default to undefined]
**fee_moment** | [**FeeMoment**](FeeMoment.md) |  | [default to undefined]
**metadata** | **{ [key: string]: string | null; }** | Любые дополнительные данные, которые нужны вам для работы (например, ваш внутренний идентификатор заказа). Передаются в виде набора пар «ключ-значение» и возвращаются в ответе от ЮKassa. Ограничения: максимум 16 ключей, имя ключа не больше 32 символов, значение ключа не больше 512 символов, тип данных — строка в формате UTF-8. | [optional] [default to undefined]
**description** | **string** | Описание сделки (не более 128 символов). Используется для фильтрации при получении списка сделок: https://yookassa.ru/developers/api#get_deals_list. | [optional] [default to undefined]

## Example

```typescript
import { SafeDealRequest } from 'yookassa-client';

const instance: SafeDealRequest = {
    type,
    fee_moment,
    metadata,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
