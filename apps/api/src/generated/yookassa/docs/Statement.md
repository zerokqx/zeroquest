# Statement

Data for sending statements. Required if you want the user to receive a statement after they make a payment. Only one type of statement is currently available: payment overview.  This is the information about a successful payment that YooMoney sends to the user\'s email address. An overview may be sent if the payment was made via bank cards, SberPay, or FPS. The option to send overviews is available for all integration scenarios: https://yookassa.ru/developers/payment-acceptance/getting-started/selecting-integration-scenario.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]

## Example

```typescript
import { Statement } from 'yookassa-client';

const instance: Statement = {
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
