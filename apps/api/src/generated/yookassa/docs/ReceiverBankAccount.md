# ReceiverBankAccount

Реквизиты для пополнения банковского счета.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **string** | Номер банковского счета. Формат — 20 символов. | [default to undefined]
**bic** | **string** | Банковский идентификационный код (БИК) банка, в котором открыт счет. Формат — 9 символов. | [default to undefined]

## Example

```typescript
import { ReceiverBankAccount } from 'yookassa-client';

const instance: ReceiverBankAccount = {
    account_number,
    bic,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
