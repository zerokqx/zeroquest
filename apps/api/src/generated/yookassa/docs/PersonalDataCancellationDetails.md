# PersonalDataCancellationDetails

Комментарий к статусу canceled: кто и по какой причине аннулировал хранение данных.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**party** | **string** | Участник процесса, который принял решение о прекращении хранения персональных данных. Возможное значение: yoo_money — ЮKassa. | [default to undefined]
**reason** | **string** | Причина прекращения хранения персональных данных. Возможное значение: expired_by_timeout — истек срок хранения или использования персональных данных. | [default to undefined]

## Example

```typescript
import { PersonalDataCancellationDetails } from 'yookassa-client';

const instance: PersonalDataCancellationDetails = {
    party,
    reason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
