# Архитектура API

## Обзор

`@zeroquest/api` — модульный NestJS backend c PostgreSQL, Redis и внешними интеграциями. Основной HTTP префикс задаётся в [src/main.ts](../src/main.ts), там же включаются глобальные pipe, cookies, Swagger и Redis microservice transport.

Ключевые инфраструктурные зависимости:

- PostgreSQL через Prisma: [src/prisma.service.ts](../src/prisma.service.ts)
- Redis / BullMQ: [src/app/app.module.ts](../src/app/app.module.ts), [src/queue.module.ts](../src/queue.module.ts)
- YooKassa: [src/yookassa/yookassa.service.ts](../src/yookassa/yookassa.service.ts)
- 3x-ui: [src/three-x-ui/three-x-ui.service.ts](../src/three-x-ui/three-x-ui.service.ts)
- SSE для событий по платежам: [src/payment/payment.controller.ts](../src/payment/payment.controller.ts), [src/payment/payment-event.service.ts](../src/payment/payment-event.service.ts)

## Composition Root

Корневой модуль: [src/app/app.module.ts](../src/app/app.module.ts)

Он подключает:

- `ConfigModule` c конфигурацией из [src/config/configuration.ts](../src/config/configuration.ts)
- глобальный `CacheModule`
- `ClientsModule` на Redis transport
- глобальный `BullModule`
- доменные модули: `AuthModule`, `PlanModule`, `PaymentModule`, `SubscribeModule`, `ClientTypeModule`, `InboundModule`, `UserModule`, `ThreeXUiModule`

Глобальные guard:

- `ClientTypeGuard` — проверяет заголовок `x-client-type` на маршрутах, где стоит `@ClientType(...)`
- `AuthGuard` — JWT/cookie auth
- `RoleGuard` — проверка ролей

## Слои

Проект использует простой расклад:

- `controller` — HTTP boundary
- `service` — application logic / orchestration
- `repository` — Prisma access

Это особенно видно в модулях `auth`, `session`, `payment`, `subscribe`, `plan`, `inbound`, `user`.

## Доменные модули

### Auth

Файлы:

- [src/auth/auth.module.ts](../src/auth/auth.module.ts)
- [src/auth/auth.service.ts](../src/auth/auth.service.ts)
- [src/auth/auth.repository.ts](../src/auth/auth.repository.ts)
- [src/auth/auth.controller.ts](../src/auth/auth.controller.ts)

Ответственность:

- логин по паролю
- регистрация
- refresh access/refresh пары
- управление refresh hash / jti через транзакции

Сервис зависит от:

- `TokenService`
- `SessionService`
- `AuthRepository`

### Session

Файлы:

- [src/session/session.module.ts](../src/session/session.module.ts)
- [src/session/session.service.ts](../src/session/session.service.ts)
- [src/session/session.repository.ts](../src/session/session.repository.ts)

Ответственность:

- создание сессии
- проверка доступности `ClientType`
- обновление и удаление сессий
- выборки по `userId`

### Client Type

Файлы:

- [src/client-type/client-type.module.ts](../src/client-type/client-type.module.ts)
- [src/client-type/client-type.guard.ts](../src/client-type/client-type.guard.ts)
- [src/client-type/client-type.decorator.ts](../src/client-type/client-type.decorator.ts)
- [src/client-type/client-type.repository.ts](../src/client-type/client-type.repository.ts)

Ответственность:

- проверка заголовка `x-client-type`
- хранение и проверка существования допустимых типов клиентов в БД

### Payment

Файлы:

- [src/payment/payment.module.ts](../src/payment/payment.module.ts)
- [src/payment/payment-persistence.module.ts](../src/payment/payment-persistence.module.ts)
- [src/payment/payment.service.ts](../src/payment/payment.service.ts)
- [src/payment/payment.repository.ts](../src/payment/payment.repository.ts)
- [src/payment/payment-event.service.ts](../src/payment/payment-event.service.ts)
- [src/payment/payment.controller.ts](../src/payment/payment.controller.ts)

Ответственность:

- создание платежа
- выборка пользовательских платежей
- SSE stream `/payment/events`
- хранение/поиск платежей

Архитектурное решение:

