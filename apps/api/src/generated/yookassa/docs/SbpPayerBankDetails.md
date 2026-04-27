# SbpPayerBankDetails

Реквизиты счета, который использовался для оплаты. Обязательный параметр для платежей в статусе succeeded. В остальных случаях может отсутствовать.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bank_id** | **string** | Идентификатор банка или платежного сервиса в СБП (НСПК). | [default to undefined]
**bic** | **string** | Банковский идентификационный код (БИК) банка или платежного сервиса. Используйте значение этого параметра, чтобы узнать дополнительные сведения об организации в Справочнике БИК: https://cbr.ru/PSystem/payment_system/?utm_source&#x3D;w&amp;utm_content&#x3D;page#a_101477. Например, так вы можете определить название банка. | [default to undefined]

## Example

```typescript
import { SbpPayerBankDetails } from 'yookassa-client';

const instance: SbpPayerBankDetails = {
    bank_id,
    bic,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
