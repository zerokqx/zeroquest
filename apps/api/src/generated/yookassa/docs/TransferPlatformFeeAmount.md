# TransferPlatformFeeAmount

Commission for sold products or services charged in your favor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **string** | Сумма в выбранной валюте. Всегда дробное значение. Разделитель дробной части — точка, разделитель тысяч отсутствует. Количество знаков после точки зависит от выбранной валюты. Пример: 1000.00. | [default to undefined]
**currency** | [**CurrencyCode**](CurrencyCode.md) |  | [default to undefined]

## Example

```typescript
import { TransferPlatformFeeAmount } from 'yookassa-client';

const instance: TransferPlatformFeeAmount = {
    value,
    currency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
