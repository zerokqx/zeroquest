# InvoiceDeliveryMethod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**url** | **string** | URL страницы счета, который необходимо передать пользователю для оплаты. Не более 2048 символов. | [optional] [default to undefined]

## Example

```typescript
import { InvoiceDeliveryMethod } from 'yookassa-client';

const instance: InvoiceDeliveryMethod = {
    type,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
