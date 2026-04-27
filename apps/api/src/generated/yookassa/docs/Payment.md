# Payment

Payment object (Payment) contains the relevant information about the payment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Идентификатор платежа в ЮKassa. | [default to undefined]
**status** | [**PaymentStatus**](PaymentStatus.md) |  | [default to undefined]
**amount** | [**MonetaryAmount**](MonetaryAmount.md) | Payment amount. Sometimes YooMoney\&#39;s partners charge additional commission from the users that is not included in this amount. The amount is specified with the currency code. It should match the currency of your subaccount (recipient.gateway_id) if you separate payment flows, or the currency of the account (shopId in the Merchant Profile) if you don\&#39;t. | [default to undefined]
**income_amount** | [**MonetaryAmount**](MonetaryAmount.md) | Сумма платежа, которую получит магазин, — значение amount за вычетом комиссии ЮKassa и суммы НДС с этой комиссии. Если вы партнер: https://yookassa.ru/developers/solutions-for-platforms/partners-api/basics и для аутентификации запросов используете OAuth-токен, запросите у магазина право: https://yookassa.ru/developers/solutions-for-platforms/partners-api/oauth/basics на получение информации о комиссиях при платежах. | [optional] [default to undefined]
**description** | **string** | Описание транзакции (не более 128 символов), которое вы увидите в личном кабинете ЮKassa, а пользователь — при оплате. Например: «Оплата заказа № 72 для user@yoomoney.ru». | [optional] [default to undefined]
**recipient** | [**PaymentRecipient**](PaymentRecipient.md) |  | [default to undefined]
**payment_method** | [**PaymentPaymentMethod**](PaymentPaymentMethod.md) |  | [optional] [default to undefined]
**captured_at** | **string** | Time of payment capture, based on UTC: https://en.wikipedia.org/wiki/Coordinated_Universal_Time and specified in the ISO 8601: https://en.wikipedia.org/wiki/ISO_8601 format. | [optional] [default to undefined]
**created_at** | **string** | Time of order creation, based on UTC: https://en.wikipedia.org/wiki/Coordinated_Universal_Time and specified in the ISO 8601: https://en.wikipedia.org/wiki/ISO_8601 format. Example: 2017-11-03T11:52:31.827Z | [default to undefined]
**expires_at** | **string** | The period during which you can cancel or capture a payment for free. The payment with the waiting_for_capture status will be automatically canceled at the specified time. Based on UTC: https://en.wikipedia.org/wiki/Coordinated_Universal_Time and specified in the ISO 8601: https://en.wikipedia.org/wiki/ISO_8601 format. Example: 2017-11-03T11:52:31.827Z | [optional] [default to undefined]
**confirmation** | [**PaymentConfirmation**](PaymentConfirmation.md) |  | [optional] [default to undefined]
**test** | **boolean** | Признак тестовой операции. | [default to undefined]
**refunded_amount** | [**MonetaryAmount**](MonetaryAmount.md) | The amount refunded to the user. Specified if the payment has successful refunds. | [optional] [default to undefined]
**paid** | **boolean** | The attribute of a paid order. | [default to undefined]
**refundable** | **boolean** | Availability of the option to make a refund via API. | [default to undefined]
**receipt_registration** | [**ReceiptRegistrationStatus**](ReceiptRegistrationStatus.md) | Статус регистрации чека. Возможные значения: pending — данные в обработке; succeeded — чек успешно зарегистрирован; canceled — чек зарегистрировать не удалось; если используете Чеки от ЮKassa: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/basics, обратитесь в техническую поддержку, в остальных случаях сформируйте чек вручную. Присутствует, если вы используете решения ЮKassa для отправки чеков в налоговую: https://yookassa.ru/developers/payment-acceptance/receipts/basics. | [optional] [default to undefined]
**metadata** | **{ [key: string]: string | null; }** | Любые дополнительные данные, которые нужны вам для работы (например, ваш внутренний идентификатор заказа). Передаются в виде набора пар «ключ-значение» и возвращаются в ответе от ЮKassa. Ограничения: максимум 16 ключей, имя ключа не больше 32 символов, значение ключа не больше 512 символов, тип данных — строка в формате UTF-8. | [optional] [default to undefined]
**cancellation_details** | [**PaymentCancellationDetails**](PaymentCancellationDetails.md) |  | [optional] [default to undefined]
**authorization_details** | [**AuthorizationDetails**](AuthorizationDetails.md) |  | [optional] [default to undefined]
**transfers** | [**Array&lt;Transfer&gt;**](Transfer.md) | Information about money distribution: the amounts of transfers and the stores to be transferred to. Specified if you use Split payments: https://yookassa.ru/developers/solutions-for-platforms/split-payments/basics. | [optional] [default to undefined]
**deal** | [**PaymentDealInfo**](PaymentDealInfo.md) | The deal within which the payment is being carried out. Specified if you use Safe deal: https://yookassa.ru/developers/solutions-for-platforms/safe-deal/basics. | [optional] [default to undefined]
**merchant_customer_id** | **string** | The identifier of the customer in your system, such as email address or phone number. No more than 200 characters. Specified if you want to save a bank card and offer it for a recurring payment in the YooMoney payment widget: https://yookassa.ru/developers/payment-acceptance/integration-scenarios/widget/basics. | [optional] [default to undefined]
**invoice_details** | [**PaymentInvoiceDetails**](PaymentInvoiceDetails.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Payment } from 'yookassa-client';

const instance: Payment = {
    id,
    status,
    amount,
    income_amount,
    description,
    recipient,
    payment_method,
    captured_at,
    created_at,
    expires_at,
    confirmation,
    test,
    refunded_amount,
    paid,
    refundable,
    receipt_registration,
    metadata,
    cancellation_details,
    authorization_details,
    transfers,
    deal,
    merchant_customer_id,
    invoice_details,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
