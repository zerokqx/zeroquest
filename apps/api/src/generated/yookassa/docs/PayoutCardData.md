# PayoutCardData

Данные банковской карты.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first6** | **string** | Первые 6 цифр номера карты (BIN). | [default to undefined]
**last4** | **string** | Последние 4 цифры номера карты. | [default to undefined]
**card_type** | [**BankCardType**](BankCardType.md) |  | [default to undefined]
**issuer_country** | **string** | Код страны, в которой выпущена карта. Передается в формате ISO-3166 alpha-2: https://www.iso.org/obp/ui/#iso:pub:PUB500001:en. Пример: RU. | [optional] [default to undefined]
**issuer_name** | **string** | Наименование банка, выпустившего карту. | [optional] [default to undefined]

## Example

```typescript
import { PayoutCardData } from 'yookassa-client';

const instance: PayoutCardData = {
    first6,
    last4,
    card_type,
    issuer_country,
    issuer_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
