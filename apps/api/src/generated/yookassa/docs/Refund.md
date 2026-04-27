# Refund

Refund object (Refund) contains all the relevant information about the payment refund.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Идентификатор возврата платежа в ЮKassa. | [default to undefined]
**payment_id** | **string** | Идентификатор платежа в ЮKassa. | [default to undefined]
**status** | [**RefundStatus**](RefundStatus.md) |  | [default to undefined]
**cancellation_details** | [**RefundCancellationDetails**](RefundCancellationDetails.md) |  | [optional] [default to undefined]
**receipt_registration** | [**ReceiptRegistrationStatus**](ReceiptRegistrationStatus.md) | Статус регистрации чека. Возможные значения: pending — данные в обработке; succeeded — чек успешно зарегистрирован; canceled — чек зарегистрировать не удалось; если используете Чеки от ЮKassa: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/basics, обратитесь в техническую поддержку, в остальных случаях сформируйте чек вручную. Присутствует, если вы используете решения ЮKassa для отправки чеков в налоговую: https://yookassa.ru/developers/payment-acceptance/receipts/basics. | [optional] [default to undefined]
**created_at** | **string** | Время создания возврата. Указывается по UTC: https://ru.wikipedia.org/wiki/%D0%92%D1%81%D0%B5%D0%BC%D0%B8%D1%80%D0%BD%D0%BE%D0%B5_%D0%BA%D0%BE%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5_%D0%B2%D1%80%D0%B5%D0%BC%D1%8F и передается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601, например 2017-11-03T11:52:31.827Z | [default to undefined]
**amount** | [**MonetaryAmount**](MonetaryAmount.md) | Сумма, возвращенная пользователю. | [default to undefined]
**description** | **string** | Основание для возврата денег пользователю. | [optional] [default to undefined]
**sources** | [**Array&lt;RefundSourcesData&gt;**](RefundSourcesData.md) | Данные о том, с какого магазина и какую сумму нужно удержать для проведения возврата. Присутствует, если вы используете Сплитование платежей: https://yookassa.ru/developers/solutions-for-platforms/split-payments/basics. | [optional] [default to undefined]
**deal** | [**RefundDealInfo**](RefundDealInfo.md) |  | [optional] [default to undefined]
**refund_method** | [**RefundRefundMethod**](RefundRefundMethod.md) |  | [optional] [default to undefined]
**refund_authorization_details** | [**RefundAuthorizationDetails**](RefundAuthorizationDetails.md) |  | [optional] [default to undefined]
**metadata** | **{ [key: string]: string | null; }** | Любые дополнительные данные, которые нужны вам для работы (например, ваш внутренний идентификатор заказа). Передаются в виде набора пар «ключ-значение» и возвращаются в ответе от ЮKassa. Ограничения: максимум 16 ключей, имя ключа не больше 32 символов, значение ключа не больше 512 символов, тип данных — строка в формате UTF-8. | [optional] [default to undefined]

## Example

```typescript
import { Refund } from 'yookassa-client';

const instance: Refund = {
    id,
    payment_id,
    status,
    cancellation_details,
    receipt_registration,
    created_at,
    amount,
    description,
    sources,
    deal,
    refund_method,
    refund_authorization_details,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
