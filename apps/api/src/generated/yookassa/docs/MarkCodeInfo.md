# MarkCodeInfo

Код товара (тег в 54 ФЗ — 1163). Обязательный параметр, если одновременно выполняются эти условия: * вы используете Чеки от ЮKassa или онлайн-кассу, обновленную до ФФД 1.2; * товар нужно маркировать: http://docs.cntd.ru/document/902192509. Должно быть заполнено хотя бы одно поле.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mark_code_raw** | **string** | Код товара в том виде, в котором он был прочитан сканером (тег в 54 ФЗ — 2000). Нужно передавать, если используете онлайн-кассу Orange Data. Пример: 010460406000590021N4N57RTCBUZTQ\\u001d2403054002410161218\\u001d1424010191ffd0\\u001g92tIAF/YVpU4roQS3M/m4z78yFq0nc/WsSmLeX6QkF/YVWwy5IMYAeiQ91Xa2m/fFSJcOkb2N+uUUtfr4n0mOX0Q&#x3D;&#x3D; | [optional] [default to undefined]
**unknown** | **string** | Нераспознанный код товара (тег в 54 ФЗ — 1300). | [optional] [default to undefined]
**ean_8** | **string** | Код товара в формате EAN-8 (тег в 54 ФЗ — 1301). | [optional] [default to undefined]
**ean_13** | **string** | Код товара в формате EAN-13 (тег в 54 ФЗ — 1302). | [optional] [default to undefined]
**itf_14** | **string** | Код товара в формате ITF-14 (тег в 54 ФЗ — 1303). | [optional] [default to undefined]
**gs_10** | **string** | Код товара в формате GS1.0 (тег в 54 ФЗ — 1304). Можно передавать, если используете онлайн-кассу Orange Data, aQsi, Кит Инвест, АТОЛ Онлайн. | [optional] [default to undefined]
**gs_1m** | **string** | Код товара в формате GS1.M (тег в 54 ФЗ — 1305). | [optional] [default to undefined]
**_short** | **string** | Код товара в формате короткого кода маркировки (тег в 54 ФЗ — 1306). | [optional] [default to undefined]
**fur** | **string** | Контрольно-идентификационный знак мехового изделия (тег в 54 ФЗ — 1307). | [optional] [default to undefined]
**egais_20** | **string** | Код товара в формате ЕГАИС-2.0 (тег в 54 ФЗ — 1308). | [optional] [default to undefined]
**egais_30** | **string** | Код товара в формате ЕГАИС-3.0 (тег в 54 ФЗ — 1309). | [optional] [default to undefined]

## Example

```typescript
import { MarkCodeInfo } from 'yookassa-client';

const instance: MarkCodeInfo = {
    mark_code_raw,
    unknown,
    ean_8,
    ean_13,
    itf_14,
    gs_10,
    gs_1m,
    _short,
    fur,
    egais_20,
    egais_30,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
