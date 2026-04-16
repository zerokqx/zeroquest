# @zeroquest/api 🚀

Backend на NestJS для ZeroQuest: авторизация, платежи, подписки, интеграции и серверные события.

## 🌐 Внешние API (их ровно 2)

Проект использует **две внешние API-интеграции**:

1. **3x-ui API** (`three-x-ui/`)  
   Управление VPN-узлами, inbound-конфигурациями и доступами пользователя.
2. **YooKassa API** (`yookassa/`)  
   Создание платежей, обработка webhook, запуск бизнес-логики после подтвержденной оплаты.

## 🧱 Микросервис Wallet

В проекте есть фоновый микросервис `wallet-service`, который отвечает только за регулярные списания.

- Работает **без внешнего транспорта** (без публичного HTTP/gRPC входа).
- Выполняет задачи по расписанию через `cron`.
- Раз в месяц делает автоматические списания за все подписки в базе, у которых статус **не `STOPPED`**.
- Запущен в фоне для повышения устойчивости: меньше внешней поверхности атаки и ниже риск прямого воздействия на процесс списаний.

## ⚙️ Технологический стек

- `NestJS` + `TypeScript`
- `PostgreSQL` + `Prisma`
- `Redis` + `BullMQ`
- `SSE` для server-to-client уведомлений
- `Swagger` для API-документации

## 🧩 Модули

- `auth` - логин, регистрация, refresh токены
- `session` - пользовательские сессии и refresh-контекст
- `client-type` - guard и справочник типов клиента (`x-client-type`)
- `payment` - платежи, SSE-события, storage
- `yookassa` - исходящие запросы в YooKassa + webhook
- `subscribe` - подписки и фоновая обработка после оплаты
- `plan` / `inbound` - тарифы и inbound-конфигурации
- `three-x-ui` - интеграция с 3x-ui
- `user` - профиль текущего пользователя

## ⚡ Быстрый старт

### 1) Установка зависимостей

```bash
bun install
```

### 2) Переменные окружения

Приложение читает `.env` и `.env.local` (значения из `.env.local` приоритетнее).

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
- `THREE_X_UI_*` (для интеграции с 3x-ui)

Конфигурация собирается в [src/config/configuration.ts](./src/config/configuration.ts).

### 3) Prisma

```bash
bunx prisma generate --schema ./prisma/schema.prisma
bunx prisma migrate dev --schema ./prisma/schema.prisma
```

### 4) Локальная инфраструктура

```bash
nx docker:db api up -d
nx docker:redis api up -d
```

### 5) Запуск

```bash
nx serve api
```

API будет доступно по префиксу `/api`, Swagger - по `/docs`.

## 🛠 Полезные команды

```bash
nx prisma:generate api
nx prisma:migrate:dev api
nx prisma:migrate:deploy api
nx build api
nx serve api
```

Если используется `devenv`, доступны зеркальные команды `nx devenv:prisma:* api`.

## 📚 Документация

- [Архитектура](./docs/ARCHITECTURE.md)
- [Основные потоки](./docs/FLOWS.md)

## 🗂 Структура проекта

```text
src/
  app/              корневой модуль приложения
  auth/             аутентификация и refresh flow
  client-type/      guard, decorators и client types
  inbound/          inbound-конфигурации
  payment/          платежи, SSE, persistence
  plan/             тарифные планы
  session/          сессии пользователей
  subscribe/        подписки и BullMQ processor
  three-x-ui/       интеграция с 3x-ui API
  token/            JWT-подпись и верификация
  user/             профиль пользователя
  yookassa/         интеграция с YooKassa API
prisma/
  schema.prisma
  migrations/
```

## 🧠 Архитектурные правила

- Доступ к БД вынесен в `*.repository.ts`, сервисы не инжектят `PrismaService` напрямую.
- `YookassaService` отвечает только за внешний API YooKassa.
- Webhook YooKassa обрабатывается в отдельном `YookassaWebhookService`.
- Ownership-lookup по `id + userId` реализован через составные уникальные ключи Prisma.
- SSE построены на in-memory `PaymentEventService` и работают в рамках одного инстанса API.

## ❗ Важные замечания

- В Prisma schema есть исторические опечатки в `@map(...)` (`inbount_id`, `durataton_days`) - в SQL использовать реальные имена колонок.
- In-memory SSE/event bus не масштабируются горизонтально без внешнего брокера.
- После правок `prisma/schema.prisma` нужно запускать `prisma generate` и миграции для БД.
