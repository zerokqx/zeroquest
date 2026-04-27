# PaymentPeriod

Период оплаты, за который выставлены начисления и за который вносится оплата.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**month** | **number** | Месяц периода. Например, 1 — январь. | [default to undefined]
**year** | **number** | Payment period year. The value must be within the range 1920–2050. For example, 2025. | [default to undefined]

## Example

```typescript
import { PaymentPeriod } from 'yookassa-client';

const instance: PaymentPeriod = {
    month,
    year,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
