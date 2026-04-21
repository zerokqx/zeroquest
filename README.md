# ZeroQuest Monorepo

ZeroQuest — монорепозиторий на `Nx` для headless-магазина и сервисов вокруг `3x-ui`.

## Технологический стек

- `Nx` — orchestration/build graph для apps/libs
- `NestJS` — backend-сервисы (`api`, `wallet-service`)
- `React + Vite` — фронтенд (`zeroquest`)
- `TanStack Router + React Query` — роутинг и серверный state на фронтенде
- `Mantine` — UI-компоненты фронтенда
- `Prisma` — доступ к БД
- `Redis` — transport/queues/cache
- `PostgreSQL` — основная БД
- `Bun` — package manager/runtime для workspace-команд

## Структура проекта

### Apps (`./apps`)

- `api` — основной backend API (HTTP + интеграции + доменная логика)
- `wallet-service` — отдельный сервис кошелька
- `zeroquest` — frontend-приложение
- `telegram-bot` — интерфейс магазина через Telegram
- `*-e2e` — e2e-проекты для соответствующих приложений

### Libs (`./libs`)

- `config` — централизованная конфигурация Nest (`forRoot`, `forFeature`)
- `db` — Prisma schema/client и DB-модуль
- `types` — общие типы и контракты между приложениями
- `converters` — общие конвертеры/мапперы
- `nest-shared` — общие Nest-guard/decorator/interceptor утилиты

## Что добавлено в текущей версии

### Backend

- Добавлен `policy` слой в `apps/api/src/policy`:
  - получение актуального документа `GET /api/policy/actual?type=...`
  - валидация и фиксация юридических акцептов в `legal_acceptances`
  - проверка обязательных типов документов перед критичными операциями
- Login (`/api/auth/password`) теперь требует акцепт `PRIVACY`.
- Покупка подписки (`/api/subscriptions`) теперь требует акцепт `TERMS`.
- Для покупки подписки добавлена более понятная обработка конфликта уникального имени устройства.

### Frontend (`apps/zeroquest`)

- Добавлены страницы/маршруты:
  - `/dashboard`
  - `/magazine`
  - `/payment-history`
  - `/policy?type=PRIVACY|PUBLIC|TERMS`
  - кастомная 404-страница
- Добавлены доменные UI-модули:
  - `entites/wallet` (`WalletCard`, `NextBalanceCard`)
  - `entites/payment` + `widgets/payment`
  - `features/buy-subscribe`
- `WalletCard`:
  - показывает доступный/общий/замороженный баланс
  - содержит кнопку `Пополнить баланс` с модалкой `CreditBalanceForm`
  - содержит кнопку перехода в `История платежей`
- `NextBalanceCard` поддерживает режимы операций:
  - `debit` (по умолчанию) — вычитает сумму
  - `credit` — прибавляет сумму
  - отрицательный результат подсвечивается красным
- В форме покупки подписки:
  - отображаются ошибки бэкенда
  - покупка блокируется при недостатке средств
  - отправляется акцепт актуального `TERMS`

## Юридические документы и policy flow

- Исходники документов лежат в `./policy`:
  - `PRIVACY_POLICY.md`
  - `PUBLIC_OFFER.md`
  - `TERMS_OF_SERVICE.md`
- Frontend получает актуальные версии через `GET /api/policy/actual`.
- При входе и покупке фронтенд отправляет массив `policy` (тип + версия документа), а backend валидирует существование таких версий и сохраняет акцепт.

## Быстрый старт

### 1. Установка зависимостей

```bash
bun install
```

### 2. Конфигурация окружения

Конфиг централизован в корне:

- `/.env` — базовые значения
- `/.env.local` — локальные override (имеет приоритет над `.env`)

Загрузка env делается из `@zeroquest/config` через абсолютные пути к корню workspace.

### 3. Поднять инфраструктуру (DB/Redis)

```bash
docker compose up -d postgres redis
```

или через таргеты `api`:

```bash
bunx nx docker:db api -- up -d
bunx nx docker:redis api -- up -d
```

### 4. Генерация Prisma клиента (при необходимости)

```bash
bunx nx prisma:generate api
```

### 4.1 Миграции Prisma (локальная разработка)

```bash
# применить новые миграции
bunx prisma migrate dev --schema libs/db/prisma/schema.prisma

# посмотреть состояние миграций
bunx prisma migrate status --schema libs/db/prisma/schema.prisma
```

### 5. Запуск сервисов

```bash
# API
bunx nx serve api

# Wallet service
bunx nx serve wallet-service

# Frontend
bunx nx serve zeroquest
```

## Полезные команды

```bash
# Сборка конкретного приложения
bunx nx build api
bunx nx build wallet-service

# Запуск e2e
bunx nx e2e api-e2e
bunx nx e2e wallet-service-e2e

# Остановить backend-контейнеры через api target
bunx nx docker:down:all api
```

## Конфиг и централизованность

В проекте принято:

- не хранить `.env` в `apps/*` и `libs/*`
- использовать только корневые `/.env` и `/.env.local`
- подключать конфиг модулем `ZeroquestConfigModule.forRoot(...)`
- держать feature-конфиги через `registerAs(...)` + `forFeature(...)` внутри `libs/config`

## Docker/Nginx

Базовый compose находится в [compose.yaml](/home/zerok/projects/zeroquest/compose.yaml).

Для reverse-proxy используется конфиг в `infra/nginx/*` (если нужен внешний роутинг между `api`, `wallet-service`, frontend).

## Важные замечания по безопасности

- Не логировать секреты (`YOOKASSA_API_TOKEN`, auth headers, JWT secrets)
- `/.env.local` не коммитить в публичные репозитории
- После утечки токенов перевыпускать их у провайдера

## Рекомендованный поток разработки

1. Обновить `/.env.local` под локальную машину
2. Поднять `postgres`/`redis`
3. Запустить `api` + нужные сервисы
4. Внести изменения в libs/apps
5. Прогнать `bunx nx build <project>` перед коммитом
