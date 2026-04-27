# PayoutStatementRecipientPersonalDataRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_name** | **string** | Фамилия пользователя. | [default to undefined]
**first_name** | **string** | Имя пользователя. | [default to undefined]
**middle_name** | **string** | Отчество пользователя. Обязательный параметр, если есть в паспорте. | [optional] [default to undefined]
**birthdate** | **string** | Дата рождения. Передается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601 | [default to undefined]

## Example

```typescript
import { PayoutStatementRecipientPersonalDataRequest } from 'yookassa-client';

const instance: PayoutStatementRecipientPersonalDataRequest = {
    last_name,
    first_name,
    middle_name,
    birthdate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
