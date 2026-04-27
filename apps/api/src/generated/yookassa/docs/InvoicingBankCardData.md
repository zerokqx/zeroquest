# InvoicingBankCardData

Данные банковской карты.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first6** | **string** | Первые 6 цифр номера карты (BIN). | [default to undefined]
**last4** | **string** | Последние 4 цифры номера карты. | [default to undefined]
**expiry_year** | **string** | Срок действия, год, YYYY. | [default to undefined]
**expiry_month** | **string** | Срок действия, месяц, MM. | [default to undefined]
**card_type** | [**BankCardType**](BankCardType.md) |  | [default to undefined]

## Example

```typescript
import { InvoicingBankCardData } from 'yookassa-client';

const instance: InvoicingBankCardData = {
    first6,
    last4,
    expiry_year,
    expiry_month,
    card_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
