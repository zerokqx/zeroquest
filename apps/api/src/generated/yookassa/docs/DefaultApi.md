# DefaultApi

All URIs are relative to *https://api.yookassa.ru/v3*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**dealsDealIdGet**](#dealsdealidget) | **GET** /deals/{deal_id} | Информация о сделке|
|[**dealsGet**](#dealsget) | **GET** /deals | Список сделок|
|[**dealsPost**](#dealspost) | **POST** /deals | Создание сделки|
|[**invoicesInvoiceIdGet**](#invoicesinvoiceidget) | **GET** /invoices/{invoice_id} | Информация о счете|
|[**invoicesPost**](#invoicespost) | **POST** /invoices | Создание счета|
|[**meGet**](#meget) | **GET** /me | Информация о настройках магазина или шлюза|
|[**paymentMethodsPaymentMethodIdGet**](#paymentmethodspaymentmethodidget) | **GET** /payment_methods/{payment_method_id} | Информация о способе оплаты|
|[**paymentMethodsPost**](#paymentmethodspost) | **POST** /payment_methods | Создание способа оплаты|
|[**payoutsGet**](#payoutsget) | **GET** /payouts | List of payouts|
|[**payoutsPayoutIdGet**](#payoutspayoutidget) | **GET** /payouts/{payout_id} | Информация о выплате|
|[**payoutsPost**](#payoutspost) | **POST** /payouts | Создание выплаты|
|[**payoutsSearchGet**](#payoutssearchget) | **GET** /payouts/search | Search for payouts|
|[**personalDataPersonalDataIdGet**](#personaldatapersonaldataidget) | **GET** /personal_data/{personal_data_id} | Информация о персональных данных|
|[**personalDataPost**](#personaldatapost) | **POST** /personal_data | Создание персональных данных|
|[**receiptsGet**](#receiptsget) | **GET** /receipts | Список чеков|
|[**receiptsPost**](#receiptspost) | **POST** /receipts | Создание чека|
|[**receiptsReceiptIdGet**](#receiptsreceiptidget) | **GET** /receipts/{receipt_id} | Информация о чеке|
|[**refundsGet**](#refundsget) | **GET** /refunds | Список возвратов|
|[**refundsPost**](#refundspost) | **POST** /refunds | Создание возврата|
|[**refundsRefundIdGet**](#refundsrefundidget) | **GET** /refunds/{refund_id} | Информация о возврате|
|[**sbpBanksGet**](#sbpbanksget) | **GET** /sbp_banks | Список участников СБП|

# **dealsDealIdGet**
> SafeDeal dealsDealIdGet()

Запрос позволяет получить информацию о текущем состоянии сделки по ее уникальному идентификатору.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'yookassa-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let dealId: string; // (default to undefined)

const { status, data } = await apiInstance.dealsDealIdGet(
    dealId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dealId** | [**string**] |  | defaults to undefined|


### Return type

**SafeDeal**

### Authorization

[OAuth2](../README.md#OAuth2), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Запрос принят в обработку и успешно обработан. |  -  |
|**400** | Запрос не может быть обработан. Причиной может быть неправильный синтаксис запроса, ошибка в обязательных параметрах запроса, их отсутствие или неподдерживаемый метод. |  -  |
|**401** | В заголовке Authorization указан неверный ключ. |  -  |
|**403** | Секретный ключ указан верно, но не хватает прав для совершения операции. |  -  |
|**404** | Сущность не найдена. |  -  |
|**429** | Слишком много запросов одновременно отправляется в API. Повторите запрос позже. |  -  |
|**500** | Внутренняя ошибка сервера ЮKassa. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dealsGet**
> DealList dealsGet()

Запрос позволяет получить список сделок, отфильтрованный по заданным критериям. Подробнее о работе со списками: https://yookassa.ru/developers/using-api/lists

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'yookassa-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createdAtGte: string; //Фильтр по времени создания: время должно быть больше указанного значения или равно ему («с такого-то момента включительно»). Указывается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: created_at.gte=2018-07-18T10:51:18.139Z (optional) (default to undefined)
let createdAtGt: string; //Фильтр по времени создания: время должно быть больше указанного значения («с такого-то момента, не включая его»). Указывается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: created_at.gt=2018-07-18T10:51:18.139Z (optional) (default to undefined)
let createdAtLte: string; //Фильтр по времени создания: время должно быть меньше указанного значения или равно ему («по такой-то момент включительно»). Указывается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: created_at.lte=2018-07-18T10:51:18.139Z (optional) (default to undefined)
let createdAtLt: string; //Фильтр по времени создания: время должно быть меньше указанного значения («по такой-то момент, не включая его»). Указывается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: created_at.lt=2018-07-18T10:51:18.139Z (optional) (default to undefined)
let expiresAtGte: string; //Фильтр по времени автоматического закрытия сделки: время должно быть больше указанного значения или равно ему («с такого-то момента включительно»). Указывается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: expires_at.gte=2018-07-18T10:51:18.139Z (optional) (default to undefined)
let expiresAtGt: string; //Фильтр по времени автоматического закрытия сделки: время должно быть больше указанного значения («с такого-то момента, не включая его»). Указывается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: expires_at.gt=2018-07-18T10:51:18.139Z (optional) (default to undefined)
let expiresAtLte: string; //Фильтр по времени автоматического закрытия сделки: время должно быть меньше указанного значения или равно ему («по такой-то момент включительно»). Указывается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: expires_at.lte=2018-07-18T10:51:18.139Z (optional) (default to undefined)
let expiresAtLt: string; //Фильтр по времени автоматического закрытия сделки: время должно быть меньше указанного значения («по такой-то момент, не включая его»). Указывается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: expires_at.lt=2018-07-18T10:51:18.139Z (optional) (default to undefined)
let status: DealStatus; //Фильтр по статусу сделки. Пример: status=closed (optional) (default to undefined)
let fullTextSearch: string; //Фильтр по описанию сделки — параметру description (например, идентификатор сделки на стороне вашей интернет-площадки в ЮKassa, идентификатор покупателя или продавца). От 4 до 128 символов. Пример: 123554642-2432FF344R (optional) (default to undefined)
let limit: number; //Размер выдачи результатов запроса — количество объектов, передаваемых в ответе. Возможные значения: от 1 до 100. Пример: limit=50 Значение по умолчанию: 10 (optional) (default to 10)
let cursor: string; //Указатель на следующий фрагмент списка. Пример: cursor=37a5c87d-3984-51e8-a7f3-8de646d39ec15 В качестве указателя необходимо использовать значение параметра next_cursor, полученное в ответе на предыдущий запрос. Используется, если в списке больше объектов, чем может поместиться в выдаче (limit), и конец выдачи не достигнут. Пример использования: https://yookassa.ru/developers/using-api/lists#pagination (optional) (default to undefined)

const { status, data } = await apiInstance.dealsGet(
    createdAtGte,
    createdAtGt,
    createdAtLte,
    createdAtLt,
    expiresAtGte,
    expiresAtGt,
    expiresAtLte,
    expiresAtLt,
    status,
    fullTextSearch,
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
| **expiresAtGte** | [**string**] | Фильтр по времени автоматического закрытия сделки: время должно быть больше указанного значения или равно ему («с такого-то момента включительно»). Указывается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: expires_at.gte&#x3D;2018-07-18T10:51:18.139Z | (optional) defaults to undefined|
| **expiresAtGt** | [**string**] | Фильтр по времени автоматического закрытия сделки: время должно быть больше указанного значения («с такого-то момента, не включая его»). Указывается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: expires_at.gt&#x3D;2018-07-18T10:51:18.139Z | (optional) defaults to undefined|
| **expiresAtLte** | [**string**] | Фильтр по времени автоматического закрытия сделки: время должно быть меньше указанного значения или равно ему («по такой-то момент включительно»). Указывается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: expires_at.lte&#x3D;2018-07-18T10:51:18.139Z | (optional) defaults to undefined|
| **expiresAtLt** | [**string**] | Фильтр по времени автоматического закрытия сделки: время должно быть меньше указанного значения («по такой-то момент, не включая его»). Указывается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: expires_at.lt&#x3D;2018-07-18T10:51:18.139Z | (optional) defaults to undefined|
| **status** | **DealStatus** | Фильтр по статусу сделки. Пример: status&#x3D;closed | (optional) defaults to undefined|
| **fullTextSearch** | [**string**] | Фильтр по описанию сделки — параметру description (например, идентификатор сделки на стороне вашей интернет-площадки в ЮKassa, идентификатор покупателя или продавца). От 4 до 128 символов. Пример: 123554642-2432FF344R | (optional) defaults to undefined|
| **limit** | [**number**] | Размер выдачи результатов запроса — количество объектов, передаваемых в ответе. Возможные значения: от 1 до 100. Пример: limit&#x3D;50 Значение по умолчанию: 10 | (optional) defaults to 10|
| **cursor** | [**string**] | Указатель на следующий фрагмент списка. Пример: cursor&#x3D;37a5c87d-3984-51e8-a7f3-8de646d39ec15 В качестве указателя необходимо использовать значение параметра next_cursor, полученное в ответе на предыдущий запрос. Используется, если в списке больше объектов, чем может поместиться в выдаче (limit), и конец выдачи не достигнут. Пример использования: https://yookassa.ru/developers/using-api/lists#pagination | (optional) defaults to undefined|


### Return type

**DealList**

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
|**429** | Слишком много запросов одновременно отправляется в API. Повторите запрос позже. |  -  |
|**500** | Внутренняя ошибка сервера ЮKassa. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dealsPost**
> SafeDeal dealsPost(safeDealRequest)

Запрос позволяет создать сделку, в рамках которой необходимо принять оплату от покупателя и перечислить ее продавцу.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    SafeDealRequest
} from 'yookassa-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let idempotenceKey: string; // (default to '2e1da982-1bb1-41f0-b9cf-758cc8bcf069')
let safeDealRequest: SafeDealRequest; //

const { status, data } = await apiInstance.dealsPost(
    idempotenceKey,
    safeDealRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **safeDealRequest** | **SafeDealRequest**|  | |
| **idempotenceKey** | [**string**] |  | defaults to '2e1da982-1bb1-41f0-b9cf-758cc8bcf069'|


### Return type

**SafeDeal**

### Authorization

[OAuth2](../README.md#OAuth2), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Запрос принят в обработку и успешно обработан. |  -  |
|**400** | Запрос не может быть обработан. Причиной может быть неправильный синтаксис запроса, ошибка в обязательных параметрах запроса, их отсутствие или неподдерживаемый метод. |  -  |
|**401** | В заголовке Authorization указан неверный ключ. |  -  |
|**403** | Секретный ключ указан верно, но не хватает прав для совершения операции. |  -  |
|**429** | Слишком много запросов одновременно отправляется в API. Повторите запрос позже. |  -  |
|**500** | Внутренняя ошибка сервера ЮKassa. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **invoicesInvoiceIdGet**
> Invoice invoicesInvoiceIdGet()

Используйте этот запрос, чтобы получить информацию о текущем состоянии счета по его уникальному идентификатору.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'yookassa-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let invoiceId: string; //Invoice ID in YooMoney. (default to 'in-e44e8088-bd73-43b1-959a-954f3a7d0c54?>')

const { status, data } = await apiInstance.invoicesInvoiceIdGet(
    invoiceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **invoiceId** | [**string**] | Invoice ID in YooMoney. | defaults to 'in-e44e8088-bd73-43b1-959a-954f3a7d0c54?>'|


### Return type

**Invoice**

### Authorization

[BasicAuth](../README.md#BasicAuth)

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

# **invoicesPost**
> Invoice invoicesPost(createInvoiceRequest)

Используйте этот запрос, чтобы создать в ЮKassa объект счета: https://yookassa.ru/developers/api#invoice_object. В запросе необходимо передать данные о заказе, которые отобразятся на странице счета, и данные для проведения платежа.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateInvoiceRequest
} from 'yookassa-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let idempotenceKey: string; // (default to '2e1da982-1bb1-41f0-b9cf-758cc8bcf069')
let createInvoiceRequest: CreateInvoiceRequest; //

const { status, data } = await apiInstance.invoicesPost(
    idempotenceKey,
    createInvoiceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createInvoiceRequest** | **CreateInvoiceRequest**|  | |
| **idempotenceKey** | [**string**] |  | defaults to '2e1da982-1bb1-41f0-b9cf-758cc8bcf069'|


### Return type

**Invoice**

### Authorization

[BasicAuth](../README.md#BasicAuth)

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

# **meGet**
> Me meGet()

С помощью этого запроса вы можете получить информацию о магазине или шлюзе: * Для Сплитования платежей: https://yookassa.ru/developers/solutions-for-platforms/split-payments/basics: в запросе необходимо передать параметр on_behalf_of с идентификатором магазина продавца и ваши данные для аутентификации: https://yookassa.ru/developers/using-api/interaction-format#auth (идентификатор и секретный ключ вашей платформы). * Для партнеров: https://yookassa.ru/developers/solutions-for-platforms/partners-api/basics: в запросе необходимо передать OAuth-токен магазина. * Для выплат: https://yookassa.ru/developers/payouts/overview: в запросе необходимо передать ваши данные для аутентификации: https://yookassa.ru/developers/using-api/interaction-format#auth (идентификатор и секретный ключ вашего шлюза).

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'yookassa-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let onBehalfOf: string; //Только для тех, кто использует Сплитование платежей: https://yookassa.ru/developers/solutions-for-platforms/split-payments/basics. Идентификатор магазина продавца, подключенного к вашей платформе, информацию о котором вы хотите узнать. (optional) (default to undefined)

const { status, data } = await apiInstance.meGet(
    onBehalfOf
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **onBehalfOf** | [**string**] | Только для тех, кто использует Сплитование платежей: https://yookassa.ru/developers/solutions-for-platforms/split-payments/basics. Идентификатор магазина продавца, подключенного к вашей платформе, информацию о котором вы хотите узнать. | (optional) defaults to undefined|


### Return type

**Me**

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

# **paymentMethodsPaymentMethodIdGet**
> SavePaymentMethodBankCard paymentMethodsPaymentMethodIdGet()

Используйте этот запрос, чтобы получить информацию о текущем состоянии способа оплаты по его уникальному идентификатору.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'yookassa-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let paymentMethodId: string; //Идентификатор сохраненного способа оплаты. (default to undefined)

const { status, data } = await apiInstance.paymentMethodsPaymentMethodIdGet(
    paymentMethodId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paymentMethodId** | [**string**] | Идентификатор сохраненного способа оплаты. | defaults to undefined|


### Return type

**SavePaymentMethodBankCard**

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
|**429** | Слишком много запросов одновременно отправляется в API. Повторите запрос позже. |  -  |
|**500** | Внутренняя ошибка сервера ЮKassa. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **paymentMethodsPost**
> SavePaymentMethodBankCard paymentMethodsPost(savePaymentMethodDataBankCard)

Используйте этот запрос, чтобы создать в ЮKassa объект способа оплаты: https://yookassa.ru/developers/api#payment_method_object. В запросе необходимо передать код способа оплаты, который вы хотите сохранить, и при необходимости дополнительные параметры, связанные с той функциональностью, которую вы хотите использовать. Идентификатор созданного способа оплаты вы можете использовать при проведении автоплатежей: https://yookassa.ru/developers/payment-acceptance/scenario-extensions/recurring-payments/create-recurring или выплат: https://yookassa.ru/developers/payouts/scenario-extensions/multipurpose-token.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    SavePaymentMethodDataBankCard
} from 'yookassa-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let idempotenceKey: string; // (default to '2e1da982-1bb1-41f0-b9cf-758cc8bcf069')
let savePaymentMethodDataBankCard: SavePaymentMethodDataBankCard; //

const { status, data } = await apiInstance.paymentMethodsPost(
    idempotenceKey,
    savePaymentMethodDataBankCard
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **savePaymentMethodDataBankCard** | **SavePaymentMethodDataBankCard**|  | |
| **idempotenceKey** | [**string**] |  | defaults to '2e1da982-1bb1-41f0-b9cf-758cc8bcf069'|


### Return type

**SavePaymentMethodBankCard**

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
|**429** | Слишком много запросов одновременно отправляется в API. Повторите запрос позже. |  -  |
|**500** | Внутренняя ошибка сервера ЮKassa. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **payoutsGet**
> PayoutsList payoutsGet()

Use this request to get a list of payouts. You can download payments created over the last 3 years. You can filter the list by specified criteria. Request authentication details: https://yookassa.ru/developers/using-api/interaction-format#auth depend on which payment solution you are using: basic payouts: https://yookassa.ru/developers/payouts/overview or payouts within the Safe Deal: https://yookassa.ru/developers/solutions-for-platforms/safe-deal/basics. More about working with lists: https://yookassa.ru/developers/using-api/lists

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'yookassa-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createdAtGte: string; //Фильтр по времени создания: время должно быть больше указанного значения или равно ему («с такого-то момента включительно»). Указывается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: created_at.gte=2018-07-18T10:51:18.139Z (optional) (default to undefined)
let createdAtGt: string; //Фильтр по времени создания: время должно быть больше указанного значения («с такого-то момента, не включая его»). Указывается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: created_at.gt=2018-07-18T10:51:18.139Z (optional) (default to undefined)
let createdAtLte: string; //Фильтр по времени создания: время должно быть меньше указанного значения или равно ему («по такой-то момент включительно»). Указывается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: created_at.lte=2018-07-18T10:51:18.139Z (optional) (default to undefined)
let createdAtLt: string; //Фильтр по времени создания: время должно быть меньше указанного значения («по такой-то момент, не включая его»). Указывается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: created_at.lt=2018-07-18T10:51:18.139Z (optional) (default to undefined)
let succeededAtGte: string; //Filter by time of a successful payout processing: time must be greater than the specified value or equal (\"from a certain moment inclusive\"). Specified in the ISO 8601: https://en.wikipedia.org/wiki/ISO_8601 format. Example: succeeded_at.gte=2018-07-18T10:51:18.139Z (optional) (default to undefined)
let succeededAtGt: string; //Filter by time of a successful payout processing: time must be greater than the specified value (\"from a certain moment exclusive\"). Specified in the ISO 8601: https://en.wikipedia.org/wiki/ISO_8601 format. Example: succeeded_at.gt=2018-07-18T10:51:18.139Z (optional) (default to undefined)
let succeededAtLte: string; //Filter by time of a successful payout processing: time must be less than the specified value or equal (\"until a certain moment inclusive\"). Specified in the ISO 8601: https://en.wikipedia.org/wiki/ISO_8601 format. Example: succeeded_at.lte=2018-07-18T10:51:18.139Z (optional) (default to undefined)
let succeededAtLt: string; //Filter by time of a successful payout processing: time must be less than the specified value (\"until a certain moment exclusive\"). Specified in the ISO 8601: https://en.wikipedia.org/wiki/ISO_8601 format. Example: succeeded_at.lt=2018-07-18T10:51:18.139Z (optional) (default to undefined)
let payoutDestinationType: PayoutDestinationDataType; //Filter by the method of receiving the payout: https://yookassa.ru/developers/payouts/getting-started/payout-types-and-limits#types-destination code. Example: payout_destination.type=bank_card (optional) (default to undefined)
let status: PayoutStatus; //Filter by payout status: https://yookassa.ru/developers/api#payout_object_status. Example: status=succeeded (optional) (default to undefined)
let limit: number; //Размер выдачи результатов запроса — количество объектов, передаваемых в ответе. Возможные значения: от 1 до 100. Пример: limit=50 Значение по умолчанию: 10 (optional) (default to 10)
let cursor: string; //Указатель на следующий фрагмент списка. Пример: cursor=37a5c87d-3984-51e8-a7f3-8de646d39ec15 В качестве указателя необходимо использовать значение параметра next_cursor, полученное в ответе на предыдущий запрос. Используется, если в списке больше объектов, чем может поместиться в выдаче (limit), и конец выдачи не достигнут. Пример использования: https://yookassa.ru/developers/using-api/lists#pagination (optional) (default to undefined)

const { status, data } = await apiInstance.payoutsGet(
    createdAtGte,
    createdAtGt,
    createdAtLte,
    createdAtLt,
    succeededAtGte,
    succeededAtGt,
    succeededAtLte,
    succeededAtLt,
    payoutDestinationType,
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
| **succeededAtGte** | [**string**] | Filter by time of a successful payout processing: time must be greater than the specified value or equal (\&quot;from a certain moment inclusive\&quot;). Specified in the ISO 8601: https://en.wikipedia.org/wiki/ISO_8601 format. Example: succeeded_at.gte&#x3D;2018-07-18T10:51:18.139Z | (optional) defaults to undefined|
| **succeededAtGt** | [**string**] | Filter by time of a successful payout processing: time must be greater than the specified value (\&quot;from a certain moment exclusive\&quot;). Specified in the ISO 8601: https://en.wikipedia.org/wiki/ISO_8601 format. Example: succeeded_at.gt&#x3D;2018-07-18T10:51:18.139Z | (optional) defaults to undefined|
| **succeededAtLte** | [**string**] | Filter by time of a successful payout processing: time must be less than the specified value or equal (\&quot;until a certain moment inclusive\&quot;). Specified in the ISO 8601: https://en.wikipedia.org/wiki/ISO_8601 format. Example: succeeded_at.lte&#x3D;2018-07-18T10:51:18.139Z | (optional) defaults to undefined|
| **succeededAtLt** | [**string**] | Filter by time of a successful payout processing: time must be less than the specified value (\&quot;until a certain moment exclusive\&quot;). Specified in the ISO 8601: https://en.wikipedia.org/wiki/ISO_8601 format. Example: succeeded_at.lt&#x3D;2018-07-18T10:51:18.139Z | (optional) defaults to undefined|
| **payoutDestinationType** | **PayoutDestinationDataType** | Filter by the method of receiving the payout: https://yookassa.ru/developers/payouts/getting-started/payout-types-and-limits#types-destination code. Example: payout_destination.type&#x3D;bank_card | (optional) defaults to undefined|
| **status** | **PayoutStatus** | Filter by payout status: https://yookassa.ru/developers/api#payout_object_status. Example: status&#x3D;succeeded | (optional) defaults to undefined|
| **limit** | [**number**] | Размер выдачи результатов запроса — количество объектов, передаваемых в ответе. Возможные значения: от 1 до 100. Пример: limit&#x3D;50 Значение по умолчанию: 10 | (optional) defaults to 10|
| **cursor** | [**string**] | Указатель на следующий фрагмент списка. Пример: cursor&#x3D;37a5c87d-3984-51e8-a7f3-8de646d39ec15 В качестве указателя необходимо использовать значение параметра next_cursor, полученное в ответе на предыдущий запрос. Используется, если в списке больше объектов, чем может поместиться в выдаче (limit), и конец выдачи не достигнут. Пример использования: https://yookassa.ru/developers/using-api/lists#pagination | (optional) defaults to undefined|


### Return type

**PayoutsList**

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
|**429** | Слишком много запросов одновременно отправляется в API. Повторите запрос позже. |  -  |
|**500** | Внутренняя ошибка сервера ЮKassa. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **payoutsPayoutIdGet**
> Payout payoutsPayoutIdGet()

Используйте этот запрос, чтобы получить информацию о текущем состоянии выплаты по ее уникальному идентификатору. Данные для аутентификации: https://yookassa.ru/developers/using-api/interaction-format#auth запросов зависят от того, какое платежное решение вы используете — обычные выплаты: https://yookassa.ru/developers/payouts/overview или выплаты в рамках Безопасной сделки: https://yookassa.ru/developers/solutions-for-platforms/safe-deal/basics.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'yookassa-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let payoutId: string; // (default to undefined)

const { status, data } = await apiInstance.payoutsPayoutIdGet(
    payoutId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **payoutId** | [**string**] |  | defaults to undefined|


### Return type

**Payout**

### Authorization

[OAuth2](../README.md#OAuth2), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Запрос принят в обработку и успешно обработан. |  -  |
|**400** | Запрос не может быть обработан. Причиной может быть неправильный синтаксис запроса, ошибка в обязательных параметрах запроса, их отсутствие или неподдерживаемый метод. |  -  |
|**401** | В заголовке Authorization указан неверный ключ. |  -  |
|**403** | Секретный ключ указан верно, но не хватает прав для совершения операции. |  -  |
|**404** | Сущность не найдена. |  -  |
|**429** | Слишком много запросов одновременно отправляется в API. Повторите запрос позже. |  -  |
|**500** | Внутренняя ошибка сервера ЮKassa. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **payoutsPost**
> Payout payoutsPost(payoutRequest)

Используйте этот запрос, чтобы создать в ЮKassa объект выплаты: https://yookassa.ru/developers/api#payout_object. В запросе необходимо передать сумму выплаты, данные о способе получения выплаты (например, номер кошелька ЮMoney), описание выплаты и при необходимости дополнительные параметры, связанные с той функциональностью, которую вы хотите использовать. Передаваемые параметры и данные для аутентификации: https://yookassa.ru/developers/using-api/interaction-format#auth запросов зависят от того, какое платежное решение вы используете — обычные выплаты: https://yookassa.ru/developers/payouts/overview или выплаты в рамках Безопасной сделки: https://yookassa.ru/developers/solutions-for-platforms/safe-deal/basics.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    PayoutRequest
} from 'yookassa-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let idempotenceKey: string; // (default to '2e1da982-1bb1-41f0-b9cf-758cc8bcf069')
let payoutRequest: PayoutRequest; //

const { status, data } = await apiInstance.payoutsPost(
    idempotenceKey,
    payoutRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **payoutRequest** | **PayoutRequest**|  | |
| **idempotenceKey** | [**string**] |  | defaults to '2e1da982-1bb1-41f0-b9cf-758cc8bcf069'|


### Return type

**Payout**

### Authorization

[OAuth2](../README.md#OAuth2), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Запрос принят в обработку и успешно обработан. |  -  |
|**400** | Запрос не может быть обработан. Причиной может быть неправильный синтаксис запроса, ошибка в обязательных параметрах запроса, их отсутствие или неподдерживаемый метод. |  -  |
|**401** | В заголовке Authorization указан неверный ключ. |  -  |
|**403** | Секретный ключ указан верно, но не хватает прав для совершения операции. |  -  |
|**429** | Слишком много запросов одновременно отправляется в API. Повторите запрос позже. |  -  |
|**500** | Внутренняя ошибка сервера ЮKassa. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **payoutsSearchGet**
> PayoutsList payoutsSearchGet()

Use this request to search for payouts by the specified criteria. Available only for payouts created over the last 3 months. At this time, only search by the metadata parameter is available. You can also specify the date and time when the payout was created (the created_at parameter). Request authentication details: https://yookassa.ru/developers/using-api/interaction-format#auth depend on which payment solution you are using: basic payouts: https://yookassa.ru/developers/payouts/overview or payouts within the Safe Deal: https://yookassa.ru/developers/solutions-for-platforms/safe-deal/basics.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'yookassa-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createdAtGte: string; //Фильтр по времени создания: время должно быть больше указанного значения или равно ему («с такого-то момента включительно»). Указывается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: created_at.gte=2018-07-18T10:51:18.139Z (optional) (default to undefined)
let createdAtGt: string; //Фильтр по времени создания: время должно быть больше указанного значения («с такого-то момента, не включая его»). Указывается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: created_at.gt=2018-07-18T10:51:18.139Z (optional) (default to undefined)
let createdAtLte: string; //Фильтр по времени создания: время должно быть меньше указанного значения или равно ему («по такой-то момент включительно»). Указывается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: created_at.lte=2018-07-18T10:51:18.139Z (optional) (default to undefined)
let createdAtLt: string; //Фильтр по времени создания: время должно быть меньше указанного значения («по такой-то момент, не включая его»). Указывается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: created_at.lt=2018-07-18T10:51:18.139Z (optional) (default to undefined)
let metadata: { [key: string]: string; }; //Filter by the metadata object. Strict \"key-value\" pair search: objects that have an exact key and value match in metadata are returned. Restrictions: you can specify a maximum of one \"key-value\" pair, the key name must not be longer than 32 characters, the key value must not be longer than 512 characters, and the data type is a string in UTF-8 format in URL-encoded form. Template: metadata[key]=value Example: metadata%5Boperation_id%5D=e2ab2e1c-776d-4376-aba8-d2099243d1f6 (optional) (default to undefined)
let limit: number; //Размер выдачи результатов запроса — количество объектов, передаваемых в ответе. Возможные значения: от 1 до 100. Пример: limit=50 Значение по умолчанию: 10 (optional) (default to 10)
let cursor: string; //Указатель на следующий фрагмент списка. Пример: cursor=37a5c87d-3984-51e8-a7f3-8de646d39ec15 В качестве указателя необходимо использовать значение параметра next_cursor, полученное в ответе на предыдущий запрос. Используется, если в списке больше объектов, чем может поместиться в выдаче (limit), и конец выдачи не достигнут. Пример использования: https://yookassa.ru/developers/using-api/lists#pagination (optional) (default to undefined)

const { status, data } = await apiInstance.payoutsSearchGet(
    createdAtGte,
    createdAtGt,
    createdAtLte,
    createdAtLt,
    metadata,
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
| **metadata** | **{ [key: string]: string; }** | Filter by the metadata object. Strict \&quot;key-value\&quot; pair search: objects that have an exact key and value match in metadata are returned. Restrictions: you can specify a maximum of one \&quot;key-value\&quot; pair, the key name must not be longer than 32 characters, the key value must not be longer than 512 characters, and the data type is a string in UTF-8 format in URL-encoded form. Template: metadata[key]&#x3D;value Example: metadata%5Boperation_id%5D&#x3D;e2ab2e1c-776d-4376-aba8-d2099243d1f6 | (optional) defaults to undefined|
| **limit** | [**number**] | Размер выдачи результатов запроса — количество объектов, передаваемых в ответе. Возможные значения: от 1 до 100. Пример: limit&#x3D;50 Значение по умолчанию: 10 | (optional) defaults to 10|
| **cursor** | [**string**] | Указатель на следующий фрагмент списка. Пример: cursor&#x3D;37a5c87d-3984-51e8-a7f3-8de646d39ec15 В качестве указателя необходимо использовать значение параметра next_cursor, полученное в ответе на предыдущий запрос. Используется, если в списке больше объектов, чем может поместиться в выдаче (limit), и конец выдачи не достигнут. Пример использования: https://yookassa.ru/developers/using-api/lists#pagination | (optional) defaults to undefined|


### Return type

**PayoutsList**

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
|**429** | Слишком много запросов одновременно отправляется в API. Повторите запрос позже. |  -  |
|**500** | Внутренняя ошибка сервера ЮKassa. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **personalDataPersonalDataIdGet**
> PersonalData personalDataPersonalDataIdGet()

С помощью этого запроса вы можете получить информацию о текущем статусе объекта персональных данных по его уникальному идентификатору.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'yookassa-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let personalDataId: string; // (default to undefined)

const { status, data } = await apiInstance.personalDataPersonalDataIdGet(
    personalDataId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **personalDataId** | [**string**] |  | defaults to undefined|


### Return type

**PersonalData**

### Authorization

[OAuth2](../README.md#OAuth2), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Запрос принят в обработку и успешно обработан. |  -  |
|**400** | Запрос не может быть обработан. Причиной может быть неправильный синтаксис запроса, ошибка в обязательных параметрах запроса, их отсутствие или неподдерживаемый метод. |  -  |
|**401** | В заголовке Authorization указан неверный ключ. |  -  |
|**403** | Секретный ключ указан верно, но не хватает прав для совершения операции. |  -  |
|**404** | Сущность не найдена. |  -  |
|**429** | Слишком много запросов одновременно отправляется в API. Повторите запрос позже. |  -  |
|**500** | Внутренняя ошибка сервера ЮKassa. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **personalDataPost**
> PersonalData personalDataPost(personalDataPostRequest)

Используйте этот запрос, чтобы создать в ЮKassa объект персональных данных: https://yookassa.ru/developers/api#personal_data_object. В запросе необходимо указать тип данных (с какой целью они будут использоваться) и передать информацию о пользователе: фамилию, имя, отчество и другие — в зависимости от выбранного типа. Идентификатор созданного объекта персональных данных необходимо использовать в запросе на создание выплаты: https://yookassa.ru/developers/api#create_payout.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    PersonalDataPostRequest
} from 'yookassa-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let idempotenceKey: string; // (default to '2e1da982-1bb1-41f0-b9cf-758cc8bcf069')
let personalDataPostRequest: PersonalDataPostRequest; //

const { status, data } = await apiInstance.personalDataPost(
    idempotenceKey,
    personalDataPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **personalDataPostRequest** | **PersonalDataPostRequest**|  | |
| **idempotenceKey** | [**string**] |  | defaults to '2e1da982-1bb1-41f0-b9cf-758cc8bcf069'|


### Return type

**PersonalData**

### Authorization

[OAuth2](../README.md#OAuth2), [BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Запрос принят в обработку и успешно обработан. |  -  |
|**400** | Запрос не может быть обработан. Причиной может быть неправильный синтаксис запроса, ошибка в обязательных параметрах запроса, их отсутствие или неподдерживаемый метод. |  -  |
|**401** | В заголовке Authorization указан неверный ключ. |  -  |
|**403** | Секретный ключ указан верно, но не хватает прав для совершения операции. |  -  |
|**429** | Слишком много запросов одновременно отправляется в API. Повторите запрос позже. |  -  |
|**500** | Внутренняя ошибка сервера ЮKassa. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **receiptsGet**
> ReceiptList receiptsGet()

Запрос позволяет получить список чеков, отфильтрованный по заданным критериям. Можно запросить чеки по конкретному платежу, чеки по конкретному возврату или все чеки магазина. Подробнее о работе со списками: https://yookassa.ru/developers/using-api/lists

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'yookassa-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createdAtGte: string; //Фильтр по времени создания: время должно быть больше указанного значения или равно ему («с такого-то момента включительно»). Указывается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: created_at.gte=2018-07-18T10:51:18.139Z (optional) (default to undefined)
let createdAtGt: string; //Фильтр по времени создания: время должно быть больше указанного значения («с такого-то момента, не включая его»). Указывается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: created_at.gt=2018-07-18T10:51:18.139Z (optional) (default to undefined)
let createdAtLte: string; //Фильтр по времени создания: время должно быть меньше указанного значения или равно ему («по такой-то момент включительно»). Указывается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: created_at.lte=2018-07-18T10:51:18.139Z (optional) (default to undefined)
let createdAtLt: string; //Фильтр по времени создания: время должно быть меньше указанного значения («по такой-то момент, не включая его»). Указывается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: created_at.lt=2018-07-18T10:51:18.139Z (optional) (default to undefined)
let status: ReceiptRegistrationStatus; //Фильтр по статусу чека. Возможные значения: pending — в обработке, succeeded — успешно зарегистрирован, canceled — отменен. Пример: status=succeeded (optional) (default to undefined)
let paymentId: string; //Фильтр по идентификатору платежа: https://yookassa.ru/developers/api#payment_object_id (получить все чеки для указанного платежа). Пример: payment_id=1da5c87d-0984-50e8-a7f3-8de646dd9ec9 В запросе можно передать только что-то одно: или идентификатор платежа, или идентификатор возврата. (optional) (default to undefined)
let refundId: string; //Фильтр по идентификатору возврата: https://yookassa.ru/developers/api#refund_object_id (получить все чеки для указанного возврата). Пример: refund_id=1da5c87d-0984-50e8-a7f3-8de646dd9ec9 В запросе можно передать только что-то одно: или идентификатор платежа, или идентификатор возврата. (optional) (default to undefined)
let limit: number; //Размер выдачи результатов запроса — количество объектов, передаваемых в ответе. Возможные значения: от 1 до 100. Пример: limit=50 Значение по умолчанию: 10 (optional) (default to 10)
let cursor: string; //Указатель на следующий фрагмент списка. Пример: cursor=37a5c87d-3984-51e8-a7f3-8de646d39ec15 В качестве указателя необходимо использовать значение параметра next_cursor, полученное в ответе на предыдущий запрос. Используется, если в списке больше объектов, чем может поместиться в выдаче (limit), и конец выдачи не достигнут. Пример использования: https://yookassa.ru/developers/using-api/lists#pagination (optional) (default to undefined)

const { status, data } = await apiInstance.receiptsGet(
    createdAtGte,
    createdAtGt,
    createdAtLte,
    createdAtLt,
    status,
    paymentId,
    refundId,
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
| **status** | **ReceiptRegistrationStatus** | Фильтр по статусу чека. Возможные значения: pending — в обработке, succeeded — успешно зарегистрирован, canceled — отменен. Пример: status&#x3D;succeeded | (optional) defaults to undefined|
| **paymentId** | [**string**] | Фильтр по идентификатору платежа: https://yookassa.ru/developers/api#payment_object_id (получить все чеки для указанного платежа). Пример: payment_id&#x3D;1da5c87d-0984-50e8-a7f3-8de646dd9ec9 В запросе можно передать только что-то одно: или идентификатор платежа, или идентификатор возврата. | (optional) defaults to undefined|
| **refundId** | [**string**] | Фильтр по идентификатору возврата: https://yookassa.ru/developers/api#refund_object_id (получить все чеки для указанного возврата). Пример: refund_id&#x3D;1da5c87d-0984-50e8-a7f3-8de646dd9ec9 В запросе можно передать только что-то одно: или идентификатор платежа, или идентификатор возврата. | (optional) defaults to undefined|
| **limit** | [**number**] | Размер выдачи результатов запроса — количество объектов, передаваемых в ответе. Возможные значения: от 1 до 100. Пример: limit&#x3D;50 Значение по умолчанию: 10 | (optional) defaults to 10|
| **cursor** | [**string**] | Указатель на следующий фрагмент списка. Пример: cursor&#x3D;37a5c87d-3984-51e8-a7f3-8de646d39ec15 В качестве указателя необходимо использовать значение параметра next_cursor, полученное в ответе на предыдущий запрос. Используется, если в списке больше объектов, чем может поместиться в выдаче (limit), и конец выдачи не достигнут. Пример использования: https://yookassa.ru/developers/using-api/lists#pagination | (optional) defaults to undefined|


### Return type

**ReceiptList**

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

# **receiptsPost**
> Receipt receiptsPost(postReceiptData)

Используйте этот запрос при оплате с соблюдением требований 54-ФЗ: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/basics, чтобы создать чек зачета предоплаты. Если вы работаете по сценарию Сначала платеж, потом чек: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics#receipt-after-payment, в запросе также нужно передавать данные для формирования чека прихода и чека возврата прихода.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    PostReceiptData
} from 'yookassa-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let idempotenceKey: string; // (default to '2e1da982-1bb1-41f0-b9cf-758cc8bcf069')
let postReceiptData: PostReceiptData; //

const { status, data } = await apiInstance.receiptsPost(
    idempotenceKey,
    postReceiptData
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postReceiptData** | **PostReceiptData**|  | |
| **idempotenceKey** | [**string**] |  | defaults to '2e1da982-1bb1-41f0-b9cf-758cc8bcf069'|


### Return type

**Receipt**

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

# **receiptsReceiptIdGet**
> Receipt receiptsReceiptIdGet()

Запрос позволяет получить информацию о текущем состоянии чека по его уникальному идентификатору.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'yookassa-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let receiptId: string; //Идентификатор чека. (default to undefined)

const { status, data } = await apiInstance.receiptsReceiptIdGet(
    receiptId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **receiptId** | [**string**] | Идентификатор чека. | defaults to undefined|


### Return type

**Receipt**

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

# **refundsGet**
> RefundList refundsGet()

Use this request to get a list of refunds. You can download refunds created over the last 3 years. You can filter the list by specified criteria. More about working with lists: https://yookassa.ru/developers/using-api/lists

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'yookassa-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createdAtGte: string; //Фильтр по времени создания: время должно быть больше указанного значения или равно ему («с такого-то момента включительно»). Указывается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: created_at.gte=2018-07-18T10:51:18.139Z (optional) (default to undefined)
let createdAtGt: string; //Фильтр по времени создания: время должно быть больше указанного значения («с такого-то момента, не включая его»). Указывается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: created_at.gt=2018-07-18T10:51:18.139Z (optional) (default to undefined)
let createdAtLte: string; //Фильтр по времени создания: время должно быть меньше указанного значения или равно ему («по такой-то момент включительно»). Указывается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: created_at.lte=2018-07-18T10:51:18.139Z (optional) (default to undefined)
let createdAtLt: string; //Фильтр по времени создания: время должно быть меньше указанного значения («по такой-то момент, не включая его»). Указывается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: created_at.lt=2018-07-18T10:51:18.139Z (optional) (default to undefined)
let paymentId: string; //Фильтр по идентификатору платежа: https://yookassa.ru/developers/api#payment_object_id (получить все возвраты по платежу). Пример: payment_id=1da5c87d-0984-50e8-a7f3-8de646dd9ec9 (optional) (default to undefined)
let status: RefundStatus; //Фильтр по статусу возврата. Возможные значения: pending — в обработке, succeeded — успешно выполнен, canceled — отменен. Пример: status=succeeded (optional) (default to undefined)
let limit: number; //Размер выдачи результатов запроса — количество объектов, передаваемых в ответе. Возможные значения: от 1 до 100. Пример: limit=50 Значение по умолчанию: 10 (optional) (default to 10)
let cursor: string; //Указатель на следующий фрагмент списка. Пример: cursor=37a5c87d-3984-51e8-a7f3-8de646d39ec15 В качестве указателя необходимо использовать значение параметра next_cursor, полученное в ответе на предыдущий запрос. Используется, если в списке больше объектов, чем может поместиться в выдаче (limit), и конец выдачи не достигнут. Пример использования: https://yookassa.ru/developers/using-api/lists#pagination (optional) (default to undefined)

const { status, data } = await apiInstance.refundsGet(
    createdAtGte,
    createdAtGt,
    createdAtLte,
    createdAtLt,
    paymentId,
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
| **paymentId** | [**string**] | Фильтр по идентификатору платежа: https://yookassa.ru/developers/api#payment_object_id (получить все возвраты по платежу). Пример: payment_id&#x3D;1da5c87d-0984-50e8-a7f3-8de646dd9ec9 | (optional) defaults to undefined|
| **status** | **RefundStatus** | Фильтр по статусу возврата. Возможные значения: pending — в обработке, succeeded — успешно выполнен, canceled — отменен. Пример: status&#x3D;succeeded | (optional) defaults to undefined|
| **limit** | [**number**] | Размер выдачи результатов запроса — количество объектов, передаваемых в ответе. Возможные значения: от 1 до 100. Пример: limit&#x3D;50 Значение по умолчанию: 10 | (optional) defaults to 10|
| **cursor** | [**string**] | Указатель на следующий фрагмент списка. Пример: cursor&#x3D;37a5c87d-3984-51e8-a7f3-8de646d39ec15 В качестве указателя необходимо использовать значение параметра next_cursor, полученное в ответе на предыдущий запрос. Используется, если в списке больше объектов, чем может поместиться в выдаче (limit), и конец выдачи не достигнут. Пример использования: https://yookassa.ru/developers/using-api/lists#pagination | (optional) defaults to undefined|


### Return type

**RefundList**

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

# **refundsPost**
> Refund refundsPost(refundRequest)

Создает возврат успешного платежа на указанную сумму. Платеж можно вернуть только в течение трех лет с момента его создания: https://yookassa.ru/developers/api#create_payment. Комиссия ЮKassa за проведение платежа не возвращается.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    RefundRequest
} from 'yookassa-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let idempotenceKey: string; // (default to '2e1da982-1bb1-41f0-b9cf-758cc8bcf069')
let refundRequest: RefundRequest; //

const { status, data } = await apiInstance.refundsPost(
    idempotenceKey,
    refundRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **refundRequest** | **RefundRequest**|  | |
| **idempotenceKey** | [**string**] |  | defaults to '2e1da982-1bb1-41f0-b9cf-758cc8bcf069'|


### Return type

**Refund**

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

# **refundsRefundIdGet**
> Refund refundsRefundIdGet()

Запрос позволяет получить информацию о текущем состоянии возврата по его уникальному идентификатору.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'yookassa-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let refundId: string; //Идентификатор возврата. (default to 'cae993f2-eb15-45f5-91c5-efb87107ae10')

const { status, data } = await apiInstance.refundsRefundIdGet(
    refundId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **refundId** | [**string**] | Идентификатор возврата. | defaults to 'cae993f2-eb15-45f5-91c5-efb87107ae10'|


### Return type

**Refund**

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

# **sbpBanksGet**
> GetSbpBanksResponse sbpBanksGet()

С помощью этого запроса вы можете получить актуальный список всех участников СБП. Список нужно вывести получателю выплаты, идентификатор выбранного участника СБП необходимо использовать в запросе на создание выплаты: https://yookassa.ru/developers/api#create_payout. Подробнее о выплатах через СБП: https://yookassa.ru/developers/payouts/making-payouts/sbp

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'yookassa-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.sbpBanksGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetSbpBanksResponse**

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
|**429** | Слишком много запросов одновременно отправляется в API. Повторите запрос позже. |  -  |
|**500** | Внутренняя ошибка сервера ЮKassa. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

