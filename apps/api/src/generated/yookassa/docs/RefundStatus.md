# RefundStatus

Статус возврата платежа. Возможные значения: pending — возврат создан, но пока еще обрабатывается; succeeded — возврат успешно завершен, указанная в запросе сумма переведена на платежное средство пользователя (финальный и неизменяемый статус); canceled — возврат отменен, инициатор и причина отмены указаны в объекте cancellation_details (финальный и неизменяемый статус).

## Enum

* `Pending` (value: `'pending'`)

* `Succeeded` (value: `'succeeded'`)

* `Canceled` (value: `'canceled'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
