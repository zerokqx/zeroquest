# InvoiceStatus

Статус счета. Возможные значения: pending — счет создан и ожидает успешной оплаты; succeeded — счет успешно оплачен, есть связанный платеж в статусе succeeded (финальный и неизменяемый статус для платежей в одну стадию); canceled — вы отменили счет, успешный платеж по нему не поступил или был отменен (при оплате в две стадии) либо истек срок действия счета (финальный и неизменяемый статус). Подробнее про жизненный цикл счета: https://yookassa.ru/developers/payment-acceptance/scenario-extensions/invoices/basics#invoice-status

## Enum

* `Pending` (value: `'pending'`)

* `Succeeded` (value: `'succeeded'`)

* `Canceled` (value: `'canceled'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
