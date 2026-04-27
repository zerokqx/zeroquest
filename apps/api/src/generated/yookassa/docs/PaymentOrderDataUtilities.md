# PaymentOrderDataUtilities

Платежное поручение — распоряжение на перевод банку для оплаты жилищно-коммунальных услуг (ЖКУ), сведения о платеже для регистрации в ГИС ЖКХ. Необходимо передавать при оплате ЖКУ: https://yookassa.ru/developers/payment-acceptance/scenario-extensions/utility-payments. Кроме параметров, отмеченных как обязательные, должен быть передан как минимум один параметр из этого списка: payment_document_id, payment_document_number, account_number, unified_account_number или service_id.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**MonetaryAmount**](MonetaryAmount.md) | Сумма платежного поручения — сумма, которую пользователь переводит получателю платежа. Равна общей сумме платежа. | [default to undefined]
**payment_purpose** | **string** | Payment purpose (no more than 210 characters). The payment purpose should be specified according to the recommendations from Letter of the Bank of Russia No. IN-04-45|12 dated 22.02.2018: https://my.dom.gosuslugi.ru/filestore/publicDownloadServlet?context&#x3D;contentmanagement&amp;uid&#x3D;ef9a477a-2beb-4212-be30-aed231160db1&amp;mode&#x3D;view. Example: Payment for housing and utilities;ELS (Single Personal Account) 80KX478547;PRD (Payment Period) 12.2024;Ivanov Ivan;Moscow, 1 Flotskaya ulitsa, apartment 1 | [default to undefined]
**recipient** | [**PaymentOrderRecipientUtilities**](PaymentOrderRecipientUtilities.md) | Получатель платежа — государственная или коммерческая организация, которая предоставляет услуги или является информационным посредником, который собирает и обрабатывает начисления от других поставщиков услуг. | [default to undefined]
**kbk** | **string** | Код бюджетной классификации (КБК). | [optional] [default to undefined]
**oktmo** | **string** | Код ОКТМО (Общероссийский классификатор территорий муниципальных образований). | [optional] [default to undefined]
**payment_period** | [**PaymentPeriod**](PaymentPeriod.md) |  | [optional] [default to undefined]
**payment_document_id** | **string** | Идентификатор платежного документа. Обязательный параметр, если не передан payment_document_number, account_number, unified_account_number или service_id. | [optional] [default to undefined]
**payment_document_number** | **string** | Номер платежного документа на стороне поставщика ЖКУ. Обязательный параметр, если не передан payment_document_id, account_number, unified_account_number или service_id. | [optional] [default to undefined]
**account_number** | **string** | Номер лицевого счета на стороне поставщика ЖКУ. Обязательный параметр, если не передан payment_document_id, payment_document_number, unified_account_number или service_id. | [optional] [default to undefined]
**unified_account_number** | **string** | Единый лицевой счет. Уникальный идентификатор в ГИС ЖКХ, который характеризует связку «собственник-помещение». Обязательный параметр, если не передан payment_document_id, payment_document_number, account_number или service_id. | [optional] [default to undefined]
**service_id** | **string** | Идентификатор жилищно-коммунальной услуги (ЖКУ). Обязательный параметр, если не передан payment_document_id, payment_document_number, account_number или unified_account_number. | [optional] [default to undefined]

## Example

```typescript
import { PaymentOrderDataUtilities } from 'yookassa-client';

const instance: PaymentOrderDataUtilities = {
    amount,
    payment_purpose,
    recipient,
    kbk,
    oktmo,
    payment_period,
    payment_document_id,
    payment_document_number,
    account_number,
    unified_account_number,
    service_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
