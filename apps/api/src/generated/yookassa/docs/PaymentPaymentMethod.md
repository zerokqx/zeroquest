# PaymentPaymentMethod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**PaymentMethodType**](PaymentMethodType.md) |  | [default to undefined]
**id** | **string** | Payment method ID. | [default to undefined]
**saved** | **boolean** | Признак сохранения способа оплаты для автоплатежей: https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments/pay-with-saved. Возможные значения: * true — способ оплаты сохранен для автоплатежей и выплат; * false — способ оплаты не сохранен. | [default to undefined]
**status** | [**PaymentMethodStatus**](PaymentMethodStatus.md) | Статус проверки и сохранения способа оплаты. Возможные значения: * pending — ожидает действий от пользователя; * active — способ оплаты сохранен, его можно использовать для автоплатежей или выплат; * inactive — способ оплаты не сохранен: возникла ошибка или не было попытки сохранения способа оплаты. | [default to undefined]
**title** | **string** | Название способа оплаты. | [optional] [default to undefined]
**card** | [**BankCardData**](BankCardData.md) | Данные банковской карты «Мир». | [optional] [default to undefined]
**login** | **string** | Логин пользователя в Альфа-Клике (привязанный телефон или дополнительный логин). | [optional] [default to undefined]
**phone** | **string** | Телефон пользователя, на который зарегистрирован аккаунт в SberPay. Указывается в формате ITU-T E.164: https://ru.wikipedia.org/wiki/E.164, например 79000000000. | [optional] [default to undefined]
**account_number** | **string** | Номер кошелька ЮMoney, из которого заплатил пользователь. | [optional] [default to undefined]
**payment_purpose** | **string** | Назначение платежа (не больше 210 символов). | [default to undefined]
**vat_data** | [**PaymentMethodB2bSberbankAllOfVatData**](PaymentMethodB2bSberbankAllOfVatData.md) |  | [default to undefined]
**payer_bank_details** | [**SbpPayerBankDetails**](SbpPayerBankDetails.md) |  | [optional] [default to undefined]
**sbp_operation_id** | **string** | Идентификатор операции в СБП (НСПК). Пример: 1027088AE4CB48CB81287833347A8777 Обязательный параметр для платежей в статусе succeeded. В остальных случаях может отсутствовать. | [optional] [default to undefined]
**loan_option** | **string** | Тариф кредита, который пользователь выбрал при оплате. Возможные значения: loan — кредит; installments_XX — рассрочка, где XX — количество месяцев для выплаты рассрочки. Например, installments_3 — рассрочка на 3 месяца. Присутствует для платежей в статусе waiting_for_capture и succeeded. | [optional] [default to undefined]
**discount_amount** | [**MonetaryAmount**](MonetaryAmount.md) | Сумма скидки для рассрочки. Присутствует для платежей в статусе waiting_for_capture и succeeded, если пользователь выбрал рассрочку. | [optional] [default to undefined]
**suspended_until** | **string** | Время, когда заканчивается период охлаждения: https://yookassa.ru/docs/support/payments/credit-purchases-by-sberbank-with-cooling-off кредита или рассрочки. Указывается по UTC: https://ru.wikipedia.org/wiki/%D0%92%D1%81%D0%B5%D0%BC%D0%B8%D1%80%D0%BD%D0%BE%D0%B5_%D0%BA%D0%BE%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5_%D0%B2%D1%80%D0%B5%D0%BC%D1%8F и передается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Присутствует для платежей в статусе pending, которые по закону: https://www.consultant.ru/document/cons_doc_LAW_498604/ попадают под процедуру охлаждения. | [optional] [default to undefined]
**electronic_certificate** | [**ElectronicCertificatePayment**](ElectronicCertificatePayment.md) |  | [optional] [default to undefined]
**articles** | [**Array&lt;ElectronicCertificateApprovedPaymentArticle&gt;**](ElectronicCertificateApprovedPaymentArticle.md) | Одобренная корзина покупки — список товаров, одобренных к оплате по электронному сертификату. Присутствует только при оплате на готовой странице ЮKassa: https://yookassa.ru/developers/payment-acceptance/integration-scenarios/manual-integration/other/electronic-certificate/ready-made-payment-form. | [optional] [default to undefined]

## Example

```typescript
import { PaymentPaymentMethod } from 'yookassa-client';

const instance: PaymentPaymentMethod = {
    type,
    id,
    saved,
    status,
    title,
    card,
    login,
    phone,
    account_number,
    payment_purpose,
    vat_data,
    payer_bank_details,
    sbp_operation_id,
    loan_option,
    discount_amount,
    suspended_until,
    electronic_certificate,
    articles,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
