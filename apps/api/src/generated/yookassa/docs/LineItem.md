# LineItem

Данные о товаре или услуге в корзине.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** | Название товара или услуги (от 1 до 128 символов). Пользователь увидит его на странице счета перед оплатой. | [default to undefined]
**price** | [**MonetaryAmount**](MonetaryAmount.md) | Полная цена товара или услуги. Пользователь увидит ее на странице счета перед оплатой. | [default to undefined]
**discount_price** | [**MonetaryAmount**](MonetaryAmount.md) | Итоговая цена товара с учетом скидки. Если передана, то на странице счета цена отобразится с учетом скидки. Не нужно передавать, если пользователь оплачивает полную стоимость товара или услуги. | [optional] [default to undefined]
**quantity** | **number** | Количество товара. Можно передать целое или дробное число. Разделитель дробной части — точка, разделитель тысяч отсутствует, максимум три знака после точки. Пример: 5.000 | [default to undefined]

## Example

```typescript
import { LineItem } from 'yookassa-client';

const instance: LineItem = {
    description,
    price,
    discount_price,
    quantity,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
