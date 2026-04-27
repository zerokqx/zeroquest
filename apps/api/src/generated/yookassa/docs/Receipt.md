# Receipt

Receipt object (Receipt) contains all the relevant information about the receipt.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Идентификатор чека в ЮKassa. | [default to undefined]
**type** | [**ReceiptType**](ReceiptType.md) |  | [default to undefined]
**payment_id** | **string** | Идентификатор платежа: https://yookassa.ru/developers/api#payment_object, для которого был сформирован чек. | [optional] [default to undefined]
**refund_id** | **string** | Идентификатор возврата: https://yookassa.ru/developers/api#refund_object, для которого был сформирован чек. Отсутствует в чеке платежа. | [optional] [default to undefined]
**status** | [**ReceiptRegistrationStatus**](ReceiptRegistrationStatus.md) | Статус доставки данных для чека в онлайн-кассу. Возможные значения: pending — данные в обработке; succeeded — чек успешно зарегистрирован; canceled — чек зарегистрировать не удалось; если используете Чеки от ЮKassa: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/basics, обратитесь в техническую поддержку, в остальных случаях сформируйте чек вручную. | [default to undefined]
**fiscal_document_number** | **string** | Номер фискального документа. | [optional] [default to undefined]
**fiscal_storage_number** | **string** | Номер фискального накопителя в кассовом аппарате. | [optional] [default to undefined]
**fiscal_attribute** | **string** | Фискальный признак чека. Формируется фискальным накопителем на основе данных, переданных для регистрации чека. | [optional] [default to undefined]
**registered_at** | **string** | Дата и время формирования чека в фискальном накопителе. Указывается в формате ISO 8601: https://en.wikipedia.org/wiki/ISO_8601. | [optional] [default to undefined]
**fiscal_provider_id** | **string** | Идентификатор чека в онлайн-кассе. Присутствует, если чек удалось зарегистрировать. | [optional] [default to undefined]
**items** | [**Array&lt;ReceiptItem&gt;**](ReceiptItem.md) | List of products in the receipt: no more than 80 items for Receipts from YooMoney: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/basics, no more than 100 items for third-party online sales registers: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics. | [default to undefined]
**internet** | **boolean** | Признак проведения платежа в интернете (тег в 54 ФЗ — 1125) — указывает на оплату через интернет. Возможные значения: true — оплата прошла онлайн, через интернет (например, на вашем сайте или в приложении); false — оплата прошла офлайн, при личном взаимодействии (например, в торговой точке или при встрече с курьером). По умолчанию true. Если вы принимаете платежи офлайн, передайте в запросе значение false. | [optional] [default to undefined]
**settlements** | [**Array&lt;Settlement&gt;**](Settlement.md) | Перечень совершенных расчетов. | [optional] [default to undefined]
**on_behalf_of** | **string** | Идентификатор магазина, от имени которого нужно отправить чек. Выдается ЮKassa. Присутствует, если вы используете Сплитование платежей: https://yookassa.ru/developers/solutions-for-platforms/split-payments/basics. | [optional] [default to undefined]
**tax_system_code** | **number** | Система налогообложения магазина (тег в 54 ФЗ — 1055). Для сторонних онлайн-касс: обязательный параметр, если вы используете онлайн-кассу Атол Онлайн, обновленную до ФФД 1.2, или у вас несколько систем налогообложения, в остальных случаях не передается. Перечень возможных значений: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/parameters-values#tax-systems Для Чеков от ЮKassa: параметр передавать не нужно, ЮKassa его проигнорирует. | [optional] [default to undefined]
**timezone** | **number** | Номер часовой зоны для адреса, по которому вы принимаете платежи (тег в 54 ФЗ — 1011). Указывается, только если в чеке есть товары, которые подлежат обязательной маркировке (в items.mark_code_info передается параметр gs_1m, short или fur). Перечень возможных значений: для Чеков от ЮKassa: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/parameters-values#timezone; для сторонних онлайн-касс: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/parameters-values#timezone. | [optional] [default to undefined]
**receipt_industry_details** | [**Array&lt;IndustryDetails&gt;**](IndustryDetails.md) | Отраслевой реквизит предмета расчета (тег в 54 ФЗ — 1260). | [optional] [default to undefined]
**receipt_operational_details** | [**OperationalDetails**](OperationalDetails.md) | Операционный реквизит чека (тег в 54 ФЗ — 1270). | [optional] [default to undefined]

## Example

```typescript
import { Receipt } from 'yookassa-client';

const instance: Receipt = {
    id,
    type,
    payment_id,
    refund_id,
    status,
    fiscal_document_number,
    fiscal_storage_number,
    fiscal_attribute,
    registered_at,
    fiscal_provider_id,
    items,
    internet,
    settlements,
    on_behalf_of,
    tax_system_code,
    timezone,
    receipt_industry_details,
    receipt_operational_details,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
