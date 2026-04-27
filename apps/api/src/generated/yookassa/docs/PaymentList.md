# PaymentList

Список платежей. Платежи отсортированы по времени создания в порядке убывания (от новых к старым). Если результатов больше, чем задано в limit, список будет выводиться фрагментами. В этом случае в ответе на запрос вернется фрагмент списка и параметр next_cursor с указателем на следующий фрагмент.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Формат выдачи результатов запроса. Возможное значение: list (список). | [default to undefined]
**items** | [**Array&lt;Payment&gt;**](Payment.md) |  | [default to undefined]
**next_cursor** | **string** | Указатель на следующий фрагмент списка. Обязательный параметр, если размер списка больше размера выдачи (limit) и конец выдачи не достигнут. | [optional] [default to undefined]

## Example

```typescript
import { PaymentList } from 'yookassa-client';

const instance: PaymentList = {
    type,
    items,
    next_cursor,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
