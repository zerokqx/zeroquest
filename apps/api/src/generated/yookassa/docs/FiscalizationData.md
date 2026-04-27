# FiscalizationData

Настройки магазина для отправки чеков в налоговую: https://yookassa.ru/developers/payment-acceptance/receipts/basics. Присутствует, если вы запрашивали настройки магазина и этот магазин использует решения ЮKassa для отправки чеков. Отсутствует, если магазин еще не включал отправку чеков через ЮKassa.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** | В настройках магазина включена отправка чеков. Возможные значения: * true — магазин отправляет данные для чеков через ЮKassa; * false — магазин выключил отправку чеков через ЮKassa. | [default to undefined]
**provider** | [**FiscalizationProvider**](FiscalizationProvider.md) |  | [default to undefined]

## Example

```typescript
import { FiscalizationData } from 'yookassa-client';

const instance: FiscalizationData = {
    enabled,
    provider,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
