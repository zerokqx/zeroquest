# PostReceiptDataItem

Информация о товарной позиции в заказе (для формирования чека).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** | Название товара (от 1 до 128 символов). Тег в 54 ФЗ — 1030. | [default to undefined]
**amount** | [**MonetaryAmount**](MonetaryAmount.md) | Цена товара (тег в 54 ФЗ — 1079). | [default to undefined]
**vat_code** | **number** | Ставка НДС (тег в 54 ФЗ — 1199). Перечень возможных значений: * для Чеков от ЮKassa: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/parameters-values#vat-codes * для сторонних онлайн-касс: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/parameters-values#vat-codes | [default to undefined]
**quantity** | **number** | Количество товара (тег в 54 ФЗ — 1023). Можно передать целое или дробное число. Разделитель дробной части — точка, разделитель тысяч отсутствует. Пример: 5.000 Максимально возможное значение и максимальное количество знаков после точки (для дробных значений) зависят от модели вашей онлайн-кассы. Для чеков от ЮKassa максимально возможное значение — 99999.999, не более 3 знаков после точки. | [default to undefined]
**measure** | [**ReceiptItemMeasure**](ReceiptItemMeasure.md) |  | [optional] [default to undefined]
**mark_quantity** | [**MarkQuantity**](MarkQuantity.md) |  | [optional] [default to undefined]
**payment_subject** | [**ReceiptItemPaymentSubject**](ReceiptItemPaymentSubject.md) |  | [optional] [default to undefined]
**payment_mode** | [**ReceiptItemPaymentMode**](ReceiptItemPaymentMode.md) |  | [optional] [default to undefined]
**country_of_origin_code** | **string** | Код страны происхождения товара по общероссийскому классификатору стран мира (OК (MК (ИСО 3166) 004-97) 025-2001: http://docs.cntd.ru/document/842501280). Тег в 54 ФЗ — 1230. Пример: RU. Можно передавать, если используете онлайн-кассу Orange Data, Кит Инвест. | [optional] [default to undefined]
**customs_declaration_number** | **string** | Номер таможенной декларации (от 1 до 32 символов). Тег в 54 ФЗ — 1231. Можно передавать, если используете онлайн-кассу Orange Data, Кит Инвест. | [optional] [default to undefined]
**excise** | **string** | Сумма акциза товара с учетом копеек (тег в 54 ФЗ — 1229). Десятичное число с точностью до 2 знаков после точки. Можно передавать, если используете онлайн-кассу Orange Data, Кит Инвест. | [optional] [default to undefined]
**product_code** | **string** | Product code (tag 1162 in 54-FZ) is a unique number assigned to a unit of product during marking process. Format: hexadecimal number with spaces. Maximum length is 32 bytes. Example: 00 00 00 01 00 21 FA 41 00 23 05 41 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 12 00 AB 00. This parameter is required if both conditions apply: your online sales register is updated to FFD 1.05 or 1.1; the product is subject to mandatory marking: http://docs.cntd.ru/document/902192509. The parameter must not be included in the request if you are using Receipts from YooMoney: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/basics or an online sales register updated to FFD 1.2: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/marking. | [optional] [default to undefined]
**planned_status** | **number** | Planned product status. Tag in 54-FZ: 2003. To be specified only for products that are subject to mandatory marking (parameter gs_1m, short, or fur is set in items.mark_code_info). Possible values are: for Receipts from YooMoney: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/parameters-values#planned-status; for third party online sales registers: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/parameters-values#planned-status. | [optional] [default to undefined]
**mark_code_info** | [**MarkCodeInfo**](MarkCodeInfo.md) |  | [optional] [default to undefined]
**mark_mode** | **string** | Режим обработки кода маркировки (тег в 54 ФЗ — 2102). Обязательный параметр, если одновременно выполняются эти условия: * вы используете Чеки от ЮKassa или онлайн-кассу Атол Онлайн или BusinessRu, обновленную до ФФД 1.2; * товар нужно маркировать: http://docs.cntd.ru/document/902192509. Должен принимать значение равное «0». | [optional] [default to undefined]
**payment_subject_industry_details** | [**Array&lt;IndustryDetails&gt;**](IndustryDetails.md) | Отраслевой реквизит предмета расчета (тег в 54 ФЗ — 1260). Можно передавать, если используете Чеки от ЮKassa или онлайн-кассу, обновленную до ФФД 1.2. | [optional] [default to undefined]
**additional_payment_subject_props** | **string** | Дополнительный реквизит предмета расчета (тег в 54 ФЗ — 1191). Не более 64 символов. Можно передавать, если вы отправляете данные для формирования чека по сценарию Сначала платеж, потом чек: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics#receipt-after-payment | [optional] [default to undefined]
**supplier** | [**PostReceiptItemSupplierWithInn**](PostReceiptItemSupplierWithInn.md) |  | [optional] [default to undefined]
**agent_type** | [**ReceiptItemAgentType**](ReceiptItemAgentType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PostReceiptDataItem } from 'yookassa-client';

const instance: PostReceiptDataItem = {
    description,
    amount,
    vat_code,
    quantity,
    measure,
    mark_quantity,
    payment_subject,
    payment_mode,
    country_of_origin_code,
    customs_declaration_number,
    excise,
    product_code,
    planned_status,
    mark_code_info,
    mark_mode,
    payment_subject_industry_details,
    additional_payment_subject_props,
    supplier,
    agent_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
