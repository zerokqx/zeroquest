# B2bSberbankPayerBankDetails

Банковские реквизиты плательщика (юридического лица или ИП).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_name** | **string** | Полное наименование организации. | [default to undefined]
**short_name** | **string** | Сокращенное наименование организации. | [default to undefined]
**address** | **string** | Адрес организации. | [default to undefined]
**inn** | **string** | Индивидуальный налоговый номер (ИНН) организации. | [default to undefined]
**bank_name** | **string** | Наименование банка организации. | [default to undefined]
**bank_branch** | **string** | Отделение банка организации. | [default to undefined]
**bank_bik** | **string** | Банковский идентификационный код (БИК) банка организации. | [default to undefined]
**account** | **string** | Номер счета организации. | [default to undefined]
**kpp** | **string** | Код причины постановки на учет (КПП) организации. | [optional] [default to undefined]

## Example

```typescript
import { B2bSberbankPayerBankDetails } from 'yookassa-client';

const instance: B2bSberbankPayerBankDetails = {
    full_name,
    short_name,
    address,
    inn,
    bank_name,
    bank_branch,
    bank_bik,
    account,
    kpp,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
