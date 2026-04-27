# PaymentDetails

Данные о платеже по выставленному счету. Присутствуют, только если платеж успешно подтвержден пользователем: https://yookassa.ru/developers/payment-acceptance/getting-started/payment-process#user-confirmation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Идентификатор платежа в ЮKassa. | [default to undefined]
**status** | [**PaymentStatus**](PaymentStatus.md) | Статус платежа. Возможные значения: * waiting_for_capture — для платежей в две стадии: https://yookassa.ru/developers/payment-acceptance/getting-started/payment-process#capture-and-cancel: платеж оплачен, деньги авторизованы, вам необходимо списать оплату или отменить платеж; * succeeded — платеж успешно завершен, деньги будут перечислены на ваш расчетный счет в соответствии с вашим договором с ЮKassa (финальный и неизменяемый статус); * canceled — для платежей в две стадии: https://yookassa.ru/developers/payment-acceptance/getting-started/payment-process#capture-and-cancel: вы отменили платеж по API (финальный и неизменяемый статус). | [default to undefined]

## Example

```typescript
import { PaymentDetails } from 'yookassa-client';

const instance: PaymentDetails = {
    id,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
