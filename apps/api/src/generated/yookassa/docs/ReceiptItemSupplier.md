# ReceiptItemSupplier

Информация о поставщике товара или услуги (тег в 54 ФЗ — 1224). Можно передавать, если вы отправляете данные для формирования чека по сценарию Сначала платеж, потом чек: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics#receipt-after-payment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Наименование поставщика (тег в 54 ФЗ — 1225). Параметр предусмотрен форматом фискальных документов (ФФД) и является обязательным, начиная с версии 1.1. | [optional] [default to undefined]
**phone** | **string** | Телефон поставщика (тег в 54 ФЗ — 1171). Указывается в формате ITU-T E.164: https://ru.wikipedia.org/wiki/E.164, например 79000000000. Параметр предусмотрен форматом фискальных документов (ФФД) и является обязательным, начиная с версии 1.1. | [optional] [default to undefined]

## Example

```typescript
import { ReceiptItemSupplier } from 'yookassa-client';

const instance: ReceiptItemSupplier = {
    name,
    phone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
