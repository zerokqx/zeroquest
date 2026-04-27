# ReceiptItemAgentType

Тип посредника, реализующего товар или услугу. Параметр предусмотрен форматом фискальных документов (ФФД) и является обязательным, начиная с версии 1.1. Перечень возможных значений: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/parameters-values#agent-type. Можно передавать, если ваша онлайн-касса обновлена до ФФД 1.1 и вы отправляете данные для формирования чека по сценарию Сначала платеж, потом чек: https://yookassa.ru/developers/payment-acceptance/receipts/54fz/other-services/basics#receipt-after-payment

## Enum

* `BankingPaymentAgent` (value: `'banking_payment_agent'`)

* `BankingPaymentSubagent` (value: `'banking_payment_subagent'`)

* `PaymentAgent` (value: `'payment_agent'`)

* `PaymentSubagent` (value: `'payment_subagent'`)

* `Attorney` (value: `'attorney'`)

* `Commissioner` (value: `'commissioner'`)

* `Agent` (value: `'agent'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
