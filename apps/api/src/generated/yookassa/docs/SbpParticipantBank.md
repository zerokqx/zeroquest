# SbpParticipantBank

FPS (Faster Payment System of the Russian Federation) participant object contains all the relevant information about the bank or payment service connected to the FPS.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bank_id** | **string** | Идентификатор банка или платежного сервиса в СБП (НСПК). | [default to undefined]
**name** | **string** | Название банка или платежного сервиса в СБП. | [default to undefined]
**bic** | **string** | Банковский идентификационный код (БИК) банка или платежного сервиса. | [default to undefined]

## Example

```typescript
import { SbpParticipantBank } from 'yookassa-client';

const instance: SbpParticipantBank = {
    bank_id,
    name,
    bic,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
