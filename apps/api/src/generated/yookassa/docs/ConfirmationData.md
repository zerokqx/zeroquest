# ConfirmationData

Information required to initiate the selected payment confirmation scenario by the user. More about confirmation scenarios: https://yookassa.ru/developers/payment-acceptance/getting-started/payment-process#user-confirmation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**ConfirmationDataType**](ConfirmationDataType.md) |  | [default to undefined]
**locale** | [**Locale**](Locale.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ConfirmationData } from 'yookassa-client';

const instance: ConfirmationData = {
    type,
    locale,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
