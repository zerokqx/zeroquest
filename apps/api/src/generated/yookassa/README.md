## yookassa-client@1.0.0

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install yookassa-client@1.0.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *https://api.yookassa.ru/v3*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DefaultApi* | [**dealsDealIdGet**](docs/DefaultApi.md#dealsdealidget) | **GET** /deals/{deal_id} | Информация о сделке
*DefaultApi* | [**dealsGet**](docs/DefaultApi.md#dealsget) | **GET** /deals | Список сделок
*DefaultApi* | [**dealsPost**](docs/DefaultApi.md#dealspost) | **POST** /deals | Создание сделки
*DefaultApi* | [**invoicesInvoiceIdGet**](docs/DefaultApi.md#invoicesinvoiceidget) | **GET** /invoices/{invoice_id} | Информация о счете
*DefaultApi* | [**invoicesPost**](docs/DefaultApi.md#invoicespost) | **POST** /invoices | Создание счета
*DefaultApi* | [**meGet**](docs/DefaultApi.md#meget) | **GET** /me | Информация о настройках магазина или шлюза
*DefaultApi* | [**paymentMethodsPaymentMethodIdGet**](docs/DefaultApi.md#paymentmethodspaymentmethodidget) | **GET** /payment_methods/{payment_method_id} | Информация о способе оплаты
*DefaultApi* | [**paymentMethodsPost**](docs/DefaultApi.md#paymentmethodspost) | **POST** /payment_methods | Создание способа оплаты
*DefaultApi* | [**payoutsGet**](docs/DefaultApi.md#payoutsget) | **GET** /payouts | List of payouts
*DefaultApi* | [**payoutsPayoutIdGet**](docs/DefaultApi.md#payoutspayoutidget) | **GET** /payouts/{payout_id} | Информация о выплате
*DefaultApi* | [**payoutsPost**](docs/DefaultApi.md#payoutspost) | **POST** /payouts | Создание выплаты
*DefaultApi* | [**payoutsSearchGet**](docs/DefaultApi.md#payoutssearchget) | **GET** /payouts/search | Search for payouts
*DefaultApi* | [**personalDataPersonalDataIdGet**](docs/DefaultApi.md#personaldatapersonaldataidget) | **GET** /personal_data/{personal_data_id} | Информация о персональных данных
*DefaultApi* | [**personalDataPost**](docs/DefaultApi.md#personaldatapost) | **POST** /personal_data | Создание персональных данных
*DefaultApi* | [**receiptsGet**](docs/DefaultApi.md#receiptsget) | **GET** /receipts | Список чеков
*DefaultApi* | [**receiptsPost**](docs/DefaultApi.md#receiptspost) | **POST** /receipts | Создание чека
*DefaultApi* | [**receiptsReceiptIdGet**](docs/DefaultApi.md#receiptsreceiptidget) | **GET** /receipts/{receipt_id} | Информация о чеке
*DefaultApi* | [**refundsGet**](docs/DefaultApi.md#refundsget) | **GET** /refunds | Список возвратов
*DefaultApi* | [**refundsPost**](docs/DefaultApi.md#refundspost) | **POST** /refunds | Создание возврата
*DefaultApi* | [**refundsRefundIdGet**](docs/DefaultApi.md#refundsrefundidget) | **GET** /refunds/{refund_id} | Информация о возврате
*DefaultApi* | [**sbpBanksGet**](docs/DefaultApi.md#sbpbanksget) | **GET** /sbp_banks | Список участников СБП
*PaymentsApi* | [**paymentsGet**](docs/PaymentsApi.md#paymentsget) | **GET** /payments | List payments
*PaymentsApi* | [**paymentsPaymentIdCancelPost**](docs/PaymentsApi.md#paymentspaymentidcancelpost) | **POST** /payments/{payment_id}/cancel | Cancel a payment
*PaymentsApi* | [**paymentsPaymentIdCapturePost**](docs/PaymentsApi.md#paymentspaymentidcapturepost) | **POST** /payments/{payment_id}/capture | Capture a payment
*PaymentsApi* | [**paymentsPaymentIdGet**](docs/PaymentsApi.md#paymentspaymentidget) | **GET** /payments/{payment_id} | Get payment information
*PaymentsApi* | [**paymentsPost**](docs/PaymentsApi.md#paymentspost) | **POST** /payments | Create a payment
*WebhooksApi* | [**webhooksGet**](docs/WebhooksApi.md#webhooksget) | **GET** /webhooks | Список созданных webhook
*WebhooksApi* | [**webhooksPost**](docs/WebhooksApi.md#webhookspost) | **POST** /webhooks | Создание webhook
*WebhooksApi* | [**webhooksWebhookIdDelete**](docs/WebhooksApi.md#webhookswebhookiddelete) | **DELETE** /webhooks/{webhook_id} | Удаление webhook


### Documentation For Models

 - [Airline](docs/Airline.md)
 - [AirlineLeg](docs/AirlineLeg.md)
 - [AirlinePassenger](docs/AirlinePassenger.md)
 - [AuthorizationDetails](docs/AuthorizationDetails.md)
 - [B2bSberbankCalculatedVatData](docs/B2bSberbankCalculatedVatData.md)
 - [B2bSberbankMixedVatData](docs/B2bSberbankMixedVatData.md)
 - [B2bSberbankPayerBankDetails](docs/B2bSberbankPayerBankDetails.md)
 - [B2bSberbankUntaxedVatData](docs/B2bSberbankUntaxedVatData.md)
 - [B2bSberbankVatData](docs/B2bSberbankVatData.md)
 - [B2bSberbankVatDataType](docs/B2bSberbankVatDataType.md)
 - [BadRequest](docs/BadRequest.md)
 - [BankCardData](docs/BankCardData.md)
 - [BankCardDataSource](docs/BankCardDataSource.md)
 - [BankCardProduct](docs/BankCardProduct.md)
 - [BankCardType](docs/BankCardType.md)
 - [BaseDeal](docs/BaseDeal.md)
 - [CapturePaymentDeal](docs/CapturePaymentDeal.md)
 - [CardDataForPayoutDestination](docs/CardDataForPayoutDestination.md)
 - [CardRequestData](docs/CardRequestData.md)
 - [CardRequestDataWithCsc](docs/CardRequestDataWithCsc.md)
 - [Confirmation](docs/Confirmation.md)
 - [ConfirmationData](docs/ConfirmationData.md)
 - [ConfirmationDataEmbedded](docs/ConfirmationDataEmbedded.md)
 - [ConfirmationDataExternal](docs/ConfirmationDataExternal.md)
 - [ConfirmationDataMobileApplication](docs/ConfirmationDataMobileApplication.md)
 - [ConfirmationDataQr](docs/ConfirmationDataQr.md)
 - [ConfirmationDataRedirect](docs/ConfirmationDataRedirect.md)
 - [ConfirmationDataType](docs/ConfirmationDataType.md)
 - [ConfirmationEmbedded](docs/ConfirmationEmbedded.md)
 - [ConfirmationExternal](docs/ConfirmationExternal.md)
 - [ConfirmationMobileApplication](docs/ConfirmationMobileApplication.md)
 - [ConfirmationQr](docs/ConfirmationQr.md)
 - [ConfirmationRedirect](docs/ConfirmationRedirect.md)
 - [ConfirmationType](docs/ConfirmationType.md)
 - [CreateInvoiceRequest](docs/CreateInvoiceRequest.md)
 - [CreateInvoiceRequestDeliveryMethodData](docs/CreateInvoiceRequestDeliveryMethodData.md)
 - [CreatePaymentRequest](docs/CreatePaymentRequest.md)
 - [CreatePaymentRequestConfirmation](docs/CreatePaymentRequestConfirmation.md)
 - [CreatePaymentRequestPaymentMethodData](docs/CreatePaymentRequestPaymentMethodData.md)
 - [CreatePaymentRequestReceiver](docs/CreatePaymentRequestReceiver.md)
 - [CreatePaymentRequestStatementsInner](docs/CreatePaymentRequestStatementsInner.md)
 - [CreateWebhookRequest](docs/CreateWebhookRequest.md)
 - [CurrencyCode](docs/CurrencyCode.md)
 - [DealList](docs/DealList.md)
 - [DealStatus](docs/DealStatus.md)
 - [DealType](docs/DealType.md)
 - [DeliveryMethod](docs/DeliveryMethod.md)
 - [DeliveryMethodData](docs/DeliveryMethodData.md)
 - [DeliveryMethodDataEmail](docs/DeliveryMethodDataEmail.md)
 - [DeliveryMethodDataSelf](docs/DeliveryMethodDataSelf.md)
 - [DeliveryMethodDataSms](docs/DeliveryMethodDataSms.md)
 - [DeliveryMethodEmail](docs/DeliveryMethodEmail.md)
 - [DeliveryMethodSelf](docs/DeliveryMethodSelf.md)
 - [DeliveryMethodSms](docs/DeliveryMethodSms.md)
 - [ElectronicCertificate](docs/ElectronicCertificate.md)
 - [ElectronicCertificateApprovedPaymentArticle](docs/ElectronicCertificateApprovedPaymentArticle.md)
 - [ElectronicCertificateArticle](docs/ElectronicCertificateArticle.md)
 - [ElectronicCertificatePayment](docs/ElectronicCertificatePayment.md)
 - [ElectronicCertificatePaymentData](docs/ElectronicCertificatePaymentData.md)
 - [ElectronicCertificateRefundArticle](docs/ElectronicCertificateRefundArticle.md)
 - [ElectronicCertificateRefundDataRequest](docs/ElectronicCertificateRefundDataRequest.md)
 - [ElectronicCertificateRefundDataResponse](docs/ElectronicCertificateRefundDataResponse.md)
 - [ElectronicCertificateRefundMethod](docs/ElectronicCertificateRefundMethod.md)
 - [ElectronicCertificateRefundMethodData](docs/ElectronicCertificateRefundMethodData.md)
 - [FeeMoment](docs/FeeMoment.md)
 - [FiscalizationData](docs/FiscalizationData.md)
 - [FiscalizationProvider](docs/FiscalizationProvider.md)
 - [Forbidden](docs/Forbidden.md)
 - [GetSbpBanksResponse](docs/GetSbpBanksResponse.md)
 - [Gone](docs/Gone.md)
 - [IncomeReceipt](docs/IncomeReceipt.md)
 - [IndustryDetails](docs/IndustryDetails.md)
 - [InvalidCredentials](docs/InvalidCredentials.md)
 - [Invoice](docs/Invoice.md)
 - [InvoiceCancellationDetails](docs/InvoiceCancellationDetails.md)
 - [InvoiceDeliveryMethod](docs/InvoiceDeliveryMethod.md)
 - [InvoiceStatus](docs/InvoiceStatus.md)
 - [InvoicingBankCardData](docs/InvoicingBankCardData.md)
 - [LineItem](docs/LineItem.md)
 - [Locale](docs/Locale.md)
 - [MarkCodeInfo](docs/MarkCodeInfo.md)
 - [MarkQuantity](docs/MarkQuantity.md)
 - [Me](docs/Me.md)
 - [ModelError](docs/ModelError.md)
 - [MonetaryAmount](docs/MonetaryAmount.md)
 - [NotFound](docs/NotFound.md)
 - [NotificationEventType](docs/NotificationEventType.md)
 - [OperationalDetails](docs/OperationalDetails.md)
 - [Payment](docs/Payment.md)
 - [PaymentCancellationDetails](docs/PaymentCancellationDetails.md)
 - [PaymentCaptureRequest](docs/PaymentCaptureRequest.md)
 - [PaymentConfirmation](docs/PaymentConfirmation.md)
 - [PaymentData](docs/PaymentData.md)
 - [PaymentDealInfo](docs/PaymentDealInfo.md)
 - [PaymentDetails](docs/PaymentDetails.md)
 - [PaymentInvoiceDetails](docs/PaymentInvoiceDetails.md)
 - [PaymentList](docs/PaymentList.md)
 - [PaymentMethod](docs/PaymentMethod.md)
 - [PaymentMethodAlfabank](docs/PaymentMethodAlfabank.md)
 - [PaymentMethodApplePay](docs/PaymentMethodApplePay.md)
 - [PaymentMethodB2bSberbank](docs/PaymentMethodB2bSberbank.md)
 - [PaymentMethodB2bSberbankAllOfVatData](docs/PaymentMethodB2bSberbankAllOfVatData.md)
 - [PaymentMethodBankCard](docs/PaymentMethodBankCard.md)
 - [PaymentMethodCash](docs/PaymentMethodCash.md)
 - [PaymentMethodData](docs/PaymentMethodData.md)
 - [PaymentMethodDataB2bSberbank](docs/PaymentMethodDataB2bSberbank.md)
 - [PaymentMethodDataB2bSberbankAllOfVatData](docs/PaymentMethodDataB2bSberbankAllOfVatData.md)
 - [PaymentMethodDataBankCard](docs/PaymentMethodDataBankCard.md)
 - [PaymentMethodDataCash](docs/PaymentMethodDataCash.md)
 - [PaymentMethodDataElectronicCertificate](docs/PaymentMethodDataElectronicCertificate.md)
 - [PaymentMethodDataMobileBalance](docs/PaymentMethodDataMobileBalance.md)
 - [PaymentMethodDataSberBnpl](docs/PaymentMethodDataSberBnpl.md)
 - [PaymentMethodDataSberLoan](docs/PaymentMethodDataSberLoan.md)
 - [PaymentMethodDataSberbank](docs/PaymentMethodDataSberbank.md)
 - [PaymentMethodDataSbp](docs/PaymentMethodDataSbp.md)
 - [PaymentMethodDataTinkoffBank](docs/PaymentMethodDataTinkoffBank.md)
 - [PaymentMethodDataYooMoney](docs/PaymentMethodDataYooMoney.md)
 - [PaymentMethodElectronicCertificate](docs/PaymentMethodElectronicCertificate.md)
 - [PaymentMethodGooglePay](docs/PaymentMethodGooglePay.md)
 - [PaymentMethodInstallments](docs/PaymentMethodInstallments.md)
 - [PaymentMethodMobileBalance](docs/PaymentMethodMobileBalance.md)
 - [PaymentMethodQiwi](docs/PaymentMethodQiwi.md)
 - [PaymentMethodSberBnpl](docs/PaymentMethodSberBnpl.md)
 - [PaymentMethodSberLoan](docs/PaymentMethodSberLoan.md)
 - [PaymentMethodSberbank](docs/PaymentMethodSberbank.md)
 - [PaymentMethodSbp](docs/PaymentMethodSbp.md)
 - [PaymentMethodStatus](docs/PaymentMethodStatus.md)
 - [PaymentMethodTinkoffBank](docs/PaymentMethodTinkoffBank.md)
 - [PaymentMethodType](docs/PaymentMethodType.md)
 - [PaymentMethodWeChat](docs/PaymentMethodWeChat.md)
 - [PaymentMethodWebmoney](docs/PaymentMethodWebmoney.md)
 - [PaymentMethodYooMoney](docs/PaymentMethodYooMoney.md)
 - [PaymentMethodsConfirmation](docs/PaymentMethodsConfirmation.md)
 - [PaymentMethodsConfirmationData](docs/PaymentMethodsConfirmationData.md)
 - [PaymentMethodsConfirmationDataRedirect](docs/PaymentMethodsConfirmationDataRedirect.md)
 - [PaymentMethodsConfirmationRedirect](docs/PaymentMethodsConfirmationRedirect.md)
 - [PaymentMethodsConfirmationType](docs/PaymentMethodsConfirmationType.md)
 - [PaymentOrderBankUtilities](docs/PaymentOrderBankUtilities.md)
 - [PaymentOrderData](docs/PaymentOrderData.md)
 - [PaymentOrderDataUtilities](docs/PaymentOrderDataUtilities.md)
 - [PaymentOrderRecipientUtilities](docs/PaymentOrderRecipientUtilities.md)
 - [PaymentOverviewStatementData](docs/PaymentOverviewStatementData.md)
 - [PaymentOverviewStatementDeliveryMethod](docs/PaymentOverviewStatementDeliveryMethod.md)
 - [PaymentOverviewStatementDeliveryMethodType](docs/PaymentOverviewStatementDeliveryMethodType.md)
 - [PaymentOverviewStatementEmailDeliveryMethod](docs/PaymentOverviewStatementEmailDeliveryMethod.md)
 - [PaymentPaymentMethod](docs/PaymentPaymentMethod.md)
 - [PaymentPeriod](docs/PaymentPeriod.md)
 - [PaymentRecipient](docs/PaymentRecipient.md)
 - [PaymentStatus](docs/PaymentStatus.md)
 - [Payout](docs/Payout.md)
 - [PayoutCancellationDetails](docs/PayoutCancellationDetails.md)
 - [PayoutCardData](docs/PayoutCardData.md)
 - [PayoutDeal](docs/PayoutDeal.md)
 - [PayoutDealInfo](docs/PayoutDealInfo.md)
 - [PayoutDestination](docs/PayoutDestination.md)
 - [PayoutDestinationData](docs/PayoutDestinationData.md)
 - [PayoutDestinationDataType](docs/PayoutDestinationDataType.md)
 - [PayoutDestinationType](docs/PayoutDestinationType.md)
 - [PayoutMethodType](docs/PayoutMethodType.md)
 - [PayoutPayoutDestination](docs/PayoutPayoutDestination.md)
 - [PayoutRequest](docs/PayoutRequest.md)
 - [PayoutRequestPayoutDestinationData](docs/PayoutRequestPayoutDestinationData.md)
 - [PayoutSelfEmployed](docs/PayoutSelfEmployed.md)
 - [PayoutSelfEmployedInfo](docs/PayoutSelfEmployedInfo.md)
 - [PayoutStatementRecipientPersonalDataRequest](docs/PayoutStatementRecipientPersonalDataRequest.md)
 - [PayoutStatus](docs/PayoutStatus.md)
 - [PayoutToBankCardDestinationData](docs/PayoutToBankCardDestinationData.md)
 - [PayoutToCardDestination](docs/PayoutToCardDestination.md)
 - [PayoutToSbpDestination](docs/PayoutToSbpDestination.md)
 - [PayoutToSbpDestinationData](docs/PayoutToSbpDestinationData.md)
 - [PayoutToYooMoneyDestination](docs/PayoutToYooMoneyDestination.md)
 - [PayoutToYooMoneyDestinationData](docs/PayoutToYooMoneyDestinationData.md)
 - [PayoutToYooMoneyDestinationDataAllOfAccountNumber](docs/PayoutToYooMoneyDestinationDataAllOfAccountNumber.md)
 - [PayoutsList](docs/PayoutsList.md)
 - [PayoutsPersonalData](docs/PayoutsPersonalData.md)
 - [PersonalData](docs/PersonalData.md)
 - [PersonalDataCancellationDetails](docs/PersonalDataCancellationDetails.md)
 - [PersonalDataPostRequest](docs/PersonalDataPostRequest.md)
 - [PersonalDataRequest](docs/PersonalDataRequest.md)
 - [PersonalDataType](docs/PersonalDataType.md)
 - [PostReceiptData](docs/PostReceiptData.md)
 - [PostReceiptDataItem](docs/PostReceiptDataItem.md)
 - [PostReceiptItemSupplierWithInn](docs/PostReceiptItemSupplierWithInn.md)
 - [Receipt](docs/Receipt.md)
 - [ReceiptAdditionalUserProps](docs/ReceiptAdditionalUserProps.md)
 - [ReceiptData](docs/ReceiptData.md)
 - [ReceiptDataCustomer](docs/ReceiptDataCustomer.md)
 - [ReceiptDataItem](docs/ReceiptDataItem.md)
 - [ReceiptItem](docs/ReceiptItem.md)
 - [ReceiptItemAgentType](docs/ReceiptItemAgentType.md)
 - [ReceiptItemMeasure](docs/ReceiptItemMeasure.md)
 - [ReceiptItemPaymentMode](docs/ReceiptItemPaymentMode.md)
 - [ReceiptItemPaymentSubject](docs/ReceiptItemPaymentSubject.md)
 - [ReceiptItemSupplier](docs/ReceiptItemSupplier.md)
 - [ReceiptItemSupplierWithInn](docs/ReceiptItemSupplierWithInn.md)
 - [ReceiptList](docs/ReceiptList.md)
 - [ReceiptRegistrationStatus](docs/ReceiptRegistrationStatus.md)
 - [ReceiptType](docs/ReceiptType.md)
 - [Receiver](docs/Receiver.md)
 - [ReceiverBankAccount](docs/ReceiverBankAccount.md)
 - [ReceiverDigitalWallet](docs/ReceiverDigitalWallet.md)
 - [ReceiverMobileBalance](docs/ReceiverMobileBalance.md)
 - [ReceiverType](docs/ReceiverType.md)
 - [Recipient](docs/Recipient.md)
 - [Refund](docs/Refund.md)
 - [RefundAuthorizationDetails](docs/RefundAuthorizationDetails.md)
 - [RefundCancellationDetails](docs/RefundCancellationDetails.md)
 - [RefundDealData](docs/RefundDealData.md)
 - [RefundDealInfo](docs/RefundDealInfo.md)
 - [RefundList](docs/RefundList.md)
 - [RefundMethod](docs/RefundMethod.md)
 - [RefundMethodData](docs/RefundMethodData.md)
 - [RefundMethodType](docs/RefundMethodType.md)
 - [RefundRefundMethod](docs/RefundRefundMethod.md)
 - [RefundRequest](docs/RefundRequest.md)
 - [RefundSourcesData](docs/RefundSourcesData.md)
 - [RefundSourcesDataAmount](docs/RefundSourcesDataAmount.md)
 - [RefundSourcesDataPlatformFeeAmount](docs/RefundSourcesDataPlatformFeeAmount.md)
 - [RefundStatus](docs/RefundStatus.md)
 - [SafeDeal](docs/SafeDeal.md)
 - [SafeDealRequest](docs/SafeDealRequest.md)
 - [SavePaymentMethod](docs/SavePaymentMethod.md)
 - [SavePaymentMethodBankCard](docs/SavePaymentMethodBankCard.md)
 - [SavePaymentMethodData](docs/SavePaymentMethodData.md)
 - [SavePaymentMethodDataBankCard](docs/SavePaymentMethodDataBankCard.md)
 - [SavePaymentMethodHolder](docs/SavePaymentMethodHolder.md)
 - [SavePaymentMethodType](docs/SavePaymentMethodType.md)
 - [SbpParticipantBank](docs/SbpParticipantBank.md)
 - [SbpPayerBankDetails](docs/SbpPayerBankDetails.md)
 - [SbpPayoutRecipientPersonalDataRequest](docs/SbpPayoutRecipientPersonalDataRequest.md)
 - [SbpRefundMethod](docs/SbpRefundMethod.md)
 - [Settlement](docs/Settlement.md)
 - [SettlementItemType](docs/SettlementItemType.md)
 - [SettlementPaymentArrayInner](docs/SettlementPaymentArrayInner.md)
 - [SettlementPaymentItem](docs/SettlementPaymentItem.md)
 - [SettlementPayoutPayment](docs/SettlementPayoutPayment.md)
 - [SettlementPayoutRefund](docs/SettlementPayoutRefund.md)
 - [SettlementRefundArrayInner](docs/SettlementRefundArrayInner.md)
 - [SettlementRefundItem](docs/SettlementRefundItem.md)
 - [Statement](docs/Statement.md)
 - [ThreeDSecureDetails](docs/ThreeDSecureDetails.md)
 - [TooManyRequests](docs/TooManyRequests.md)
 - [Transfer](docs/Transfer.md)
 - [TransferAmount](docs/TransferAmount.md)
 - [TransferData](docs/TransferData.md)
 - [TransferDataCapture](docs/TransferDataCapture.md)
 - [TransferDataPayment](docs/TransferDataPayment.md)
 - [TransferPlatformFeeAmount](docs/TransferPlatformFeeAmount.md)
 - [TransferStatus](docs/TransferStatus.md)
 - [Webhook](docs/Webhook.md)
 - [WebhookList](docs/WebhookList.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="BasicAuth"></a>
### BasicAuth

- **Type**: HTTP basic authentication

<a id="OAuth2"></a>
### OAuth2

- **Type**: OAuth
- **Flow**: implicit
- **Authorization URL**: https://yookassa.ru/oauth/v2/authorize
- **Scopes**: 
 - **checkout:payments_create**: Право на создание платежей
 - **checkout:payments_capture**: Право на подтверждение платежей
 - **checkout:payments_cancel**: Право на отмену платежей
 - **checkout:payments_get**: Право на получение списка платежей
 - **checkout:refunds_create**: Право на создание возвратов
 - **checkout:refunds_get**: Право на получение списка возвратов
 - **checkout:receipts_get**: Право на получение списка возвратов
 - **checkout:get_fees**: Право на получение информации об удержанных комиссиях

