# IncomeReceipt

Details of the receipt recorded at the Tax Service. Deprecated parameter. It was previously returned when making payouts to self-employed individuals. This option is currently unavailable. The parameter is kept for backward compatibility and may be removed in future API versions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_name** | **string** | Описание услуги, оказанной получателем выплаты. Не более 50 символов. | [default to undefined]
**npd_receipt_id** | **string** | Идентификатор чека в сервисе. Пример: 208jd98zqe | [optional] [default to undefined]
**url** | **string** | Ссылка на зарегистрированный чек. Пример: https://www.nalog.gov.ru/api/v1/receipt/&lt;Идентификатор чека&gt;/print | [optional] [default to undefined]
**amount** | [**MonetaryAmount**](MonetaryAmount.md) | Сумма, указанная в чеке. Присутствует, если в запросе передавалась сумма для печати в чеке. | [optional] [default to undefined]

## Example

```typescript
import { IncomeReceipt } from 'yookassa-client';

const instance: IncomeReceipt = {
    service_name,
    npd_receipt_id,
    url,
    amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
