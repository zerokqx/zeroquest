# SavePaymentMethodHolder

Данные магазина, для которого сохраняется способ оплаты.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **string** | Идентификатор магазина в ЮKassa. | [default to undefined]
**gateway_id** | **string** | Идентификатор субаккаунта. Используется для разделения потоков платежей в рамках одного аккаунта. | [optional] [default to undefined]

## Example

```typescript
import { SavePaymentMethodHolder } from 'yookassa-client';

const instance: SavePaymentMethodHolder = {
    account_id,
    gateway_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
