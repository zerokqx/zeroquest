# PayoutRequest

Данные для создания выплаты.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**MonetaryAmount**](MonetaryAmount.md) | Сумма выплаты. Есть ограничения на минимальный и максимальный размер выплаты и сумму выплат за месяц. Подробнее о лимитах обычных выплат: https://yookassa.ru/developers/payouts/getting-started/payout-types-and-limits и выплат в рамках Безопасной сделки: https://yookassa.ru/developers/solutions-for-platforms/safe-deal/integration/payouts#specifics | [default to undefined]
**payout_destination_data** | [**PayoutRequestPayoutDestinationData**](PayoutRequestPayoutDestinationData.md) |  | [optional] [default to undefined]
**payout_token** | **string** | Токенизированные данные для выплаты. Например, синоним банковской карты. Обязательный параметр, если не передан payout_destination_data или payment_method_id. | [optional] [default to undefined]
**payment_method_id** | **string** | Идентификатор сохраненного способа оплаты, данные которого нужно использовать для проведения выплаты. Подробнее о выплатах с использованием идентификатора сохраненного способа оплаты: https://yookassa.ru/developers/payouts/scenario-extensions/multipurpose-token Обязательный параметр, если не передан payout_destination_data или payout_token. | [optional] [default to undefined]
**description** | **string** | Описание транзакции (не более 128 символов). Например: «Выплата по договору 37». | [optional] [default to undefined]
**deal** | [**PayoutDealInfo**](PayoutDealInfo.md) |  | [optional] [default to undefined]
**personal_data** | [**Array&lt;PayoutsPersonalData&gt;**](PayoutsPersonalData.md) | Персональные данные получателя выплаты. Только для обычных выплат. Необходимо передавать в этих сценариях: * выплаты с проверкой получателя: https://yookassa.ru/developers/payouts/scenario-extensions/recipient-check (только для выплат через СБП); * выплаты с передачей данных получателя для выписок из реестра: https://yookassa.ru/developers/payouts/scenario-extensions/recipient-data-send. В массиве можно одновременно передать несколько идентификаторов, но только для разных типов данных. | [optional] [default to undefined]
**metadata** | **{ [key: string]: string | null; }** | Любые дополнительные данные, которые нужны вам для работы (например, ваш внутренний идентификатор заказа). Передаются в виде набора пар «ключ-значение» и возвращаются в ответе от ЮKassa. Ограничения: максимум 16 ключей, имя ключа не больше 32 символов, значение ключа не больше 512 символов, тип данных — строка в формате UTF-8. | [optional] [default to undefined]

## Example

```typescript
import { PayoutRequest } from 'yookassa-client';

const instance: PayoutRequest = {
    amount,
    payout_destination_data,
    payout_token,
    payment_method_id,
    description,
    deal,
    personal_data,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
