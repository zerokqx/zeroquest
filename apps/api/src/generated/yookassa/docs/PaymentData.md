# PaymentData

Данные для проведения платежа по выставленному счету.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**MonetaryAmount**](MonetaryAmount.md) | Payment amount. It must be within limits: https://yookassa.ru/docs/support/payments/limits. The amount is specified with the currency code. It should match the currency of your subaccount (recipient.gateway_id) if you separate payment flows, or the currency of the account (shopId in the Merchant Profile) if you don\&#39;t. | [default to undefined]
**receipt** | [**ReceiptData**](ReceiptData.md) |  | [optional] [default to undefined]
**recipient** | [**Recipient**](Recipient.md) |  | [optional] [default to undefined]
**save_payment_method** | **boolean** | Сохранение платежных данных для проведения автоплатежей: https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments/basics. Возможные значения: * true — сохранить способ оплаты (сохранить платежные данные); * false — провести платеж без сохранения способа оплаты. Доступно только после согласования с менеджером ЮKassa. | [optional] [default to false]
**capture** | **boolean** | Автоматический прием: https://yookassa.ru/developers/payment-acceptance/getting-started/payment-process#capture-true поступившего платежа. Возможные значения: * true — оплата списывается сразу (платеж в одну стадию); * false — оплата холдируется и списывается по вашему запросу (платеж в две стадии: https://yookassa.ru/developers/payment-acceptance/getting-started/payment-process#capture-and-cancel). По умолчанию false. | [optional] [default to false]
**client_ip** | **string** | IPv4 или IPv6-адрес пользователя. Если не указан, используется IP-адрес TCP-подключения. | [optional] [default to undefined]
**description** | **string** | Описание транзакции (не более 128 символов), которое вы увидите в личном кабинете ЮKassa, а пользователь — при оплате. Например: «Оплата заказа № 72 для user@yoomoney.ru». | [optional] [default to undefined]
**metadata** | **{ [key: string]: string | null; }** | Любые дополнительные данные, которые нужны вам для работы (например, ваш внутренний идентификатор заказа). Передаются в виде набора пар «ключ-значение» и возвращаются в ответе от ЮKassa. Ограничения: максимум 16 ключей, имя ключа не больше 32 символов, значение ключа не больше 512 символов, тип данных — строка в формате UTF-8. | [optional] [default to undefined]

## Example

```typescript
import { PaymentData } from 'yookassa-client';

const instance: PaymentData = {
    amount,
    receipt,
    recipient,
    save_payment_method,
    capture,
    client_ip,
    description,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
