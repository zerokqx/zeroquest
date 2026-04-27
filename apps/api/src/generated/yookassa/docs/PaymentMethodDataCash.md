# PaymentMethodDataCash

Данные для оплаты наличными в терминалах России или СНГ.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone** | **string** | Телефон пользователя, на который придет смс с кодом платежа (для внесения наличных). Указывается в формате ITU-T E.164: https://ru.wikipedia.org/wiki/E.164, например 79000000000. Поле можно оставить пустым: пользователь сможет заполнить его при оплате на стороне ЮKassa. | [optional] [default to undefined]

## Example

```typescript
import { PaymentMethodDataCash } from 'yookassa-client';

const instance: PaymentMethodDataCash = {
    phone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
