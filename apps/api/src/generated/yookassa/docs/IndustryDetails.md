# IndustryDetails

Данные отраслевого реквизита.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**federal_id** | **string** | Идентификатор федерального органа исполнительной власти (тег в 54 ФЗ — 1262). | [default to undefined]
**document_date** | **string** | Дата документа основания (тег в 54 ФЗ — 1263). Передается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601 | [default to undefined]
**document_number** | **string** | Номер нормативного акта федерального органа исполнительной власти, регламентирующего порядок заполнения реквизита «значение отраслевого реквизита» (тег в 54 ФЗ — 1264). | [default to undefined]
**value** | **string** | Значение отраслевого реквизита (тег в 54 ФЗ — 1265). | [default to undefined]

## Example

```typescript
import { IndustryDetails } from 'yookassa-client';

const instance: IndustryDetails = {
    federal_id,
    document_date,
    document_number,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
