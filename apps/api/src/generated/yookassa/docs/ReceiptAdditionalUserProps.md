# ReceiptAdditionalUserProps

Дополнительный реквизит пользователя (тег в 54 ФЗ — 1084). Можно передавать, если вы отправляете данные для формирования чека по сценарию Сначала платеж, потом чек: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics#receipt-after-payment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Наименование дополнительного реквизита пользователя (тег в 54 ФЗ — 1085). Не более 64 символов. | [default to undefined]
**value** | **string** | Значение дополнительного реквизита пользователя (тег в 54 ФЗ — 1086). Не более 234 символов. | [default to undefined]

## Example

```typescript
import { ReceiptAdditionalUserProps } from 'yookassa-client';

const instance: ReceiptAdditionalUserProps = {
    name,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
