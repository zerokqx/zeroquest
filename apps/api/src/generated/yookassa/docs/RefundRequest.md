# RefundRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_id** | **string** | Идентификатор платежа в ЮKassa. | [default to undefined]
**amount** | [**MonetaryAmount**](MonetaryAmount.md) | The amount that must be refunded to the user. The amount is specified with the currency code. It should match the currency of your subaccount (recipient.gateway_id) if you separate payment flows, or the currency of the account (shopId in the Merchant Profile) if you don\&#39;t. | [default to undefined]
**description** | **string** | Комментарий к возврату, основание для возврата денег пользователю. | [optional] [default to undefined]
**receipt** | [**ReceiptData**](ReceiptData.md) |  | [optional] [default to undefined]
**sources** | [**Array&lt;RefundSourcesData&gt;**](RefundSourcesData.md) | Данные о том, с какого магазина и какую сумму нужно удержать для проведения возврата. Необходимо передавать, если вы используете Сплитование платежей: https://yookassa.ru/developers/solutions-for-platforms/split-payments/basics. Сейчас в этом параметре можно передать данные только одного магазина. | [optional] [default to undefined]
**deal** | [**RefundDealData**](RefundDealData.md) |  | [optional] [default to undefined]
**refund_method_data** | [**ElectronicCertificateRefundMethodData**](ElectronicCertificateRefundMethodData.md) |  | [optional] [default to undefined]
**metadata** | **{ [key: string]: string | null; }** | Любые дополнительные данные, которые нужны вам для работы (например, ваш внутренний идентификатор заказа). Передаются в виде набора пар «ключ-значение» и возвращаются в ответе от ЮKassa. Ограничения: максимум 16 ключей, имя ключа не больше 32 символов, значение ключа не больше 512 символов, тип данных — строка в формате UTF-8. | [optional] [default to undefined]

## Example

```typescript
import { RefundRequest } from 'yookassa-client';

const instance: RefundRequest = {
    payment_id,
    amount,
    description,
    receipt,
    sources,
    deal,
    refund_method_data,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
