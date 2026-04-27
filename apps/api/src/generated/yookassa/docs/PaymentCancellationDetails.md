# PaymentCancellationDetails

Commentary to the canceled status: who and why canceled the payment. More about canceled payments: https://yookassa.ru/developers/payment-acceptance/after-the-payment/declined-payments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**party** | **string** | The participant of the payment process that made the decision to cancel the payment. Possible values are yoo_money, payment_network, and merchant. More about initiators of payment cancelation: https://yookassa.ru/developers/payment-acceptance/after-the-payment/declined-payments#cancellation-details-party | [default to undefined]
**reason** | **string** | Reason behind the cancelation. The list and descriptions of possible values: https://yookassa.ru/developers/payment-acceptance/after-the-payment/declined-payments#cancellation-details-reason | [default to undefined]

## Example

```typescript
import { PaymentCancellationDetails } from 'yookassa-client';

const instance: PaymentCancellationDetails = {
    party,
    reason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
