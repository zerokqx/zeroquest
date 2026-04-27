# CardRequestData

Данные банковской карты (необходимы, если вы собираете данные карты пользователей на своей стороне).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number** | **string** | Номер банковской карты. | [default to undefined]
**expiry_year** | **string** | Срок действия, год, YYYY. | [default to undefined]
**expiry_month** | **string** | Срок действия, месяц, MM. | [default to undefined]
**cardholder** | **string** | Имя владельца карты. | [optional] [default to undefined]

## Example

```typescript
import { CardRequestData } from 'yookassa-client';

const instance: CardRequestData = {
    number,
    expiry_year,
    expiry_month,
    cardholder,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
