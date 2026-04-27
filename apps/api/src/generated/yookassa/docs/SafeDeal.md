# SafeDeal


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Идентификатор сделки. | [default to undefined]
**fee_moment** | [**FeeMoment**](FeeMoment.md) |  | [default to undefined]
**description** | **string** | Описание сделки (не более 128 символов). Используется для фильтрации при получении списка сделок: https://yookassa.ru/developers/api#get_deals_list. | [optional] [default to undefined]
**balance** | [**MonetaryAmount**](MonetaryAmount.md) | Баланс сделки. | [default to undefined]
**payout_balance** | [**MonetaryAmount**](MonetaryAmount.md) | Сумма вознаграждения продавца. | [default to undefined]
**status** | [**DealStatus**](DealStatus.md) |  | [default to undefined]
**created_at** | **string** | Время создания сделки. Указывается по UTC: https://ru.wikipedia.org/wiki/%D0%92%D1%81%D0%B5%D0%BC%D0%B8%D1%80%D0%BD%D0%BE%D0%B5_%D0%BA%D0%BE%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5_%D0%B2%D1%80%D0%B5%D0%BC%D1%8F и передается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: 2017-11-03T11:52:31.827Z | [default to undefined]
**expires_at** | **string** | Время автоматического закрытия сделки. Если в указанное время сделка всё еще в статусе opened, ЮKassa вернет деньги покупателю и закроет сделку. По умолчанию время жизни сделки составляет 90 дней. Время указывается по UTC: https://ru.wikipedia.org/wiki/%D0%92%D1%81%D0%B5%D0%BC%D0%B8%D1%80%D0%BD%D0%BE%D0%B5_%D0%BA%D0%BE%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5_%D0%B2%D1%80%D0%B5%D0%BC%D1%8F и передается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: 2017-11-03T11:52:31.827Z | [default to undefined]
**metadata** | **{ [key: string]: string | null; }** | Любые дополнительные данные, которые нужны вам для работы (например, ваш внутренний идентификатор заказа). Передаются в виде набора пар «ключ-значение» и возвращаются в ответе от ЮKassa. Ограничения: максимум 16 ключей, имя ключа не больше 32 символов, значение ключа не больше 512 символов, тип данных — строка в формате UTF-8. | [optional] [default to undefined]
**test** | **boolean** | Признак тестовой операции. | [default to undefined]

## Example

```typescript
import { SafeDeal } from 'yookassa-client';

const instance: SafeDeal = {
    id,
    fee_moment,
    description,
    balance,
    payout_balance,
    status,
    created_at,
    expires_at,
    metadata,
    test,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
