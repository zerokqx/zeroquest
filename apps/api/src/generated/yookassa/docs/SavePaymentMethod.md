# SavePaymentMethod

Сохраненный способ оплаты.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**SavePaymentMethodType**](SavePaymentMethodType.md) |  | [default to undefined]
**id** | **string** | Идентификатор сохраненного способа оплаты. | [default to undefined]
**saved** | **boolean** | Признак сохранения способа оплаты для автоплатежей: https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments/pay-with-saved. Возможные значения: * true — способ оплаты сохранен для автоплатежей и выплат; * false — способ оплаты не сохранен. | [default to undefined]
**status** | [**PaymentMethodStatus**](PaymentMethodStatus.md) |  | [default to undefined]
**holder** | [**SavePaymentMethodHolder**](SavePaymentMethodHolder.md) |  | [default to undefined]
**title** | **string** | Название способа оплаты. | [optional] [default to undefined]
**confirmation** | [**PaymentMethodsConfirmationRedirect**](PaymentMethodsConfirmationRedirect.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SavePaymentMethod } from 'yookassa-client';

const instance: SavePaymentMethod = {
    type,
    id,
    saved,
    status,
    holder,
    title,
    confirmation,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
