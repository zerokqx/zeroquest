# ReceiptItemPaymentMode

Признак способа расчета (тег в 54 ФЗ — 1214) — отражает тип оплаты и факт передачи товара. Пример: покупатель полностью оплачивает товар и сразу получает его. В этом случае нужно передать значение full_payment (полный расчет). Перечень возможных значений: * для Чеков от ЮKassa: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/yoomoney/parameters-values#payment-mode * для сторонних онлайн-касс: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/parameters-values#payment-mode

## Enum

* `FullPrepayment` (value: `'full_prepayment'`)

* `PartialPrepayment` (value: `'partial_prepayment'`)

* `Advance` (value: `'advance'`)

* `FullPayment` (value: `'full_payment'`)

* `PartialPayment` (value: `'partial_payment'`)

* `Credit` (value: `'credit'`)

* `CreditPayment` (value: `'credit_payment'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
