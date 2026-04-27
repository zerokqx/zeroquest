# Forbidden

Секретный ключ указан верно, но не хватает прав для совершения операции.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Тип объекта. | [optional] [default to undefined]
**id** | **string** | Идентификатор ошибки. Используйте его, если возникла необходимость обратиться в техническую поддержку. | [optional] [default to undefined]
**description** | **string** | Подробное описание ошибки. | [optional] [default to undefined]
**parameter** | **string** | Название параметра, из-за которого произошла ошибка. | [optional] [default to undefined]
**retry_after** | **number** | Рекомендуемое количество миллисекунд, спустя которое следует повторить запрос. | [optional] [default to undefined]
**code** | **string** | Код ошибки. | [optional] [default to undefined]

## Example

```typescript
import { Forbidden } from 'yookassa-client';

const instance: Forbidden = {
    type,
    id,
    description,
    parameter,
    retry_after,
    code,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
