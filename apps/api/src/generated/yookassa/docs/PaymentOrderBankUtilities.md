# PaymentOrderBankUtilities

Банк получателя платежа.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the recipient\&#39;s bank. Maximum of 45 characters. | [default to undefined]
**bic** | **string** | БИК банка получателя. | [default to undefined]
**account** | **string** | Счет получателя в банке. | [default to undefined]
**correspondent_account** | **string** | Корреспондентский счет банка получателя. | [default to undefined]

## Example

```typescript
import { PaymentOrderBankUtilities } from 'yookassa-client';

const instance: PaymentOrderBankUtilities = {
    name,
    bic,
    account,
    correspondent_account,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
