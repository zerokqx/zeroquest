# DeliveryMethodDataSms

Данные для выставления счета с доставкой ссылки на счет в смс.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone** | **string** | Номер телефона, на который ЮKassa отправит смс со ссылкой на счет.  Указывается в формате ITU-T E.164: https://ru.wikipedia.org/wiki/E.164, например 79000000000. | [default to undefined]

## Example

```typescript
import { DeliveryMethodDataSms } from 'yookassa-client';

const instance: DeliveryMethodDataSms = {
    phone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
