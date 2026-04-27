# PayoutSelfEmployedInfo

Данные самозанятого, который получит выплату. Только для обычных выплат. Устаревший параметр. Раньше использовался для выплат самозанятым. Сейчас функциональность недоступна. Параметр сохранен для поддержки обратной совместимости, в новых версиях API может быть удален.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Идентификатор самозанятого в ЮKassa. | [default to undefined]

## Example

```typescript
import { PayoutSelfEmployedInfo } from 'yookassa-client';

const instance: PayoutSelfEmployedInfo = {
    id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
