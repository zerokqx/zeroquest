# TransferDataCapture


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **string** | ID of the store in favor of which you\&#39;re accepting the receipt. Provided by YooMoney, displayed in the Sellers: https://yookassa.ru/my/marketplace/sellers section of your Merchant Profile (shopId column). | [default to undefined]
**amount** | [**TransferAmount**](TransferAmount.md) |  | [default to undefined]
**platform_fee_amount** | [**TransferPlatformFeeAmount**](TransferPlatformFeeAmount.md) |  | [optional] [default to undefined]

## Example

```typescript
import { TransferDataCapture } from 'yookassa-client';

const instance: TransferDataCapture = {
    account_id,
    amount,
    platform_fee_amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
