# PaymentCaptureRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**MonetaryAmount**](MonetaryAmount.md) | Total amount that will be debited from the user. You can specify a part of the initial amount to return the balance to the user. To do this, make sure that the selected payment method supports partial debit: https://yookassa.ru/developers/payment-acceptance/getting-started/payment-process#capture-partly. The amount is specified with the currency code. It should match the currency of your subaccount (recipient.gateway_id) if you separate payment flows, or the currency of the account (shopId in the Merchant Profile) if you don\&#39;t. | [optional] [default to undefined]
**receipt** | [**ReceiptData**](ReceiptData.md) |  | [optional] [default to undefined]
**airline** | [**Airline**](Airline.md) | Object containing the data for selling airline tickets. Used only for bank card payments. | [optional] [default to undefined]
**transfers** | [**Array&lt;TransferDataCapture&gt;**](TransferDataCapture.md) | Information about money distribution: the amounts of transfers and the stores to be transferred to. Specified for partially capturing a payment if you use Split payments: https://yookassa.ru/developers/solutions-for-platforms/split-payments/basics. | [optional] [default to undefined]
**deal** | [**CapturePaymentDeal**](CapturePaymentDeal.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PaymentCaptureRequest } from 'yookassa-client';

const instance: PaymentCaptureRequest = {
    amount,
    receipt,
    airline,
    transfers,
    deal,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
