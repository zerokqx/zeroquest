# CardRequestDataWithCsc


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number** | **string** | Номер банковской карты. | [default to undefined]
**expiry_year** | **string** | Срок действия, год, YYYY. | [default to undefined]
**expiry_month** | **string** | Срок действия, месяц, MM. | [default to undefined]
**cardholder** | **string** | Имя владельца карты. | [optional] [default to undefined]
**csc** | **string** | Код CVC2 или CVV2, 3 или 4 символа, печатается на обратной стороне карты. | [optional] [default to undefined]

## Example

```typescript
import { CardRequestDataWithCsc } from 'yookassa-client';

const instance: CardRequestDataWithCsc = {
    number,
    expiry_year,
    expiry_month,
    cardholder,
    csc,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
