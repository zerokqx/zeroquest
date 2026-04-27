# GetSbpBanksResponse

Список участников СБП. Участники СБП отсортированы по идентификатору участника в порядке убывания.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Формат выдачи результатов запроса. Возможное значение: list (список). | [default to undefined]
**items** | [**Array&lt;SbpParticipantBank&gt;**](SbpParticipantBank.md) |  | [default to undefined]

## Example

```typescript
import { GetSbpBanksResponse } from 'yookassa-client';

const instance: GetSbpBanksResponse = {
    type,
    items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
