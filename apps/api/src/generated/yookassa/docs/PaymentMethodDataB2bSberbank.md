# PaymentMethodDataB2bSberbank

Данные для оплаты через СберБанк Бизнес Онлайн.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_purpose** | **string** | Назначение платежа (не больше 210 символов). | [default to undefined]
**vat_data** | [**PaymentMethodDataB2bSberbankAllOfVatData**](PaymentMethodDataB2bSberbankAllOfVatData.md) |  | [default to undefined]

## Example

```typescript
import { PaymentMethodDataB2bSberbank } from 'yookassa-client';

const instance: PaymentMethodDataB2bSberbank = {
    payment_purpose,
    vat_data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
