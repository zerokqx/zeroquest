# ConfirmationRedirect


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enforce** | **boolean** | Запрос на проведение платежа с аутентификацией по 3-D Secure. Будет работать, если оплату банковской картой вы по умолчанию принимаете без подтверждения платежа пользователем. В остальных случаях аутентификацией по 3-D Secure будет управлять ЮKassa. Если хотите принимать платежи без дополнительного подтверждения пользователем, напишите вашему менеджеру ЮKassa. | [optional] [default to false]
**return_url** | **string** | URL, на который вернется пользователь после подтверждения или отмены платежа на веб-странице. Не более 2048 символов. | [optional] [default to undefined]
**confirmation_url** | **string** | URL, на который необходимо перенаправить пользователя для подтверждения оплаты. | [default to undefined]

## Example

```typescript
import { ConfirmationRedirect } from 'yookassa-client';

const instance: ConfirmationRedirect = {
    enforce,
    return_url,
    confirmation_url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
