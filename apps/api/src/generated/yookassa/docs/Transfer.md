# Transfer

Information about money distribution: the amounts of transfers and the stores to be transferred to. Specified if you use Split payments: https://yookassa.ru/developers/solutions-for-platforms/split-payments/basics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **string** | ID of the store in favor of which you\&#39;re accepting the receipt. Provided by YooMoney, displayed in the Sellers: https://yookassa.ru/my/marketplace/sellers section of your Merchant Profile (shopId column). | [default to undefined]
**amount** | [**TransferAmount**](TransferAmount.md) |  | [default to undefined]
**status** | [**TransferStatus**](TransferStatus.md) |  | [default to undefined]
**platform_fee_amount** | [**TransferPlatformFeeAmount**](TransferPlatformFeeAmount.md) |  | [optional] [default to undefined]
**description** | **string** | Transaction description (up to 128 characters), which the seller will see in the YooMoney Merchant Profile. Example: \&quot;Marketplace order No. 72\&quot;. | [optional] [default to undefined]
**metadata** | **{ [key: string]: string | null; }** | Любые дополнительные данные, которые нужны вам для работы (например, ваш внутренний идентификатор заказа). Передаются в виде набора пар «ключ-значение» и возвращаются в ответе от ЮKassa. Ограничения: максимум 16 ключей, имя ключа не больше 32 символов, значение ключа не больше 512 символов, тип данных — строка в формате UTF-8. | [optional] [default to undefined]

## Example

```typescript
import { Transfer } from 'yookassa-client';

const instance: Transfer = {
    account_id,
    amount,
    status,
    platform_fee_amount,
    description,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
