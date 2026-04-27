# PaymentMethodDataMobileBalance

Данные для оплаты с баланса мобильного телефона.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone** | **string** | Телефон, с баланса которого осуществляется платеж. Указывается в формате ITU-T E.164: https://ru.wikipedia.org/wiki/E.164, например 79000000000. | [default to undefined]

## Example

```typescript
import { PaymentMethodDataMobileBalance } from 'yookassa-client';

const instance: PaymentMethodDataMobileBalance = {
    phone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
