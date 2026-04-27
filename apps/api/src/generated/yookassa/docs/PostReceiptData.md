# PostReceiptData

Данные для формирования чека в онлайн-кассе (для коллекции чеков).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**ReceiptType**](ReceiptType.md) | Тип чека в онлайн-кассе. Возможные значения: payment (приход), refund (возврат прихода). | [default to undefined]
**payment_id** | **string** | Payment ID in YooMoney for displaying the receipt information in Merchant Profile: https://yookassa.ru/my/payments, doesn’t affect the payment. The parameter is required for creating a payment receipt: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/payments#create-receipt (type of receipt: payment, payment status: waiting_for_capture or succeeded) and for creating a refund receipt: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/payments#payment-receipt-part-capture for cancelled or partially captured payments (type of receipt: refund, payment status: canceled or succeeded). You can create up to 50 receipts for one payment. | [optional] [default to undefined]
**refund_id** | **string** | Refund ID in YooMoney for displaying the receipt information in Merchant Profile: https://yookassa.ru/my. The parameter is required for creating a refund receipt: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/refunds#after-refund (type of receipt: refund, payment status: succeeded). You can create up to 50 receipts for one refund. | [optional] [default to undefined]
**customer** | [**ReceiptDataCustomer**](ReceiptDataCustomer.md) |  | [default to undefined]
**items** | [**Array&lt;PostReceiptDataItem&gt;**](PostReceiptDataItem.md) | List of products in the receipt: no more than 80 items for Receipts from YooMoney: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/basics, no more than 100 items for third-party online sales registers: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics. | [default to undefined]
**internet** | **boolean** | Признак проведения платежа в интернете (тег в 54 ФЗ — 1125) — указывает на оплату через интернет. Возможные значения: true — оплата прошла онлайн, через интернет (например, на вашем сайте или в приложении); false — оплата прошла офлайн, при личном взаимодействии (например, в торговой точке или при встрече с курьером). По умолчанию true. Если вы принимаете платежи офлайн, передайте в запросе значение false. | [optional] [default to undefined]
**send** | **boolean** | Формирование чека в онлайн-кассе сразу после создания объекта чека. Сейчас можно передать только значение true. | [default to true]
**tax_system_code** | **number** | Система налогообложения магазина (тег в 54 ФЗ — 1055). Для сторонних онлайн-касс: обязательный параметр, если вы используете онлайн-кассу Атол Онлайн, обновленную до ФФД 1.2, или у вас несколько систем налогообложения, в остальных случаях не передается. Перечень возможных значений: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/parameters-values#tax-systems Для Чеков от ЮKassa: параметр передавать не нужно, ЮKassa его проигнорирует. | [optional] [default to undefined]
**timezone** | **number** | Номер часовой зоны для адреса, по которому вы принимаете платежи (тег в 54 ФЗ — 1011). Указывается, только если в чеке есть товары, которые подлежат обязательной маркировке (в items.mark_code_info передается параметр gs_1m, short или fur). Перечень возможных значений: для Чеков от ЮKassa: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/parameters-values#timezone; для сторонних онлайн-касс: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/parameters-values#timezone. | [optional] [default to undefined]
**additional_user_props** | [**ReceiptAdditionalUserProps**](ReceiptAdditionalUserProps.md) |  | [optional] [default to undefined]
**receipt_industry_details** | [**Array&lt;IndustryDetails&gt;**](IndustryDetails.md) | Отраслевой реквизит чека (тег в 54 ФЗ — 1261). Нужно передавать, если используете ФФД 1.2. | [optional] [default to undefined]
**receipt_operational_details** | [**OperationalDetails**](OperationalDetails.md) | Операционный реквизит чека (тег в 54 ФЗ — 1270). Нужно передавать, если используете ФФД 1.2. | [optional] [default to undefined]
**settlements** | [**Array&lt;Settlement&gt;**](Settlement.md) | Перечень совершенных расчетов. | [default to undefined]
**on_behalf_of** | **string** | Идентификатор магазина, от имени которого нужно отправить чек. Выдается ЮKassa, отображается в разделе Продавцы: https://yookassa.ru/my/marketplace/sellers личного кабинета (столбец shopId). Необходимо передавать, если вы используете Сплитование платежей: https://yookassa.ru/developers/solutions-for-platforms/split-payments/basics. | [optional] [default to undefined]

## Example

```typescript
import { PostReceiptData } from 'yookassa-client';

const instance: PostReceiptData = {
    type,
    payment_id,
    refund_id,
    customer,
    items,
    internet,
    send,
    tax_system_code,
    timezone,
    additional_user_props,
    receipt_industry_details,
    receipt_operational_details,
    settlements,
    on_behalf_of,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
