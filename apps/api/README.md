# @zeroquest/api

NestJS API для ZeroQuest. Проект использует PostgreSQL через Prisma, Redis/BullMQ для фоновых задач, YooKassa для платежей, 3x-ui как внешнюю панель и SSE для серверных уведомлений клиенту.

## Что внутри

- `auth` — логин, регистрация, refresh токенов, создание сессий
- `session` — пользовательские сессии и refresh-контекст
- `client-type` — справочник типов клиента и HTTP guard для `x-client-type`
- `payment` — создание платежей, SSE-уведомления, хранилище платежей
- `yookassa` — исходящие запросы в YooKassa и обработка webhook
- `subscribe` — подписки и очередь фоновой обработки после оплаты
- `plan` / `inbound` — тарифы и inbound-конфигурации
- `three-x-ui` — интеграция с внешней x-ui панелью
- `user` — профиль текущего пользователя

## Быстрый старт

### Зависимости

```bash
bun install
```

### Переменные окружения

Приложение читает корневые `.env.local` и `.env`. Значения из `.env.local` переопределяют `.env`.

Минимально нужны:

- `POSTGRES_PORT`
- `POSTGRES_DB`
- `POSTGRES_USER`
- `POSTGRES_PASSWORD`
- `REDIS_PORT`
- `JWT_EXPIRES_TIME`
- `YOOKASSA_API_TOKEN` или `YOOKASSA_TOKEN`
- `YOOKASSA_SHOP_ID`
- `YOOKASSA_REDIRECT_TO`
- `THREE_X_UI_*` при использовании интеграции с 3x-ui

Конфигурация собирается в [src/config/configuration.ts](./src/config/configuration.ts).

### Prisma

```bash
bunx prisma generate --schema ./prisma/schema.prisma
bunx prisma migrate dev --schema ./prisma/schema.prisma
```

### Локальная инфраструктура

```bash
nx docker:db api up -d
nx docker:redis api up -d
```

### Запуск

```bash
nx serve api
```

После старта API доступно по префиксу `/api`, Swagger — по `/docs`.

## Полезные команды

```bash
nx prisma:generate api
nx prisma:migrate:dev api
nx prisma:migrate:deploy api
nx build api
nx serve api
```

Если используется `devenv`, есть зеркальные команды `nx devenv:prisma:* api`.

## Документация

- [Архитектура](./docs/ARCHITECTURE.md)
- [Основные потоки](./docs/FLOWS.md)

## Структура проекта

```text
src/
  app/              корневой модуль приложения
  auth/             аутентификация и refresh flow
  client-type/      guard, decorators и справочник client types
  inbound/          inbound-конфигурации
  payment/          платежи, SSE, persistence
  plan/             тарифные планы
  session/          сессии пользователей
  subscribe/        подписки и BullMQ processor
  three-x-ui/       интеграция с 3x-ui
  token/            JWT-подпись и верификация
  user/             профиль пользователя
  yookassa/         интеграция с YooKassa
prisma/
  schema.prisma
  migrations/
```

## Архитектурные правила в текущем коде

- Доступ к БД вынесен в `*.repository.ts`, сервисы не инжектят `PrismaService` напрямую.
- `YookassaService` отвечает только за внешний API YooKassa.
- Webhook-обработка YooKassa вынесена в отдельный `YookassaWebhookService`.
- Для ownership-lookup по `id + userId` используются составные уникальные ключи в Prisma schema.
- SSE-уведомления сейчас реализованы через in-memory `PaymentEventService`, поэтому работают в рамках одного инстанса API.

## Важные замечания

- В Prisma schema уже есть исторические опечатки в `@map(...)`, например `inbount_id` и `durataton_days`. При ручном SQL надо использовать именно реальные имена колонок.
- SSE и in-memory event bus не масштабируются на несколько инстансов без внешнего broker.
- Для корректной работы schema и generated client после изменений в `prisma/schema.prisma` нужно запускать `prisma generate`, а для БД — миграции.
