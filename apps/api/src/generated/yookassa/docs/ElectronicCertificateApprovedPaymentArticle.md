# ElectronicCertificateApprovedPaymentArticle

Товарная позиция в одобренной корзине покупки при оплате по электронному сертификату.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**article_number** | **number** | Порядковый номер товара в корзине. От 1 до 999 включительно. | [default to undefined]
**tru_code** | **string** | Код ТРУ. 30 символов, две группы цифр, разделенные точкой. Формат: NNNNNNNNN.NNNNNNNNNYYYYMMMMZZZ, где NNNNNNNNN.NNNNNNNNN — код вида ТРУ по Перечню ТРУ: https://esnsi.gosuslugi.ru/classifiers/10616/data?pg&#x3D;1&amp;p&#x3D;1, YYYY — код производителя, MMMM — код модели, ZZZ — код страны производителя. Пример: 329921120.06001010200080001643 Как сформировать код ТРУ: https://yookassa.ru/developers/payment-acceptance/integration-scenarios/manual-integration/other/electronic-certificate/basics#payments-preparations-tru-code | [default to undefined]
**article_code** | **string** | Код товара в вашей системе. Максимум 128 символов. | [optional] [default to undefined]
**certificates** | [**Array&lt;ElectronicCertificate&gt;**](ElectronicCertificate.md) | Список электронных сертификатов, которые используются для оплаты покупки. | [default to undefined]

## Example

```typescript
import { ElectronicCertificateApprovedPaymentArticle } from 'yookassa-client';

const instance: ElectronicCertificateApprovedPaymentArticle = {
    article_number,
    tru_code,
    article_code,
    certificates,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
