# BankCardData

Данные банковской карты.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first6** | **string** | Первые 6 цифр номера карты (BIN). При оплате картой, сохраненной в ЮKassa: https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments/basics и других сервисах, переданный BIN может не соответствовать значениям last4, expiry_year, expiry_month. | [optional] [default to undefined]
**last4** | **string** | Последние 4 цифры номера карты. | [default to undefined]
**expiry_year** | **string** | Срок действия, год, YYYY. | [default to undefined]
**expiry_month** | **string** | Срок действия, месяц, MM. | [default to undefined]
**card_type** | [**BankCardType**](BankCardType.md) |  | [default to undefined]
**card_product** | [**BankCardProduct**](BankCardProduct.md) |  | [optional] [default to undefined]
**issuer_country** | **string** | Код страны, в которой выпущена карта. Передается в формате ISO-3166 alpha-2: https://www.iso.org/obp/ui/#iso:pub:PUB500001:en. Пример: RU. | [optional] [default to undefined]
**issuer_name** | **string** | Наименование банка, выпустившего карту. | [optional] [default to undefined]
**source** | [**BankCardDataSource**](BankCardDataSource.md) |  | [optional] [default to undefined]

## Example

```typescript
import { BankCardData } from 'yookassa-client';

const instance: BankCardData = {
    first6,
    last4,
    expiry_year,
    expiry_month,
    card_type,
    card_product,
    issuer_country,
    issuer_name,
    source,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
