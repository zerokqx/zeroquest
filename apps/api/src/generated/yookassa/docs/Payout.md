# Payout

Payout object (Payout) contains all the relevant information about the payout.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Идентификатор выплаты. | [default to undefined]
**amount** | [**MonetaryAmount**](MonetaryAmount.md) | Сумма выплаты. | [default to undefined]
**status** | [**PayoutStatus**](PayoutStatus.md) |  | [default to undefined]
**payout_destination** | [**PayoutPayoutDestination**](PayoutPayoutDestination.md) |  | [default to undefined]
**description** | **string** | Описание транзакции (не более 128 символов). Например: «Выплата по договору 37». | [optional] [default to undefined]
**created_at** | **string** | Время создания выплаты. Указывается по UTC: https://ru.wikipedia.org/wiki/%D0%92%D1%81%D0%B5%D0%BC%D0%B8%D1%80%D0%BD%D0%BE%D0%B5_%D0%BA%D0%BE%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5_%D0%B2%D1%80%D0%B5%D0%BC%D1%8F и передается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: 2017-11-03T11:52:31.827Z | [default to undefined]
**succeeded_at** | **string** | Time of a successful payout processing. Based on UTC: https://en.wikipedia.org/wiki/Coordinated_Universal_Time and specified in the ISO 8601: https://en.wikipedia.org/wiki/ISO_8601 format. Example: 2017-11-03T11:52:42.312Z Mandatory parameter for payouts with the succeeded status. | [optional] [default to undefined]
**deal** | [**PayoutDeal**](PayoutDeal.md) |  | [optional] [default to undefined]
**self_employed** | [**PayoutSelfEmployed**](PayoutSelfEmployed.md) |  | [optional] [default to undefined]
**receipt** | [**IncomeReceipt**](IncomeReceipt.md) |  | [optional] [default to undefined]
**cancellation_details** | [**PayoutCancellationDetails**](PayoutCancellationDetails.md) |  | [optional] [default to undefined]
**metadata** | **{ [key: string]: string | null; }** | Любые дополнительные данные, которые нужны вам для работы (например, ваш внутренний идентификатор заказа). Передаются в виде набора пар «ключ-значение» и возвращаются в ответе от ЮKassa. Ограничения: максимум 16 ключей, имя ключа не больше 32 символов, значение ключа не больше 512 символов, тип данных — строка в формате UTF-8. | [optional] [default to undefined]
**test** | **boolean** | Признак тестовой операции. | [default to undefined]

## Example

```typescript
import { Payout } from 'yookassa-client';

const instance: Payout = {
    id,
    amount,
    status,
    payout_destination,
    description,
    created_at,
    succeeded_at,
    deal,
    self_employed,
    receipt,
    cancellation_details,
    metadata,
    test,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
