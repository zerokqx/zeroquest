# MarkQuantity

Дробное количество маркированного товара (тег в 54 ФЗ — 1291). Обязательный параметр, если одновременно выполняются эти условия: * вы используете Чеки от ЮKassa или онлайн-кассу, обновленную до ФФД 1.2; * товар нужно маркировать: http://docs.cntd.ru/document/902192509; * поле measure имеет значение piece. Пример: вы продаете поштучно карандаши. Они поставляются пачками по 100 штук с одним кодом маркировки. При продаже одного карандаша нужно в numerator передать 1, а в denominator — 100.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**numerator** | **number** | Числитель — количество продаваемых товаров из одной потребительской упаковки (тег в 54 ФЗ — 1293). Не может превышать denominator. | [default to undefined]
**denominator** | **number** | Знаменатель — общее количество товаров в потребительской упаковке (тег в 54 ФЗ — 1294). | [default to undefined]

## Example

```typescript
import { MarkQuantity } from 'yookassa-client';

const instance: MarkQuantity = {
    numerator,
    denominator,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
