# Recipient

Получатель платежа. Нужен, если вы разделяете потоки платежей в рамках одного аккаунта или создаете платеж в адрес другого аккаунта.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gateway_id** | **string** | Идентификатор субаккаунта. Используется для разделения потоков платежей в рамках одного аккаунта. | [default to undefined]

## Example

```typescript
import { Recipient } from 'yookassa-client';

const instance: Recipient = {
    gateway_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
