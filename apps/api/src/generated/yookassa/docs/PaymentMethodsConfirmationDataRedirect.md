# PaymentMethodsConfirmationDataRedirect

Перенаправление пользователя на сайт ЮKassa для подтверждения привязки или страницу банка-эмитента для аутентификации по 3-D Secure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enforce** | **boolean** | Запрос на проведение привязки с аутентификацией по 3-D Secure. Будет работать, если оплату банковской картой вы по умолчанию принимаете без подтверждения платежа пользователем. В остальных случаях аутентификацией по 3-D Secure будет управлять ЮKassa. Если хотите принимать платежи и создавать привязки без дополнительного подтверждения пользователем, напишите вашему менеджеру ЮKassa. | [optional] [default to undefined]
**return_url** | **string** | URL, на который вернется пользователь после подтверждения или отмены привязки на веб-странице. Не более 2048 символов. | [default to undefined]
**locale** | [**Locale**](Locale.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PaymentMethodsConfirmationDataRedirect } from 'yookassa-client';

const instance: PaymentMethodsConfirmationDataRedirect = {
    enforce,
    return_url,
    locale,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
