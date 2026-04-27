# CreateInvoiceRequestDeliveryMethodData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | The code of the invoice delivery method. | [default to undefined]
**phone** | **string** | Номер телефона, на который ЮKassa отправит смс со ссылкой на счет.  Указывается в формате ITU-T E.164: https://ru.wikipedia.org/wiki/E.164, например 79000000000. | [default to undefined]
**email** | **string** | Адрес электронной почты, на который ЮKassa отправит письмо со ссылкой на счет. | [default to undefined]

## Example

```typescript
import { CreateInvoiceRequestDeliveryMethodData } from 'yookassa-client';

const instance: CreateInvoiceRequestDeliveryMethodData = {
    type,
    phone,
    email,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
