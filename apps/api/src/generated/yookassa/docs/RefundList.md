# RefundList

Список возвратов. Возвраты отсортированы по времени создания в порядке убывания (от новых к старым). Если результатов больше, чем задано в limit, список будет выводиться фрагментами. В этом случае в ответе на запрос вернется фрагмент списка и параметр next_cursor с указателем на следующий фрагмент.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Формат выдачи результатов запроса. Возможное значение: list (список). | [default to undefined]
**items** | [**Array&lt;Refund&gt;**](Refund.md) |  | [default to undefined]
**next_cursor** | **string** | Указатель на следующий фрагмент списка. Обязательный параметр, если размер списка больше размера выдачи (limit) и конец выдачи не достигнут. | [optional] [default to undefined]

## Example

```typescript
import { RefundList } from 'yookassa-client';

const instance: RefundList = {
    type,
    items,
    next_cursor,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
