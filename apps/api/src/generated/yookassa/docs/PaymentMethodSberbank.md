# PaymentMethodSberbank

Оплата через SberPay.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone** | **string** | Телефон пользователя, на который зарегистрирован аккаунт в SberPay. Указывается в формате ITU-T E.164: https://ru.wikipedia.org/wiki/E.164, например 79000000000. | [optional] [default to undefined]
**card** | [**InvoicingBankCardData**](InvoicingBankCardData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PaymentMethodSberbank } from 'yookassa-client';

const instance: PaymentMethodSberbank = {
    phone,
    card,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
