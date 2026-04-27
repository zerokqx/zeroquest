# PaymentConfirmation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**ConfirmationType**](ConfirmationType.md) |  | [default to undefined]
**enforce** | **boolean** | Запрос на проведение платежа с аутентификацией по 3-D Secure. Будет работать, если оплату банковской картой вы по умолчанию принимаете без подтверждения платежа пользователем. В остальных случаях аутентификацией по 3-D Secure будет управлять ЮKassa. Если хотите принимать платежи без дополнительного подтверждения пользователем, напишите вашему менеджеру ЮKassa. | [optional] [default to false]
**return_url** | **string** | URL, на который вернется пользователь после подтверждения или отмены платежа на веб-странице. Не более 2048 символов. | [optional] [default to undefined]
**confirmation_url** | **string** | Диплинк на мобильное приложение, в котором пользователь подтверждает платеж. | [default to undefined]
**confirmation_data** | **string** | Данные для генерации QR-кода. | [default to undefined]
**confirmation_token** | **string** | Токен для инициализации платежного виджета ЮKassa: https://yookassa.ru/developers/payment-acceptance/integration-scenarios/widget/basics. | [default to undefined]

## Example

```typescript
import { PaymentConfirmation } from 'yookassa-client';

const instance: PaymentConfirmation = {
    type,
    enforce,
    return_url,
    confirmation_url,
    confirmation_data,
    confirmation_token,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
