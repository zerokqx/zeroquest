# ConfirmationDataQr


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**return_url** | **string** | The address of the page that will be open to the user when they\&#39;ve confirmed or cancelled the payment in the bank app. For example, if you need to return the user to the website, you may set the URL, or the deeplink for redirecting to the mobile app. The URL should conform to the RFC-3986: https://www.ietf.org/rfc/rfc3986.txt standard. Maximum 2048 characters. Available only for payments via the Faster Payments System: https://yookassa.ru/developers/payment-acceptance/integration-scenarios/manual-integration/other/sbp. | [optional] [default to undefined]

## Example

```typescript
import { ConfirmationDataQr } from 'yookassa-client';

const instance: ConfirmationDataQr = {
    return_url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
