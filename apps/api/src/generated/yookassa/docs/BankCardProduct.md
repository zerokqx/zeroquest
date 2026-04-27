# BankCardProduct

Карточный продукт платежной системы, с которым ассоциирована банковская карта. Например, карточные продукты платежной системы Мир: Mir Classic, Mir Classic Credit, MIR Privilege Plus и другие.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | Код карточного продукта. Пример: MCP | [default to undefined]
**name** | **string** | Название карточного продукта. Пример: MIR Privilege | [optional] [default to undefined]

## Example

```typescript
import { BankCardProduct } from 'yookassa-client';

const instance: BankCardProduct = {
    code,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
