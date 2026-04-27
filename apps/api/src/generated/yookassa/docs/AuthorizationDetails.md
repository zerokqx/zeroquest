# AuthorizationDetails

Payment authorization details when paying by a bank card. Available only for following payment methods: bank card, Mir Pay, SberPay, T-Pay.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rrn** | **string** | Retrieval Reference Number is a identifier of a bank transaction. | [optional] [default to undefined]
**auth_code** | **string** | Authorization code. Provided by the issuer to confirm authorization. | [optional] [default to undefined]
**three_d_secure** | [**ThreeDSecureDetails**](ThreeDSecureDetails.md) |  | [default to undefined]

## Example

```typescript
import { AuthorizationDetails } from 'yookassa-client';

const instance: AuthorizationDetails = {
    rrn,
    auth_code,
    three_d_secure,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
