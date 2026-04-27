# ElectronicCertificateArticle

Товарная позиция в корзине покупки при оплате по электронному сертификату.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**article_number** | **number** | Порядковый номер товара в корзине. От 1 до 999 включительно. | [default to undefined]
**tru_code** | **string** | Код ТРУ. 30 символов, две группы цифр, разделенные точкой. Формат: NNNNNNNNN.NNNNNNNNNYYYYMMMMZZZ, где NNNNNNNNN.NNNNNNNNN — код вида ТРУ по Перечню ТРУ: https://esnsi.gosuslugi.ru/classifiers/10616/data?pg&#x3D;1&amp;p&#x3D;1, YYYY — код производителя, MMMM — код модели, ZZZ — код страны производителя. Пример: 329921120.06001010200080001643 Как сформировать код ТРУ: https://yookassa.ru/developers/payment-acceptance/integration-scenarios/manual-integration/other/electronic-certificate/basics#payments-preparations-tru-code | [default to undefined]
**article_code** | **string** | Код товара в вашей системе. Максимум 128 символов. | [optional] [default to undefined]
**article_name** | **string** | Название товара в вашей системе. Отображается на готовой платежной форме ЮKassa. Максимум 128 символов. | [default to undefined]
**quantity** | **number** | Количество единиц товара. Формат: целое положительное число. | [default to undefined]
**price** | [**MonetaryAmount**](MonetaryAmount.md) | Цена за единицу товара. | [default to undefined]
**metadata** | **{ [key: string]: string | null; }** | Любые дополнительные данные, которые нужны вам для работы (например, ваш внутренний идентификатор заказа). Передаются в виде набора пар «ключ-значение» и возвращаются в ответе от ЮKassa. Ограничения: максимум 16 ключей, имя ключа не больше 32 символов, значение ключа не больше 512 символов, тип данных — строка в формате UTF-8. | [optional] [default to undefined]

## Example

```typescript
import { ElectronicCertificateArticle } from 'yookassa-client';

const instance: ElectronicCertificateArticle = {
    article_number,
    tru_code,
    article_code,
    article_name,
    quantity,
    price,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
