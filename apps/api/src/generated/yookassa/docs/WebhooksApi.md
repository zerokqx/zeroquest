# WebhooksApi

All URIs are relative to *https://api.yookassa.ru/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**webhooksGet**](#webhooksget) | **GET** /webhooks | Список созданных webhook|
|[**webhooksPost**](#webhookspost) | **POST** /webhooks | Создание webhook|
|[**webhooksWebhookIdDelete**](#webhookswebhookiddelete) | **DELETE** /webhooks/{webhook_id} | Удаление webhook|

# **webhooksGet**
> WebhookList webhooksGet()

Запрос позволяет узнать, какие webhook есть для переданного OAuth-токена.

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from 'yookassa-client';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

const { status, data } = await apiInstance.webhooksGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**WebhookList**

### Authorization

[OAuth2](../README.md#OAuth2), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Запрос успешно обработан |  -  |
|**401** | В заголовке Authorization указан неверный ключ. |  -  |
|**403** | Секретный ключ указан верно, но не хватает прав для совершения операции. |  -  |
|**500** | Внутренняя ошибка сервера ЮKassa. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooksPost**
> Webhook webhooksPost(createWebhookRequest)

Запрос позволяет подписаться на уведомления о событиях: https://yookassa.ru/developers/using-api/webhooks#events (например, переход платежа в статус succeeded). C помощью webhook можно подписаться только на события платежей и возвратов. Если вы хотите получать уведомления о нескольких событиях, вам нужно для каждого из них создать свой webhook. Для каждого OAuth-токена нужно создавать свой набор webhook.

### Example

```typescript
import {
    WebhooksApi,
    Configuration,
    CreateWebhookRequest
} from 'yookassa-client';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let idempotenceKey: string; // (default to '2e1da982-1bb1-41f0-b9cf-758cc8bcf069')
let createWebhookRequest: CreateWebhookRequest; //

const { status, data } = await apiInstance.webhooksPost(
    idempotenceKey,
    createWebhookRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createWebhookRequest** | **CreateWebhookRequest**|  | |
| **idempotenceKey** | [**string**] |  | defaults to '2e1da982-1bb1-41f0-b9cf-758cc8bcf069'|


### Return type

**Webhook**

### Authorization

[OAuth2](../README.md#OAuth2), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Запрос успешно обработан |  -  |
|**400** | Запрос не может быть обработан. Причиной может быть неправильный синтаксис запроса, ошибка в обязательных параметрах запроса, их отсутствие или неподдерживаемый метод. |  -  |
|**401** | В заголовке Authorization указан неверный ключ. |  -  |
|**403** | Секретный ключ указан верно, но не хватает прав для совершения операции. |  -  |
|**500** | Внутренняя ошибка сервера ЮKassa. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooksWebhookIdDelete**
> object webhooksWebhookIdDelete()

Запрос позволяет отписаться от уведомлений о событии для переданного OAuth-токена. Чтобы удалить webhook, вам нужно передать в запросе его идентификатор.

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from 'yookassa-client';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let webhookId: string; //Идентификатор webhook-a. (default to '1da5c87d-0984-50e8-a7f3-8de646dd9ec9')

const { status, data } = await apiInstance.webhooksWebhookIdDelete(
    webhookId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookId** | [**string**] | Идентификатор webhook-a. | defaults to '1da5c87d-0984-50e8-a7f3-8de646dd9ec9'|


### Return type

**object**

### Authorization

[OAuth2](../README.md#OAuth2), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Запрос успешно обработан |  -  |
|**400** | Запрос не может быть обработан. Причиной может быть неправильный синтаксис запроса, ошибка в обязательных параметрах запроса, их отсутствие или неподдерживаемый метод. |  -  |
|**401** | В заголовке Authorization указан неверный ключ. |  -  |
|**403** | Секретный ключ указан верно, но не хватает прав для совершения операции. |  -  |
|**500** | Внутренняя ошибка сервера ЮKassa. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

