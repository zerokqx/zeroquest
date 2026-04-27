# PaymentMethodSbp

Оплата через СБП (Система быстрых платежей ЦБ РФ).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sbp_operation_id** | **string** | Идентификатор операции в СБП (НСПК). Пример: 1027088AE4CB48CB81287833347A8777 Обязательный параметр для платежей в статусе succeeded. В остальных случаях может отсутствовать. | [optional] [default to undefined]
**payer_bank_details** | [**SbpPayerBankDetails**](SbpPayerBankDetails.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PaymentMethodSbp } from 'yookassa-client';

const instance: PaymentMethodSbp = {
    sbp_operation_id,
    payer_bank_details,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
