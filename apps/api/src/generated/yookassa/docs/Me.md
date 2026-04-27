# Me

Store or gateway settings object (Me) contains all the relevant information about the settings of a store or gateway.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **string** | Идентификатор магазина или шлюза. | [default to undefined]
**status** | **string** | Статус магазина или шлюза. Возможные значения: * enabled — подключен к ЮKassa, может проводить платежи или выплаты; * disabled — не может проводить платежи или выплаты (еще не подключен, закрыт или временно не работает). | [default to undefined]
**test** | **boolean** | Это тестовый магазин или шлюз. | [default to undefined]
**fiscalization** | [**FiscalizationData**](FiscalizationData.md) |  | [optional] [default to undefined]
**fiscalization_enabled** | **boolean** | Устаревший параметр, который раньше использовался для определения настроек отправки чеков в налоговую. Сохранен для поддержки обратной совместимости, в новых версиях API может быть удален. Используйте объект fiscalization, чтобы определить, какие у магазина настройки отправки чеков. | [optional] [default to undefined]
**payment_methods** | [**Array&lt;PaymentMethodType&gt;**](PaymentMethodType.md) | Список способов оплаты: https://yookassa.ru/developers/payment-acceptance/getting-started/payment-methods#all, доступных магазину. Присутствует, если вы запрашивали настройки магазина. | [optional] [default to undefined]
**itn** | **string** | ИНН магазина (от 1 до 20 цифр). Присутствует, если вы запрашивали настройки магазина. | [optional] [default to undefined]
**payout_methods** | [**Array&lt;PayoutMethodType&gt;**](PayoutMethodType.md) | Список способов получения выплат, доступных шлюзу. Возможные значения: * bank_card — выплаты на банковские карты; * yoo_money — выплаты на кошельки ЮMoney; * sbp — выплаты через СБП. Присутствует, если вы запрашивали настройки шлюза. | [optional] [default to undefined]
**name** | **string** | Название шлюза, которое отображается в личном кабинете ЮKassa. Присутствует, если вы запрашивали настройки шлюза. | [optional] [default to undefined]
**payout_balance** | [**MonetaryAmount**](MonetaryAmount.md) | Баланс вашего шлюза. Присутствует, если вы запрашивали настройки шлюза. | [optional] [default to undefined]

## Example

```typescript
import { Me } from 'yookassa-client';

const instance: Me = {
    account_id,
    status,
    test,
    fiscalization,
    fiscalization_enabled,
    payment_methods,
    itn,
    payout_methods,
    name,
    payout_balance,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