- `PaymentService` зависит от `YookassaService`, но `YookassaModule` не зависит обратно от `PaymentModule`
- общий persistence вынесен в `PaymentPersistenceModule`, чтобы избежать циклической модульной зависимости

### YooKassa

Файлы:

- [src/yookassa/yookassa.service.ts](../src/yookassa/yookassa.service.ts)
- [src/yookassa/yookassa-webhook.service.ts](../src/yookassa/yookassa-webhook.service.ts)
- [src/yookassa/yookassa.controller.ts](../src/yookassa/yookassa.controller.ts)

Ответственность:

- исходящие запросы в YooKassa API
- приём webhook
- перевод webhook-события в обновление локальных сущностей и enqueue в подписочную очередь

Важно:

- `YookassaService` — внешний client/adaptor
- бизнес-обработка webhook не смешана с HTTP-клиентом

### Subscribe

Файлы:

- [src/subscribe/subscribe.module.ts](../src/subscribe/subscribe.module.ts)
- [src/subscribe/subscribe.service.ts](../src/subscribe/subscribe.service.ts)
- [src/subscribe/subscribe.repository.ts](../src/subscribe/subscribe.repository.ts)
- [src/subscribe/subscribe.processor.ts](../src/subscribe/subscribe.processor.ts)

Ответственность:

- CRUD для подписок
- BullMQ processor очереди `subscribe`
- отправка SSE-уведомления пользователю после обработки job

### Plan / Inbound

Файлы:

- [src/plan/plan.module.ts](../src/plan/plan.module.ts)
- [src/plan/plan.repository.ts](../src/plan/plan.repository.ts)
- [src/inbound/inbound.module.ts](../src/inbound/inbound.module.ts)
- [src/inbound/inbound.repository.ts](../src/inbound/inbound.repository.ts)

Ответственность:

- справочные сущности для продажи тарифов и интеграции с x-ui

Особенность:

- `PlanRepository` кэширует read-методы через Nest Cache Manager

### Three X UI

Файлы:

- [src/three-x-ui/three-x-ui.service.ts](../src/three-x-ui/three-x-ui.service.ts)

Ответственность:

- логин в x-ui панель
- удержание cookie сессии
- перезапрос при `401/403`
- операции `getInbounds` и `addClient`

### User

Файлы:

- [src/user/user.service.ts](../src/user/user.service.ts)
- [src/user/user.repository.ts](../src/user/user.repository.ts)

Ответственность:

- профиль текущего пользователя
- частичный апдейт профиля
- кеширование `me`

## Persistence

Prisma schema: [prisma/schema.prisma](../prisma/schema.prisma)

Основные сущности:

- `User`
- `Session`
- `ClientType`
- `Plan`
- `Inbound`
- `Payment`
- `Subscribe`
- `Refund`
- `Review`

Важные особенности схемы:

- ownership-lookup реализован через `@@unique([id, userId])` в `Session`, `Payment`, `Subscribe`
- есть исторические опечатки в `@map(...)`:
  - `inbount_id`
  - `durataton_days`
  - `refrest_token_jti`
- `ClientType` теперь содержит `createdAt` и `updatedAt`

## Eventing

### BullMQ

Очередь регистрируется в [src/queue.module.ts](../src/queue.module.ts):

- queue name: `subscribe`

Процессор: [src/subscribe/subscribe.processor.ts](../src/subscribe/subscribe.processor.ts)

### SSE

Текущий SSE endpoint:

- `GET /api/payment/events`

Источник событий:

- [src/payment/payment-event.service.ts](../src/payment/payment-event.service.ts)

Особенности текущей реализации:

- in-memory event bus
- fan-out по `userId`
- heartbeat держится на уровне контроллера
- подходит для одного инстанса API, но не для горизонтального масштабирования

## Технические замечания

- `PaymentEventService` хранит listeners в памяти процесса; для multi-instance deployment нужен Redis pub/sub или другой внешний broker.
- В проекте уже есть migrations, но schema и БД нужно держать синхронно; после изменений недостаточно только `prisma generate`.
- Есть логические места для дальнейшей полировки:
  - cleanup listeners в SSE
  - более явная документация seed-данных (`ClientType`, `Inbound`, `Plan`)
  - вынос общих event types в отдельный слой
