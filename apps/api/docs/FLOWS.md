# Основные Потоки

## 1. Логин по паролю

Файлы:

- [src/auth/auth.controller.ts](../src/auth/auth.controller.ts)
- [src/auth/auth.service.ts](../src/auth/auth.service.ts)
- [src/session/session.service.ts](../src/session/session.service.ts)
- [src/token/token.service.ts](../src/token/token.service.ts)

Шаги:

1. Клиент вызывает auth endpoint с логином, паролем, `x-client-type` и `user-agent`.
2. `ClientTypeGuard` пропускает только разрешённые client types.
3. `AuthService.password()` ищет пользователя по login и сверяет hash пароля.
4. `SessionService.create()` создаёт сессию и привязывает её к `ClientType`.
5. `TokenService` генерирует access/refresh пару.
6. Refresh token hash и JTI пишутся в `Session`.

## 2. Регистрация

Файлы:

- [src/auth/auth.service.ts](../src/auth/auth.service.ts)

Шаги:

1. Проверяется уникальность `login`.
2. Пароль хешируется через `bcryptjs`.
3. В транзакции создаются:
   - `User`
   - `Session`
   - refresh hash / refresh JTI
4. Клиент получает token pair.

## 3. Refresh токена

Файлы:

- [src/auth/auth.service.ts](../src/auth/auth.service.ts)
- [src/auth/auth.repository.ts](../src/auth/auth.repository.ts)

Поток:

1. Проверяется payload refresh токена:
   - тип токена
   - `clientType`
   - `userAgentHash`
2. Из БД читается `Session` вместе с `clientType` и `user.role`.
3. Проверяется соответствие:
   - `clientType`
   - `userAgentHash`
   - `refreshTokenJti`
   - `userId`
4. Генерируется новая token pair.
5. Refresh hash и JTI обновляются атомарно через `updateMany` с фильтром по старому JTI.

## 4. Создание платежа

Файлы:

- [src/payment/payment.service.ts](../src/payment/payment.service.ts)
- [src/yookassa/yookassa.service.ts](../src/yookassa/yookassa.service.ts)
- [src/payment/payment.repository.ts](../src/payment/payment.repository.ts)

Поток:

1. API принимает `planId`.
2. `PaymentService` читает `Plan`.
3. Формируется запрос в YooKassa:
   - amount
   - description
   - confirmation URL
   - metadata (`userId`, `planId`, `clientType`)
4. `YookassaService` создаёт платёж у провайдера.
5. Ответ сохраняется в локальной таблице `payments`.

## 5. YooKassa webhook -> Subscribe job

Файлы:

- [src/yookassa/yookassa.controller.ts](../src/yookassa/yookassa.controller.ts)
- [src/yookassa/yookassa-webhook.service.ts](../src/yookassa/yookassa-webhook.service.ts)
- [src/subscribe/subscribe.processor.ts](../src/subscribe/subscribe.processor.ts)

Поток:

1. YooKassa присылает webhook.
2. По `providerPaymentId` ищется локальный `Payment`.
3. Если payment уже `SUCCEEDED`, webhook игнорируется.
4. При `payment.succeeded` в очередь `subscribe` публикуется job.
5. `SubscribeProcessor` обрабатывает job и шлёт SSE-уведомление пользователю.

## 6. SSE уведомления по платежам

Файлы:

- [src/payment/payment.controller.ts](../src/payment/payment.controller.ts)
- [src/payment/payment-event.service.ts](../src/payment/payment-event.service.ts)

Поток:

1. Клиент открывает `GET /api/payment/events`.
2. Контроллер подписывает соединение на user-specific event stream.
3. Дополнительно подмешивается heartbeat.
4. `PaymentEventService.emit(userId, data)` fan-out'ит событие всем listeners пользователя.

Ограничения:

- event bus in-memory
- listeners живут в памяти процесса
- несколько инстансов backend без внешнего broker не увидят одни и те же события

## 7. Работа с подписками

Файлы:

- [src/subscribe/subscribe.service.ts](../src/subscribe/subscribe.service.ts)
- [src/subscribe/subscribe.repository.ts](../src/subscribe/subscribe.repository.ts)

Поток:

1. Подписка привязывается к:
   - `User`
   - `Payment`
   - `Plan`
2. Для доступа пользователя к своей записи используется compound unique lookup `id + userId`.

## 8. Работа с client-type

Файлы:

- [src/client-type/client-type.guard.ts](../src/client-type/client-type.guard.ts)
- [src/client-type/client-type.decorator.ts](../src/client-type/client-type.decorator.ts)
- [src/client-type/client-type.repository.ts](../src/client-type/client-type.repository.ts)

Поток:

1. На роуте ставится `@ClientType('web', ...)`.
2. `ClientTypeGuard` читает `x-client-type`.
3. Если заголовка нет или значение не разрешено, запрос отклоняется `400 Bad Request`.
4. При создании сессии `SessionService` отдельно проверяет существование такого `ClientType` в БД.
