# CreatePaymentRequestReceiver


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**ReceiverType**](ReceiverType.md) |  | [default to undefined]
**phone** | **string** | Номер телефона для пополнения. Максимум 15 символов. Указывается в формате ITU-T E.164: https://ru.wikipedia.org/wiki/E.164. Пример: 79000000000. | [default to undefined]
**account_number** | **string** | Номер банковского счета. Формат — 20 символов. | [default to undefined]
**bic** | **string** | Банковский идентификационный код (БИК) банка, в котором открыт счет. Формат — 9 символов. | [default to undefined]

## Example

```typescript
import { CreatePaymentRequestReceiver } from 'yookassa-client';

const instance: CreatePaymentRequestReceiver = {
    type,
    phone,
    account_number,
    bic,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
