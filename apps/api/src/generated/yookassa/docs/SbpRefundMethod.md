# SbpRefundMethod

Данные для возврата платежа через СБП (НСПК).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sbp_operation_id** | **string** | Идентификатор операции в СБП (НСПК). Пример: 1027088AE4CB48CB81287833347A8777. Обязательный параметр для возвратов в статусе succeeded. В остальных случаях может отсутствовать. | [optional] [default to undefined]

## Example

```typescript
import { SbpRefundMethod } from 'yookassa-client';

const instance: SbpRefundMethod = {
    sbp_operation_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
