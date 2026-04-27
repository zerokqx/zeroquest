# PaymentMethodsConfirmationRedirect

Перенаправление пользователя на сайт ЮKassa для подтверждения привязки или страницу банка-эмитента для аутентификации по 3-D Secure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confirmation_url** | **string** | URL, на который необходимо перенаправить пользователя для подтверждения привязки. | [default to undefined]
**enforce** | **boolean** | Запрос на проведение привязки с аутентификацией по 3-D Secure. Будет работать, если оплату банковской картой вы по умолчанию принимаете без подтверждения платежа пользователем. В остальных случаях аутентификацией по 3-D Secure будет управлять ЮKassa. Если хотите принимать платежи и создавать привязки без дополнительного подтверждения пользователем, напишите вашему менеджеру ЮKassa. | [optional] [default to undefined]
**return_url** | **string** | URL, на который вернется пользователь после подтверждения или отмены привязки на веб-странице. Не более 2048 символов. | [optional] [default to undefined]

## Example

```typescript
import { PaymentMethodsConfirmationRedirect } from 'yookassa-client';

const instance: PaymentMethodsConfirmationRedirect = {
    confirmation_url,
    enforce,
    return_url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
