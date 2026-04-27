# RefundRefundMethod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**RefundMethodType**](RefundMethodType.md) |  | [default to undefined]
**sbp_operation_id** | **string** | Идентификатор операции в СБП (НСПК). Пример: 1027088AE4CB48CB81287833347A8777. Обязательный параметр для возвратов в статусе succeeded. В остальных случаях может отсутствовать. | [optional] [default to undefined]
**electronic_certificate** | [**ElectronicCertificateRefundDataResponse**](ElectronicCertificateRefundDataResponse.md) |  | [optional] [default to undefined]
**articles** | [**Array&lt;ElectronicCertificateRefundArticle&gt;**](ElectronicCertificateRefundArticle.md) | Корзина возврата — список возвращаемых товаров, для оплаты которых использовался электронный сертификат. Присутствует, если оплата была на готовой странице ЮKassa: https://yookassa.ru/developers/payment-acceptance/integration-scenarios/manual-integration/other/electronic-certificate/ready-made-payment-form. | [optional] [default to undefined]

## Example

```typescript
import { RefundRefundMethod } from 'yookassa-client';

const instance: RefundRefundMethod = {
    type,
    sbp_operation_id,
    electronic_certificate,
    articles,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
