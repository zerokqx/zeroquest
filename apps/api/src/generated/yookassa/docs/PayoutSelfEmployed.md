# PayoutSelfEmployed

Details of the self-employed individual who will receive the payout. Deprecated parameter. It was previously returned when making payouts to self-employed individuals. This option is currently unavailable. The parameter is kept for backward compatibility and may be removed in future API versions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Идентификатор самозанятого в ЮKassa. | [default to undefined]

## Example

```typescript
import { PayoutSelfEmployed } from 'yookassa-client';

const instance: PayoutSelfEmployed = {
    id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
