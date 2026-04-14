# ZeroQuest Monorepo

ZeroQuest — монорепозиторий на `Nx` для headless-магазина и сервисов вокруг `3x-ui`.

## Технологический стек

- `Nx` — orchestration/build graph для apps/libs
- `NestJS` — backend-сервисы (`api`, `wallet-service`)
- `React + Vite` — фронтенд (`zeroquest`)
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
