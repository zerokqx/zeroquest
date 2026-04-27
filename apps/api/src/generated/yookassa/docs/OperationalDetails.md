# OperationalDetails

Данные операционного реквизита чека

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation_id** | **number** | Идентификатор операции (тег в 54 ФЗ — 1271). Число от 0 до 255. | [default to undefined]
**value** | **string** | Данные операции (тег в 54 ФЗ — 1272). | [default to undefined]
**created_at** | **string** | Время создания операции (тег в 54 ФЗ — 1273). Указывается по UTC: https://ru.wikipedia.org/wiki/%D0%92%D1%81%D0%B5%D0%BC%D0%B8%D1%80%D0%BD%D0%BE%D0%B5_%D0%BA%D0%BE%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5_%D0%B2%D1%80%D0%B5%D0%BC%D1%8F и передается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: 2017-11-03T11:52:31.827Z | [default to undefined]

## Example

```typescript
import { OperationalDetails } from 'yookassa-client';

const instance: OperationalDetails = {
    operation_id,
    value,
    created_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
