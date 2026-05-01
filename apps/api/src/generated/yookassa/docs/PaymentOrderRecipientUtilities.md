# PaymentOrderRecipientUtilities

Получатель платежа

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Название получателя. | [default to undefined]
**inn** | **string** | ИНН получателя. | [default to undefined]
**kpp** | **string** | КПП получателя. | [default to undefined]
**bank** | [**PaymentOrderBankUtilities**](PaymentOrderBankUtilities.md) | Банк получателя. | [default to undefined]

## Example

```typescript
import { PaymentOrderRecipientUtilities } from './api';

const instance: PaymentOrderRecipientUtilities = {
    name,
    inn,
    kpp,
    bank,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
