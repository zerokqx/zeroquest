# Webhook

Данные о webhook.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Идентификатор webhook. | [default to undefined]
**event** | [**NotificationEventType**](NotificationEventType.md) | Событие: https://yookassa.ru/developers/using-api/webhooks#events, о котором уведомляет ЮKassa. | [default to undefined]
**url** | **string** | URL, на который ЮKassa отправляет уведомления. | [default to undefined]

## Example

```typescript
import { Webhook } from 'yookassa-client';

const instance: Webhook = {
    id,
    event,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
