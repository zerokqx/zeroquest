# PaymentMethodB2bSberbank

Оплата через Сбербанк Бизнес Онлайн.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_purpose** | **string** | Назначение платежа (не больше 210 символов). | [default to undefined]
**vat_data** | [**PaymentMethodB2bSberbankAllOfVatData**](PaymentMethodB2bSberbankAllOfVatData.md) |  | [default to undefined]
**payer_bank_details** | [**B2bSberbankPayerBankDetails**](B2bSberbankPayerBankDetails.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PaymentMethodB2bSberbank } from 'yookassa-client';

const instance: PaymentMethodB2bSberbank = {
    payment_purpose,
    vat_data,
    payer_bank_details,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
