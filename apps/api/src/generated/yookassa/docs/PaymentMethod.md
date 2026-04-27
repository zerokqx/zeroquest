# PaymentMethod

Payment method: https://yookassa.ru/developers/payment-acceptance/getting-started/payment-methods#all used for this payment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**PaymentMethodType**](PaymentMethodType.md) |  | [default to undefined]
**id** | **string** | Payment method ID. | [default to undefined]
**saved** | **boolean** | Признак сохранения способа оплаты для автоплатежей: https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments/pay-with-saved. Возможные значения: * true — способ оплаты сохранен для автоплатежей и выплат; * false — способ оплаты не сохранен. | [default to undefined]
**status** | [**PaymentMethodStatus**](PaymentMethodStatus.md) | Статус проверки и сохранения способа оплаты. Возможные значения: * pending — ожидает действий от пользователя; * active — способ оплаты сохранен, его можно использовать для автоплатежей или выплат; * inactive — способ оплаты не сохранен: возникла ошибка или не было попытки сохранения способа оплаты. | [default to undefined]
**title** | **string** | Название способа оплаты. | [optional] [default to undefined]

## Example

```typescript
import { PaymentMethod } from 'yookassa-client';

const instance: PaymentMethod = {
    type,
    id,
    saved,
    status,
    title,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
