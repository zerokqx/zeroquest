# InvoiceCancellationDetails

Commentary for the canceled status: who canceled the invoice and for what reason.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**party** | **string** | The participant of the process who made the decision to cancel the invoice. Possible values: merchant — a seller of products and services (you); yoo_money — YooMoney. | [default to undefined]
**reason** | **string** | Reason for canceling the invoice. Possible values: invoice_canceled: invoice was canceled manually: https://yookassa.rudocs/support/merchant/invoices-to-clients/invoicing#invoicing__cancel from the Merchant Profile; invoice_expired: the invoice validity period, which you set in the expires_at parameter when creating request, has expired and there are no successful payments associated with the invoice; general_decline: the reason is not detailed, so the user should contact the initiator of cancellation for details; payment_canceled: two-stage payment was canceled via API: https://yookassa.ru/developers/payment-acceptance/getting-started/payment-process#cancel; payment_expired_on_capture: debit period: https://yookassa.ru/developers/payment-acceptance/getting-started/payment-process#hold for a two-stage payment has expired. | [default to undefined]

## Example

```typescript
import { InvoiceCancellationDetails } from 'yookassa-client';

const instance: InvoiceCancellationDetails = {
    party,
    reason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
