# PaymentMethodData

Data for making payments using a certain method: https://yookassa.ru/developers/payment-acceptance/integration-scenarios/manual-integration/basics#integration-options (payment_method). You can send the request without this object. If you do so, the user will be able to select the payment method on the YooMoney\'s side.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]

## Example

```typescript
import { PaymentMethodData } from 'yookassa-client';

const instance: PaymentMethodData = {
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
