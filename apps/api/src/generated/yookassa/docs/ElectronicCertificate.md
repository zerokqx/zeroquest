# ElectronicCertificate

Описание используемого электронного сертификата.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_id** | **string** | Идентификатор сертификата. От 20 до 30 символов. | [default to undefined]
**tru_quantity** | **number** | Количество единиц товара, которое одобрили для оплаты по этому электронному сертификату. | [default to undefined]
**available_compensation** | [**MonetaryAmount**](MonetaryAmount.md) | Максимально допустимая сумма, которую может покрыть электронный сертификат для оплаты одной единицы товара. Пример: сертификат может компенсировать максимум 1000 рублей для оплаты этого товара. | [default to undefined]
**applied_compensation** | [**MonetaryAmount**](MonetaryAmount.md) | Сумма, которую одобрили для оплаты по сертификату за одну единицу товара. Пример: из 1000 рублей одобрили 500 рублей для оплаты по сертификату. | [default to undefined]

## Example

```typescript
import { ElectronicCertificate } from 'yookassa-client';

const instance: ElectronicCertificate = {
    certificate_id,
    tru_quantity,
    available_compensation,
    applied_compensation,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
