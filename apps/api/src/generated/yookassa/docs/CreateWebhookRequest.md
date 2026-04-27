# CreateWebhookRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | [**NotificationEventType**](NotificationEventType.md) | Событие: https://yookassa.ru/developers/using-api/webhooks#events, которое вы хотите отслеживать. | [default to undefined]
**url** | **string** | URL, на который ЮKassa будет отправлять уведомления. | [default to undefined]

## Example

```typescript
import { CreateWebhookRequest } from 'yookassa-client';

const instance: CreateWebhookRequest = {
    event,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
