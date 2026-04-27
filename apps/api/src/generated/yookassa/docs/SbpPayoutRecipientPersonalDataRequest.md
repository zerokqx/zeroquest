# SbpPayoutRecipientPersonalDataRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_name** | **string** | Фамилия пользователя. | [default to undefined]
**first_name** | **string** | Имя пользователя. | [default to undefined]
**middle_name** | **string** | Отчество пользователя. Обязательный параметр, если есть в паспорте. | [optional] [default to undefined]

## Example

```typescript
import { SbpPayoutRecipientPersonalDataRequest } from 'yookassa-client';

const instance: SbpPayoutRecipientPersonalDataRequest = {
    last_name,
    first_name,
    middle_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
