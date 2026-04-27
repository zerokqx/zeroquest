# PaymentsApi

All URIs are relative to *https://api.yookassa.ru/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**paymentsGet**](#paymentsget) | **GET** /payments | List payments|
|[**paymentsPaymentIdCancelPost**](#paymentspaymentidcancelpost) | **POST** /payments/{payment_id}/cancel | Cancel a payment|
|[**paymentsPaymentIdCapturePost**](#paymentspaymentidcapturepost) | **POST** /payments/{payment_id}/capture | Capture a payment|
|[**paymentsPaymentIdGet**](#paymentspaymentidget) | **GET** /payments/{payment_id} | Get payment information|
|[**paymentsPost**](#paymentspost) | **POST** /payments | Create a payment|

# **paymentsGet**
> PaymentList paymentsGet()

Use this request to get a list of payments. You can download payments created over the last 3 years. You can filter the list by specified criteria. More about working with lists: https://yookassa.ru/developers/using-api/lists

### Example

```typescript
import {
    PaymentsApi,
    Configuration
} from 'yookassa-client';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let createdAtGte: string; //Фильтр по времени создания: время должно быть больше указанного значения или равно ему («с такого-то момента включительно»). Указывается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: created_at.gte=2018-07-18T10:51:18.139Z (optional) (default to undefined)
let createdAtGt: string; //Фильтр по времени создания: время должно быть больше указанного значения («с такого-то момента, не включая его»). Указывается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: created_at.gt=2018-07-18T10:51:18.139Z (optional) (default to undefined)
let createdAtLte: string; //Фильтр по времени создания: время должно быть меньше указанного значения или равно ему («по такой-то момент включительно»). Указывается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: created_at.lte=2018-07-18T10:51:18.139Z (optional) (default to undefined)
let createdAtLt: string; //Фильтр по времени создания: время должно быть меньше указанного значения («по такой-то момент, не включая его»). Указывается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: created_at.lt=2018-07-18T10:51:18.139Z (optional) (default to undefined)
let capturedAtGte: string; //Filter by time of payment capture: time must be greater than the specified value or equal (\"from a certain moment inclusive\"). Specified in the ISO 8601: https://en.wikipedia.org/wiki/ISO_8601 format. Example: captured_at.gte=2018-07-18T10:51:18.139Z (optional) (default to undefined)
let capturedAtGt: string; //Filter by time of payment capture: time must be greater than the specified value (\"from a certain moment exclusive\"). Specified in the ISO 8601: https://en.wikipedia.org/wiki/ISO_8601 format. Example: captured_at.gt=2018-07-18T10:51:18.139Z (optional) (default to undefined)
let capturedAtLte: string; //Filter by time of payment capture: time must be less than the specified value or equal (\"until a certain moment inclusive\"). Specified in the ISO 8601: https://en.wikipedia.org/wiki/ISO_8601 format. Example: captured_at.lte=2018-07-18T10:51:18.139Z (optional) (default to undefined)
let capturedAtLt: string; //Filter by time of payment capture: time must be less than the specified value (\"until a certain moment exclusive\") Specified in the ISO 8601: https://en.wikipedia.org/wiki/ISO_8601 format. Example: captured_at.lt=2018-07-18T10:51:18.139Z (optional) (default to undefined)
let paymentMethod: PaymentMethodType; //Filter by payment method: https://yookassa.ru/developers/payment-acceptance/getting-started/payment-methods#all code. Example: payment_method=bank_card (optional) (default to undefined)
let status: PaymentStatus; //Filter by payment status: https://yookassa.ru/developers/payment-acceptance/getting-started/payment-process#lifecycle. Example: status=succeeded (optional) (default to undefined)
let limit: number; //Размер выдачи результатов запроса — количество объектов, передаваемых в ответе. Возможные значения: от 1 до 100. Пример: limit=50 Значение по умолчанию: 10 (optional) (default to 10)
let cursor: string; //Указатель на следующий фрагмент списка. Пример: cursor=37a5c87d-3984-51e8-a7f3-8de646d39ec15 В качестве указателя необходимо использовать значение параметра next_cursor, полученное в ответе на предыдущий запрос. Используется, если в списке больше объектов, чем может поместиться в выдаче (limit), и конец выдачи не достигнут. Пример использования: https://yookassa.ru/developers/using-api/lists#pagination (optional) (default to undefined)

const { status, data } = await apiInstance.paymentsGet(
    createdAtGte,
    createdAtGt,
    createdAtLte,
    createdAtLt,
    capturedAtGte,
    capturedAtGt,
    capturedAtLte,
    capturedAtLt,
    paymentMethod,
    status,
    limit,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createdAtGte** | [**string**] | Фильтр по времени создания: время должно быть больше указанного значения или равно ему («с такого-то момента включительно»). Указывается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: created_at.gte&#x3D;2018-07-18T10:51:18.139Z | (optional) defaults to undefined|
| **createdAtGt** | [**string**] | Фильтр по времени создания: время должно быть больше указанного значения («с такого-то момента, не включая его»). Указывается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: created_at.gt&#x3D;2018-07-18T10:51:18.139Z | (optional) defaults to undefined|
| **createdAtLte** | [**string**] | Фильтр по времени создания: время должно быть меньше указанного значения или равно ему («по такой-то момент включительно»). Указывается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: created_at.lte&#x3D;2018-07-18T10:51:18.139Z | (optional) defaults to undefined|
| **createdAtLt** | [**string**] | Фильтр по времени создания: время должно быть меньше указанного значения («по такой-то момент, не включая его»). Указывается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: created_at.lt&#x3D;2018-07-18T10:51:18.139Z | (optional) defaults to undefined|
| **capturedAtGte** | [**string**] | Filter by time of payment capture: time must be greater than the specified value or equal (\&quot;from a certain moment inclusive\&quot;). Specified in the ISO 8601: https://en.wikipedia.org/wiki/ISO_8601 format. Example: captured_at.gte&#x3D;2018-07-18T10:51:18.139Z | (optional) defaults to undefined|
| **capturedAtGt** | [**string**] | Filter by time of payment capture: time must be greater than the specified value (\&quot;from a certain moment exclusive\&quot;). Specified in the ISO 8601: https://en.wikipedia.org/wiki/ISO_8601 format. Example: captured_at.gt&#x3D;2018-07-18T10:51:18.139Z | (optional) defaults to undefined|
| **capturedAtLte** | [**string**] | Filter by time of payment capture: time must be less than the specified value or equal (\&quot;until a certain moment inclusive\&quot;). Specified in the ISO 8601: https://en.wikipedia.org/wiki/ISO_8601 format. Example: captured_at.lte&#x3D;2018-07-18T10:51:18.139Z | (optional) defaults to undefined|
| **capturedAtLt** | [**string**] | Filter by time of payment capture: time must be less than the specified value (\&quot;until a certain moment exclusive\&quot;) Specified in the ISO 8601: https://en.wikipedia.org/wiki/ISO_8601 format. Example: captured_at.lt&#x3D;2018-07-18T10:51:18.139Z | (optional) defaults to undefined|
| **paymentMethod** | **PaymentMethodType** | Filter by payment method: https://yookassa.ru/developers/payment-acceptance/getting-started/payment-methods#all code. Example: payment_method&#x3D;bank_card | (optional) defaults to undefined|
| **status** | **PaymentStatus** | Filter by payment status: https://yookassa.ru/developers/payment-acceptance/getting-started/payment-process#lifecycle. Example: status&#x3D;succeeded | (optional) defaults to undefined|
| **limit** | [**number**] | Размер выдачи результатов запроса — количество объектов, передаваемых в ответе. Возможные значения: от 1 до 100. Пример: limit&#x3D;50 Значение по умолчанию: 10 | (optional) defaults to 10|
| **cursor** | [**string**] | Указатель на следующий фрагмент списка. Пример: cursor&#x3D;37a5c87d-3984-51e8-a7f3-8de646d39ec15 В качестве указателя необходимо использовать значение параметра next_cursor, полученное в ответе на предыдущий запрос. Используется, если в списке больше объектов, чем может поместиться в выдаче (limit), и конец выдачи не достигнут. Пример использования: https://yookassa.ru/developers/using-api/lists#pagination | (optional) defaults to undefined|


### Return type

**PaymentList**

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

# **paymentsPaymentIdCancelPost**
> Payment paymentsPaymentIdCancelPost()

Cancel payments with the waiting_for_capture status. Payment cancelation means you are not ready to dispatch a product or to provide a service to the user. Once you cancel the payment, we will start returning the money to the payer’s account. If the payment was made from a bank card, a YooMoney wallet, or via SberPay, the money will be refunded instantly. If the payment was made using other payment methods, the process can take up to several days. More about capturing and canceling payments: https://yookassa.ru/developers/payment-acceptance/getting-started/payment-process#capture-and-cancel

### Example

```typescript
import {
    PaymentsApi,
    Configuration
} from 'yookassa-client';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let paymentId: string; //Идентификатор платежа. (default to undefined)
let idempotenceKey: string; // (default to '2e1da982-1bb1-41f0-b9cf-758cc8bcf069')

const { status, data } = await apiInstance.paymentsPaymentIdCancelPost(
    paymentId,
    idempotenceKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paymentId** | [**string**] | Идентификатор платежа. | defaults to undefined|
| **idempotenceKey** | [**string**] |  | defaults to '2e1da982-1bb1-41f0-b9cf-758cc8bcf069'|


### Return type

**Payment**

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

# **paymentsPaymentIdCapturePost**
> Payment paymentsPaymentIdCapturePost(paymentCaptureRequest)

Confirm you’re ready to accept the payment. Once the payment is captured, the status will change to succeeded. After that, you can provide the customer with the product or service. You can only capture payments with the waiting_for_capture status, and only for a certain amount of time (depending on the payment method). If you do not capture the payment within the allotted time, the status will change to canceled, and the money will be returned to the user. More about capturing and canceling payments: https://yookassa.ru/developers/payment-acceptance/getting-started/payment-process#capture-and-cancel

### Example

```typescript
import {
    PaymentsApi,
    Configuration,
    PaymentCaptureRequest
} from 'yookassa-client';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let paymentId: string; //Идентификатор платежа. (default to undefined)
let idempotenceKey: string; // (default to '2e1da982-1bb1-41f0-b9cf-758cc8bcf069')
let paymentCaptureRequest: PaymentCaptureRequest; //

const { status, data } = await apiInstance.paymentsPaymentIdCapturePost(
    paymentId,
    idempotenceKey,
    paymentCaptureRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paymentCaptureRequest** | **PaymentCaptureRequest**|  | |
| **paymentId** | [**string**] | Идентификатор платежа. | defaults to undefined|
| **idempotenceKey** | [**string**] |  | defaults to '2e1da982-1bb1-41f0-b9cf-758cc8bcf069'|


### Return type

**Payment**

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

# **paymentsPaymentIdGet**
> Payment paymentsPaymentIdGet()

This request allows you to get the information about the current payment status by its unique ID.

### Example

```typescript
import {
    PaymentsApi,
    Configuration
} from 'yookassa-client';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let paymentId: string; //Идентификатор платежа. (default to undefined)

const { status, data } = await apiInstance.paymentsPaymentIdGet(
    paymentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paymentId** | [**string**] | Идентификатор платежа. | defaults to undefined|


### Return type

**Payment**

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
|**404** | Сущность не найдена. |  -  |
|**500** | Внутренняя ошибка сервера ЮKassa. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **paymentsPost**
> Payment paymentsPost(createPaymentRequest)

To accept a payment, you need to create a payment object: https://yookassa.ru/developers/api#payment_object, Payment. It contains all the necessary payment information (amount, currency, and status). Payments have a linear life cycle, going from one status to the next sequentially.

### Example

```typescript
import {
    PaymentsApi,
    Configuration,
    CreatePaymentRequest
} from 'yookassa-client';

const configuration = new Configuration();
const apiInstance = new PaymentsApi(configuration);

let idempotenceKey: string; // (default to '2e1da982-1bb1-41f0-b9cf-758cc8bcf069')
let createPaymentRequest: CreatePaymentRequest; //

const { status, data } = await apiInstance.paymentsPost(
    idempotenceKey,
    createPaymentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPaymentRequest** | **CreatePaymentRequest**|  | |
| **idempotenceKey** | [**string**] |  | defaults to '2e1da982-1bb1-41f0-b9cf-758cc8bcf069'|


### Return type

**Payment**

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

