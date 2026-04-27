# SavePaymentMethodData

Данные для проверки и сохранения способа оплаты.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**holder** | [**Recipient**](Recipient.md) | Данные магазина, для которого сохраняется способ оплаты. | [optional] [default to undefined]
**client_ip** | **string** | IPv4 или IPv6-адрес пользователя. Если не указан, используется IP-адрес TCP-подключения. | [optional] [default to undefined]
**confirmation** | [**PaymentMethodsConfirmationDataRedirect**](PaymentMethodsConfirmationDataRedirect.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SavePaymentMethodData } from 'yookassa-client';

const instance: SavePaymentMethodData = {
    type,
    holder,
    client_ip,
    confirmation,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
