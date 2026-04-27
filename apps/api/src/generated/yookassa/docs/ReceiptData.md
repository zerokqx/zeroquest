# ReceiptData

Data for creating a receipt. The parameter is specified if: you are a company or a sole proprietor, and you use Receipts from YooMoney: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/basics; you are a company or a sole proprietor, and you use the third-party sales register: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics and send data for creating receipts under one of the following scenarios: Payment and receipt at the same time: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics#payment-and-receipt or Payment after receipt: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics#payment-after-receipt.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | [**ReceiptDataCustomer**](ReceiptDataCustomer.md) |  | [optional] [default to undefined]
**items** | [**Array&lt;ReceiptDataItem&gt;**](ReceiptDataItem.md) | List of products in an order. If you use Receipts from YooMoney, you can specify up to 80 items. If you use a third-party online sales register, you can specify up to 100 items. | [default to undefined]
**internet** | **boolean** | Признак проведения платежа в интернете (тег в 54 ФЗ — 1125) — указывает на оплату через интернет. Возможные значения: true — оплата прошла онлайн, через интернет (например, на вашем сайте или в приложении); false — оплата прошла офлайн, при личном взаимодействии (например, в торговой точке или при встрече с курьером). По умолчанию true. Если вы принимаете платежи офлайн, передайте в запросе значение false. | [optional] [default to undefined]
**tax_system_code** | **number** | Система налогообложения магазина (тег в 54 ФЗ — 1055). Для сторонних онлайн-касс: обязательный параметр, если вы используете онлайн-кассу Атол Онлайн, обновленную до ФФД 1.2, или у вас несколько систем налогообложения, в остальных случаях не передается. Перечень возможных значений: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/parameters-values#tax-systems Для Чеков от ЮKassa: параметр передавать не нужно, ЮKassa его проигнорирует. | [optional] [default to undefined]
**timezone** | **number** | Номер часовой зоны для адреса, по которому вы принимаете платежи (тег в 54 ФЗ — 1011). Указывается, только если в чеке есть товары, которые подлежат обязательной маркировке (в items.mark_code_info передается параметр gs_1m, short или fur). Перечень возможных значений: для Чеков от ЮKassa: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/parameters-values#timezone; для сторонних онлайн-касс: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/parameters-values#timezone. | [optional] [default to undefined]
**receipt_industry_details** | [**Array&lt;IndustryDetails&gt;**](IndustryDetails.md) | Отраслевой реквизит чека (тег в 54 ФЗ — 1261). Можно передавать, если используете Чеки от ЮKassa или онлайн-кассу, обновленную до ФФД 1.2. | [optional] [default to undefined]
**receipt_operational_details** | [**OperationalDetails**](OperationalDetails.md) | Операционный реквизит чека (тег в 54 ФЗ — 1270). Можно передавать, если используете Чеки от ЮKassa или онлайн-кассу, обновленную до ФФД 1.2. | [optional] [default to undefined]

## Example

```typescript
import { ReceiptData } from 'yookassa-client';

const instance: ReceiptData = {
    customer,
    items,
    internet,
    tax_system_code,
    timezone,
    receipt_industry_details,
    receipt_operational_details,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
