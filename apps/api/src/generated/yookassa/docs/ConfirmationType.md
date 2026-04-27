# ConfirmationType

Тип пользовательского процесса подтверждения платежа | - redirect - необходимо направить пользователя на страницу партнера; - external - необходимо подождать, пока пользователь самостоятельно подтвердит платеж; - qr - необходимо сгенерировать QR-код и отобразить его на странице оплаты, чтобы пользователь смог подтвердить платеж; - embedded - необходимо отобразить платежный виджет ЮKassa; - mobile_application - необходимо перенаправить пользователя в приложение партнера для оплаты.

## Enum

* `Redirect` (value: `'redirect'`)

* `External` (value: `'external'`)

* `Qr` (value: `'qr'`)

* `Embedded` (value: `'embedded'`)

* `MobileApplication` (value: `'mobile_application'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
