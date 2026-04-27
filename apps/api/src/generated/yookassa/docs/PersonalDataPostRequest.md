# PersonalDataPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**PersonalDataType**](PersonalDataType.md) |  | [default to undefined]
**metadata** | **{ [key: string]: string | null; }** | Любые дополнительные данные, которые нужны вам для работы (например, ваш внутренний идентификатор заказа). Передаются в виде набора пар «ключ-значение» и возвращаются в ответе от ЮKassa. Ограничения: максимум 16 ключей, имя ключа не больше 32 символов, значение ключа не больше 512 символов, тип данных — строка в формате UTF-8. | [optional] [default to undefined]
**last_name** | **string** | Фамилия пользователя. | [default to undefined]
**first_name** | **string** | Имя пользователя. | [default to undefined]
**middle_name** | **string** | Отчество пользователя. Обязательный параметр, если есть в паспорте. | [optional] [default to undefined]
**birthdate** | **string** | Дата рождения. Передается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601 | [default to undefined]

## Example

```typescript
import { PersonalDataPostRequest } from 'yookassa-client';

const instance: PersonalDataPostRequest = {
    type,
    metadata,
    last_name,
    first_name,
    middle_name,
    birthdate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
