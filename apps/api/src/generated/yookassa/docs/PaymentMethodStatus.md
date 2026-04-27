# PaymentMethodStatus

Статус проверки и сохранения способа оплаты. Возможные значения: * pending — ожидает действий от пользователя; * active — способ оплаты сохранен, его можно использовать для автоплатежей или выплат; * inactive — способ оплаты не сохранен: пользователь не подтвердил привязку платежного средства или при сохранении способа оплаты возникла ошибка. Чтобы узнать подробности, обратитесь в техническую поддержку ЮKassa.

## Enum

* `Pending` (value: `'pending'`)

* `Active` (value: `'active'`)

* `Inactive` (value: `'inactive'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
