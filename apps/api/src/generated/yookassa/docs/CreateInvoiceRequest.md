# CreateInvoiceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_data** | [**PaymentData**](PaymentData.md) |  | [default to undefined]
**cart** | [**Array&lt;LineItem&gt;**](LineItem.md) | Корзина заказа — список товаров или услуг, который отобразится на странице счета перед оплатой. | [default to undefined]
**delivery_method_data** | [**CreateInvoiceRequestDeliveryMethodData**](CreateInvoiceRequestDeliveryMethodData.md) |  | [optional] [default to undefined]
**expires_at** | **string** | Срок действия счета — дата и время, до которых можно оплатить выставленный счет. Указывается по UTC: https://ru.wikipedia.org/wiki/%D0%92%D1%81%D0%B5%D0%BC%D0%B8%D1%80%D0%BD%D0%BE%D0%B5_%D0%BA%D0%BE%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5_%D0%B2%D1%80%D0%B5%D0%BC%D1%8F и передается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: 2024-10-18T10:51:18.139Z | [default to undefined]
**locale** | [**Locale**](Locale.md) |  | [optional] [default to undefined]
**description** | **string** | Описание выставленного счета (не более 128 символов), которое вы увидите в личном кабинете ЮKassa, а пользователь на странице счета. Например: «Счет на оплату по договору 37». | [optional] [default to undefined]
**metadata** | **{ [key: string]: string | null; }** | Любые дополнительные данные, которые нужны вам для работы (например, ваш внутренний идентификатор заказа). Передаются в виде набора пар «ключ-значение» и возвращаются в ответе от ЮKassa. Ограничения: максимум 16 ключей, имя ключа не больше 32 символов, значение ключа не больше 512 символов, тип данных — строка в формате UTF-8. | [optional] [default to undefined]

## Example

```typescript
import { CreateInvoiceRequest } from 'yookassa-client';

const instance: CreateInvoiceRequest = {
    payment_data,
    cart,
    delivery_method_data,
    expires_at,
    locale,
    description,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
