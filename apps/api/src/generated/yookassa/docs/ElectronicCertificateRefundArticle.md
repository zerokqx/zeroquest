# ElectronicCertificateRefundArticle

Товарная позиция в корзине возврата при возврате на электронный сертификат.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**article_number** | **number** | Порядковый номер товара в корзине возврата. От 1 до 999 включительно. | [default to undefined]
**payment_article_number** | **number** | Порядковый номер товара в одобренной корзине покупки (article_number в объекте платежа: https://yookassa.ru/developers/api#payment_object). От 1 до 999 включительно. | [default to undefined]
**tru_code** | **string** | Код ТРУ. 30 символов, две группы цифр, разделенные точкой. Формат: NNNNNNNNN.NNNNNNNNNYYYYMMMMZZZ, где NNNNNNNNN.NNNNNNNNN — код вида ТРУ по Перечню ТРУ: https://esnsi.gosuslugi.ru/classifiers/10616/data?pg&#x3D;1&amp;p&#x3D;1, YYYY — код производителя, MMMM — код модели, ZZZ — код страны производителя. Пример: 329921120.06001010200080001643 Как сформировать код ТРУ: https://yookassa.ru/developers/payment-acceptance/integration-scenarios/manual-integration/other/electronic-certificate/basics#payments-preparations-tru-code | [default to undefined]
**quantity** | **number** | Количество возвращаемых единиц товара. Формат: целое положительное число. | [default to undefined]

## Example

```typescript
import { ElectronicCertificateRefundArticle } from 'yookassa-client';

const instance: ElectronicCertificateRefundArticle = {
    article_number,
    payment_article_number,
    tru_code,
    quantity,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
