# PostReceiptItemSupplierWithInn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Наименование поставщика (тег в 54 ФЗ — 1225). Параметр предусмотрен форматом фискальных документов (ФФД) и является обязательным, начиная с версии 1.1. | [optional] [default to undefined]
**phone** | **string** | Телефон поставщика (тег в 54 ФЗ — 1171). Указывается в формате ITU-T E.164: https://ru.wikipedia.org/wiki/E.164, например 79000000000. Параметр предусмотрен форматом фискальных документов (ФФД) и является обязательным, начиная с версии 1.1. | [optional] [default to undefined]
**inn** | **string** | ИНН поставщика (10 или 12 цифр). Тег в 54 ФЗ — 1226. Параметр предусмотрен форматом фискальных документов (ФФД) и является обязательным, начиная с версии 1.05. | [optional] [default to undefined]

## Example

```typescript
import { PostReceiptItemSupplierWithInn } from 'yookassa-client';

const instance: PostReceiptItemSupplierWithInn = {
    name,
    phone,
    inn,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
