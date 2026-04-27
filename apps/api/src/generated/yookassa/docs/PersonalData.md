# PersonalData

Personal data object (PersonalData) contains all the relevant information about the personal information of the user saved in YooMoney.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Идентификатор персональных данных, сохраненных в ЮKassa. | [default to undefined]
**type** | [**PersonalDataType**](PersonalDataType.md) |  | [default to undefined]
**status** | **string** | Статус персональных данных. Возможные значения: waiting_for_operation — данные сохранены, но не использованы при проведении выплаты; active — данные сохранены и использованы при проведении выплаты; данные можно использовать повторно до срока, указанного в параметре expires_at; canceled — хранение данных отменено, данные удалены, инициатор и причина отмены указаны в объекте cancellation_details (финальный и неизменяемый статус). Жизненный цикл персональных данных зависит от назначения данных: передача данных получателя выплаты: https://yookassa.ru/developers/payouts/scenario-extensions/recipient-data-send#lifecircle для выписки из реестра или проверка получателя: https://yookassa.ru/developers/payouts/scenario-extensions/recipient-check#lifecircle при выплатах через СБП. | [default to undefined]
**cancellation_details** | [**PersonalDataCancellationDetails**](PersonalDataCancellationDetails.md) |  | [optional] [default to undefined]
**created_at** | **string** | Время создания персональных данных. Указывается по UTC: https://ru.wikipedia.org/wiki/%D0%92%D1%81%D0%B5%D0%BC%D0%B8%D1%80%D0%BD%D0%BE%D0%B5_%D0%BA%D0%BE%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5_%D0%B2%D1%80%D0%B5%D0%BC%D1%8F и передается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: 2017-11-03T11:52:31.827Z | [default to undefined]
**expires_at** | **string** | Срок жизни объекта персональных данных — время, до которого вы можете использовать персональные данные при проведении операций. Указывается только для объекта в статусе active. Указывается по UTC: https://ru.wikipedia.org/wiki/%D0%92%D1%81%D0%B5%D0%BC%D0%B8%D1%80%D0%BD%D0%BE%D0%B5_%D0%BA%D0%BE%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5_%D0%B2%D1%80%D0%B5%D0%BC%D1%8F и передается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. Пример: 2017-11-03T11:52:31.827Z | [optional] [default to undefined]
**metadata** | **{ [key: string]: string | null; }** | Любые дополнительные данные, которые нужны вам для работы (например, ваш внутренний идентификатор заказа). Передаются в виде набора пар «ключ-значение» и возвращаются в ответе от ЮKassa. Ограничения: максимум 16 ключей, имя ключа не больше 32 символов, значение ключа не больше 512 символов, тип данных — строка в формате UTF-8. | [optional] [default to undefined]

## Example

```typescript
import { PersonalData } from 'yookassa-client';

const instance: PersonalData = {
    id,
    type,
    status,
    cancellation_details,
    created_at,
    expires_at,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
