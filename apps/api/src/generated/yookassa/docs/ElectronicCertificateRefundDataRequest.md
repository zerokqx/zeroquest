# ElectronicCertificateRefundDataRequest

Данные от ФЭС НСПК для возврата на электронный сертификат. Неоходимо передавать только при оплате со сбором данных на вашей стороне: https://yookassa.ru/developers/payment-acceptance/integration-scenarios/manual-integration/other/electronic-certificate/merchant-payment-form.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**MonetaryAmount**](MonetaryAmount.md) | Сумма, которая вернется на электронный сертификат, — значение totalCertAmount, которое вы получили в ФЭС НСПК в запросе на предварительное одобрение возврата (Refund Pre-Auth): https://www.nspk.ru/developer/api-fes#tag/Protokol-FES-NSPK-v1/operation/preAuthReturn. | [default to undefined]
**basket_id** | **string** | Идентификатор корзины возврата, сформированной в НСПК, — значение returnBasketId, которое вы получили в ФЭС НСПК в запросе на предварительное одобрение возврата (Refund Pre-Auth): https://www.nspk.ru/developer/api-fes#tag/Protokol-FES-NSPK-v1/operation/preAuthReturn. | [default to undefined]

## Example

```typescript
import { ElectronicCertificateRefundDataRequest } from 'yookassa-client';

const instance: ElectronicCertificateRefundDataRequest = {
    amount,
    basket_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
