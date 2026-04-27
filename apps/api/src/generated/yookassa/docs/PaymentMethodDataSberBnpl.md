# PaymentMethodDataSberBnpl

Данные для оплаты через сервис «Плати частями».

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone** | **string** | The user\&#39;s phone number. Sent to the partner and used for authorization in the \&quot;Pay in installments\&quot; service. Maximum 15 characters. Specified in the ITU-T E.164: https://ru.wikipedia.org/wiki/E.164 format. Example: 79000000000. | [optional] [default to undefined]

## Example

```typescript
import { PaymentMethodDataSberBnpl } from 'yookassa-client';

const instance: PaymentMethodDataSberBnpl = {
    phone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
