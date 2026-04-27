# Settlement

Информация о совершенных расчетах.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Тип расчета. Перечень возможных значений * для Чеков от ЮKassa: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/parameters-values#settlement-type * для сторонних онлайн-касс: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/parameters-values#settlement-type | [default to undefined]
**amount** | [**MonetaryAmount**](MonetaryAmount.md) | Сумма расчета. | [default to undefined]

## Example

```typescript
import { Settlement } from 'yookassa-client';

const instance: Settlement = {
    type,
    amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
