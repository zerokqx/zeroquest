# PayoutToSbpDestination

Данные для выплаты через СБП на счет в банке или платежном сервисе.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone** | **string** | Телефон, к которому привязан счет получателя выплаты в системе участника СБП. Указывается в формате ITU-T E.164: https://ru.wikipedia.org/wiki/E.164, например 79000000000. | [default to undefined]
**bank_id** | **string** | Идентификатор участника СБП — банка или платежного сервиса, подключенного к сервису. | [default to undefined]
**sbp_operation_id** | **string** | ID of the transaction in FPS (NSPK). Example: 1027088AE4CB48CB81287833347A8777. Required parameter for payments with the succeeded status. In other cases, it might be missing. | [optional] [default to undefined]
**recipient_checked** | **boolean** | Проверка получателя выплаты: https://yookassa.ru/developers/payouts/scenario-extensions/recipient-check: true — выплата проходила с проверкой получателя, false — выплата проходила без проверки получателя. | [default to undefined]

## Example

```typescript
import { PayoutToSbpDestination } from 'yookassa-client';

const instance: PayoutToSbpDestination = {
    phone,
    bank_id,
    sbp_operation_id,
    recipient_checked,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
