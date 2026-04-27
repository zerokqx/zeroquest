# PayoutsPersonalData

Персональные данные получателя выплаты. Только для обычных выплат. Необходимо передавать в этих сценариях: * выплаты с проверкой получателя: https://yookassa.ru/developers/payouts/scenario-extensions/recipient-check; * выплаты с передачей данных получателя для выписок из реестра: https://yookassa.ru/developers/payouts/scenario-extensions/recipient-data-send.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Идентификатор персональных данных, сохраненных в ЮKassa. | [default to undefined]

## Example

```typescript
import { PayoutsPersonalData } from 'yookassa-client';

const instance: PayoutsPersonalData = {
    id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
