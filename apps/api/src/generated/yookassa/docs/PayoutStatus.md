# PayoutStatus

Статус выплаты. Возможные значения: pending — выплата создана, но деньги еще не поступили на указанное платежное средство пользователя (например, ЮKassa ждет подтверждения от эквайера, что перевод успешен); succeeded — выплата успешно завершена, деньги переведены на платежное средство пользователя (финальный и неизменяемый статус); canceled — выплата отменена, инициатор и причина отмены указаны в объекте cancellation_details (финальный и неизменяемый статус).

## Enum

* `Pending` (value: `'pending'`)

* `Succeeded` (value: `'succeeded'`)

* `Canceled` (value: `'canceled'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
