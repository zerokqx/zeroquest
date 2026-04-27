# RefundSourcesData

Данные о том, с какого магазина и какую сумму нужно удержать для проведения возврата. Сейчас в этом параметре можно передать данные только одного магазина.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **string** | Идентификатор магазина, для которого вы хотите провести возврат. Выдается ЮKassa, отображается в разделе Продавцы: https://yookassa.ru/my/marketplace/sellers личного кабинета (столбец shopId). | [default to undefined]
**amount** | [**RefundSourcesDataAmount**](RefundSourcesDataAmount.md) |  | [default to undefined]
**platform_fee_amount** | [**RefundSourcesDataPlatformFeeAmount**](RefundSourcesDataPlatformFeeAmount.md) |  | [optional] [default to undefined]

## Example

```typescript
import { RefundSourcesData } from 'yookassa-client';

const instance: RefundSourcesData = {
    account_id,
    amount,
    platform_fee_amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
