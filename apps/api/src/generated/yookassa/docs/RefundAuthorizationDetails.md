# RefundAuthorizationDetails

Refund authorization details. Presented only for refunds made by these payment methods: bank card, Mir Pay.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rrn** | **string** | Retrieval Reference Number is a identifier of a bank transaction. | [optional] [default to undefined]

## Example

```typescript
import { RefundAuthorizationDetails } from 'yookassa-client';

const instance: RefundAuthorizationDetails = {
    rrn,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
