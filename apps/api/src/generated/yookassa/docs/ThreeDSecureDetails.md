# ThreeDSecureDetails

Information about user’s 3‑D Secure authentication for confirming the payment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applied** | **boolean** | Information on whether the 3-D Secure authentication form is displayed to the user for confirming the payment or not. Possible values: true: YooMoney displayed the form to the user, so that they could complete 3-D Secure authentication; false: payment was processed without 3-D Secure authentication. | [default to undefined]

## Example

```typescript
import { ThreeDSecureDetails } from 'yookassa-client';

const instance: ThreeDSecureDetails = {
    applied,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
