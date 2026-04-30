# ZeroQuest Monorepo

ZeroQuest — продуктовый монорепозиторий VPN-магазина: backend API, frontend-кабинет, Telegram-бот, e2e-проекты и shared-библиотеки.

Главная цель этого репозитория: быстро и предсказуемо развивать VPN-продукт как единый инженерный контур, где бизнес-логика, интерфейсы и инфраструктурные команды живут в одном месте и собираются через `Nx`.

## Что именно умеет платформа

- продажа и управление VPN-подписками;
- платежный контур (YooKassa) и lifecycle платежей;
- интеграция с `3x-ui` для управления VPN-клиентами;
- личный кабинет пользователя (`zeroquest` frontend);
- Telegram-канал взаимодействия (`telegram-bot`);
- единый граф задач, сборок и тестов через `Nx`.

## Технологический стек

- `Nx` — orchestration, task graph, caching, affected-runs;
- `Bun` — пакетный менеджер и runtime команд;
- `NestJS` — backend и доменные сервисы;
- `React + Vite + Mantine` — frontend;
- `TanStack Router + React Query` — роутинг и server-state;
- `Prisma + PostgreSQL` — доступ к данным;
- `Redis` — инфраструктурные сценарии (очереди/кэш);
- `Playwright / Jest / Vitest` — e2e и unit/integration тесты.

## Карта репозитория

### Apps

| Путь | Проект | Роль |
| --- | --- | --- |
| `apps/api` | `@zeroquest/api` | Основной backend API и интеграции (`YooKassa`, `3x-ui`). |
| `apps/zeroquest` | `@zeroquest/zeroquest` | Frontend (личный кабинет, магазин, история платежей). |
| `apps/telegram-bot` | `@zeroquest/telegram-bot` | Telegram-интерфейс продукта. |
| `apps/api-e2e` | `@zeroquest/api-e2e` | e2e/интеграционные тесты API. |
| `apps/zeroquest-e2e` | `@zeroquest/zeroquest-e2e` | Playwright e2e frontend. |
| `apps/telegram-bot-e2e` | `@zeroquest/telegram-bot-e2e` | e2e/интеграционные тесты бота. |
| `apps/api/src/generated/yookassa` | `yookassa-client` | Сгенерированный OpenAPI SDK YooKassa. |

### Libs

| Путь | Проект | Роль |
| --- | --- | --- |
| `libs/config` | `@zeroquest/config` | Централизованная конфигурация и env-обвязка. |
| `libs/db` | `@zeroquest/db` | Prisma schema/client + seed. |
| `libs/types` | `@zeroquest/types` | Общие доменные и транспортные типы. |
| `libs/converters` | `@zeroquest/converters` | Утилиты преобразования данных. |
| `libs/nest-shared` | `@zeroquest/nest-shared` | Общие NestJS-помощники и abstractions. |

## Быстрый старт (локальная разработка)

### 1. Установка зависимостей

```bash
bun install
```

### 2. Конфигурация окружения

Репозиторий использует корневые env-файлы:

- `/.env.example` (шаблон с примерами)
- `/.env`
- `/.env.local` (локальный override)

Быстрый старт:

```bash
cp .env.example .env.local
```

Минимально проверь, что заполнены подключения к БД/Redis и ключи внешних интеграций (`YooKassa`, `3x-ui`).

Ключевые переменные для `3x-ui`:

- `THREE_X_UI_PROTOCOL` (`http`/`https`)
- `THREE_X_UI_HOST`
- `THREE_X_UI_PORT`
- `THREE_X_UI_WEB_BASE_PATH`
- `THREE_X_UI_USERNAME`
- `THREE_X_UI_PASSWORD`
- `THREE_X_UI_TIMEOUT_MS`
- `THREE_X_UI_TLS_INSECURE` (`true`/`false`, полезно для локального IP/tunnel-сценария)
- `THREE_X_UI_TLS_SERVER_NAME` (опционально, SNI при `https` + IP)

### 3. Поднять инфраструктуру

```bash
docker compose up -d postgres redis
```

### 4. Миграции и seed

```bash
# разработка миграций
bunx nx db-migrate-dev

# прод-применение миграций
bunx nx db-migrate-deploy

# сиды
bunx nx db-seed
```

### 5. Запуск приложений

```bash
# backend API
bunx nx serve api

# frontend
bunx nx serve zeroquest

# telegram bot
bunx nx serve telegram-bot
```

### 6. Генерация клиентов API

```bash
# backend: перегенерация YooKassa SDK
bunx nx yookassa:openapi api

# frontend: перегенерация orval-клиента
bunx nx orval:run zeroquest
```

### 7. Проверка качества перед merge

```bash
# lint и typecheck по всем проектам
bunx nx run-many -t lint,typecheck --all

# unit/integration/e2e (по необходимости)
bunx nx run-many -t test,e2e --all
```

## Workspace-таргеты (корень репозитория)

Корневой проект (`@zeroquest/source`) содержит db-таргеты-обертки, чтобы не запоминать `cwd`:

| Таргет | Что делает | Команда |
| --- | --- | --- |
| `db-migrate-dev` | Запускает `prisma migrate dev` в `libs/db`. | `bunx prisma migrate dev {args}` |
| `db-migrate-deploy` | Применяет миграции в `libs/db` (deploy-режим). | `bunx prisma migrate deploy` |
| `db-seed` | Запускает seed в `libs/db`. | `bun run seed` |

Также есть script-алиасы:

- `db:migrate:dev`
- `db:migrate:deploy`
- `db:seed`

Они вызывают те же действия через `nx:run-script`.

## Инженерные принципы проекта

- Единый task-graph: всё запускается через `Nx` таргеты.
- Явные bounded contexts: API/Frontend/Bot изолированы по приложениям.
- Shared-код выносится в `libs/*`, а не копируется между `apps/*`.
- Для интеграционных контуров есть отдельные e2e-проекты.
- Генерируемые клиенты (`YooKassa`, `orval`) хранятся в репозитории для воспроизводимости билдов.

## Навигация по задачам

- Новый backend endpoint: `apps/api` + при необходимости `libs/types`/`libs/converters`.
- Изменения UI/UX: `apps/zeroquest`.
- Изменения в продуктовых интеграциях Telegram: `apps/telegram-bot`.
- Схема данных и миграции: `libs/db`.

## Полный Каталог Nx-таргетов (Apps и Libs)

Секция сгенерирована по актуальному `project-graph` и покрывает **все таргеты** в `apps/*` и `libs/*`.

### @zeroquest/api

- Путь: `apps/api`
- Тип: `app`
- Назначение: Основной NestJS API: авторизация, платежи, подписки, интеграции с YooKassa и 3x-ui.

| Таргет | Что делает | Executor | Команда |
| --- | --- | --- | --- |
| `build` | Собирает backend через Webpack. | `nx:run-commands` | `webpack-cli build` |
| `build-deps` | Технический таргет Nx для построения графа зависимостей сборки. | `nx:noop` | — |
| `copy-workspace-modules` | Копирует workspace modules в dist для запуска сборки. | `@nx/js:copy-workspace-modules` | — |
| `docker:build` | Выполняет команду `docker compose build api`. | `nx:run-commands` | `docker compose build api` |
| `docker:run` | Выполняет команду `docker compose up -d --build api`. | `nx:run-commands` | `docker compose up -d --build api` |
| `lint` | Запускает ESLint для проекта. | `nx:run-commands` | `eslint .` |
| `ngrok:run` | Выполняет команду `ngrok http $API_PORT --log=stdout --log-format=logfmt`. | `nx:run-commands` | `ngrok http $API_PORT --log=stdout --log-format=logfmt` |
| `nx-release-publish` | Публикует Docker-образ через Nx release pipeline. | `@nx/docker:release-publish` | — |
| `preview` | Запускает Webpack dev server в режиме production-конфига. | `nx:run-commands` | `webpack-cli serve` |
| `prune` | Агрегирующий таргет для упаковки build-артефактов и workspace-модулей. | `nx:noop` | — |
| `prune-lockfile` | Готовит lockfile, очищенный под runtime-артефакты сборки. | `@nx/js:prune-lockfile` | — |
| `serve` | Запускает Node.js приложение на основе build-target (dev/prod конфигурации). | `@nx/js:node` | — |
| `serve-static` | Поднимает статический file server для готовых артефактов. | `@nx/web:file-server` | — |
| `test` | Запускает тесты через Jest. | `nx:run-commands` | `jest` |
| `typecheck` | Проверяет типы TypeScript без эмита runtime-кода. | `nx:run-commands` | `tsc --build tsconfig.json --emitDeclarationOnly` |
| `watch-deps` | Выполняет команду `bun nx watch --projects @zeroquest/api --includeDependentProjects -- bun nx build-deps @zeroquest/api`. | `nx:run-commands` | `bun nx watch --projects @zeroquest/api --includeDependentProjects -- bun nx build-deps @zeroquest/api` |
| `yookassa:openapi` | Выполняет команду `bunx openapi-generator-cli generate -i https://yookassa.ru/developers/api/yookassa-openapi-specification.yaml -g typescript-axios -o ./src/generated/yookassa --additional-properties=supportsES6=true,npmName=yookassa-client`. | `nx:run-commands` | `bunx openapi-generator-cli generate -i https://yookassa.ru/developers/api/yookassa-openapi-specification.yaml -g typescript-axios -o ./src/generated/yookassa --additional-properties=supportsES6=true,npmName=yookassa-client` |

### @zeroquest/api-e2e

- Путь: `apps/api-e2e`
- Тип: `app`
- Назначение: E2E/интеграционные тесты для API.

| Таргет | Что делает | Executor | Команда |
| --- | --- | --- | --- |
| `e2e` | Запускает e2e/интеграционные тесты через Jest. | `@nx/jest:jest` | — |
| `lint` | Запускает ESLint для проекта. | `nx:run-commands` | `eslint .` |
| `typecheck` | Проверяет типы TypeScript без эмита runtime-кода. | `nx:run-commands` | `tsc --build tsconfig.json --emitDeclarationOnly` |

### yookassa-client

- Путь: `apps/api/src/generated/yookassa`
- Тип: `lib`
- Назначение: Сгенерированный TypeScript SDK YooKassa (OpenAPI) для backend-интеграции.

| Таргет | Что делает | Executor | Команда |
| --- | --- | --- | --- |
| `lint` | Запускает ESLint для проекта. | `nx:run-commands` | `eslint .` |
| `typecheck` | Проверяет типы TypeScript без эмита runtime-кода. | `nx:run-commands` | `tsc --build tsconfig.json --emitDeclarationOnly` |

### @zeroquest/telegram-bot

- Путь: `apps/telegram-bot`
- Тип: `app`
- Назначение: Telegram-бот для пользовательского канала продаж/поддержки.

| Таргет | Что делает | Executor | Команда |
| --- | --- | --- | --- |
| `build` | Собирает проект через esbuild. | `@nx/esbuild:esbuild` | — |
| `copy-workspace-modules` | Копирует workspace modules в dist для запуска сборки. | `@nx/js:copy-workspace-modules` | — |
| `lint` | Запускает ESLint для проекта. | `nx:run-commands` | `eslint .` |
| `prune` | Агрегирующий таргет для упаковки build-артефактов и workspace-модулей. | `nx:noop` | — |
| `prune-lockfile` | Готовит lockfile, очищенный под runtime-артефакты сборки. | `@nx/js:prune-lockfile` | — |
| `serve` | Запускает Node.js приложение на основе build-target (dev/prod конфигурации). | `@nx/js:node` | — |
| `test` | Запускает тесты через Jest. | `nx:run-commands` | `jest` |
| `typecheck` | Проверяет типы TypeScript без эмита runtime-кода. | `nx:run-commands` | `tsc --build tsconfig.json --emitDeclarationOnly` |

### @zeroquest/telegram-bot-e2e

- Путь: `apps/telegram-bot-e2e`
- Тип: `app`
- Назначение: E2E/интеграционные тесты Telegram-бота.

| Таргет | Что делает | Executor | Команда |
| --- | --- | --- | --- |
| `e2e` | Запускает e2e/интеграционные тесты через Jest. | `@nx/jest:jest` | — |
| `lint` | Запускает ESLint для проекта. | `nx:run-commands` | `eslint .` |
| `typecheck` | Проверяет типы TypeScript без эмита runtime-кода. | `nx:run-commands` | `tsc --build tsconfig.json --emitDeclarationOnly` |

### @zeroquest/zeroquest

- Путь: `apps/zeroquest`
- Тип: `lib`
- Назначение: Frontend-приложение (React + Vite + Mantine).

| Таргет | Что делает | Executor | Команда |
| --- | --- | --- | --- |
| `build` | Собирает frontend через Vite. | `nx:run-commands` | `vite build` |
| `build-deps` | Технический таргет Nx для построения графа зависимостей сборки. | `nx:noop` | — |
| `dev` | Запускает Vite dev server для локальной разработки. | `nx:run-commands` | `vite` |
| `docker:build` | Собирает Docker-образ проекта. | `nx:run-commands` | `docker build .` |
| `docker:run` | Запускает контейнер проекта через `docker run`. | `nx:run-commands` | `docker run {args} apps-zeroquest` |
| `lint` | Запускает ESLint для проекта. | `nx:run-commands` | `eslint .` |
| `nx-release-publish` | Публикует Docker-образ через Nx release pipeline. | `@nx/docker:release-publish` | — |
| `orval:run` | Выполняет команду `bunx orval`. | `nx:run-commands` | `bunx orval` |
| `preview` | Локально поднимает preview production-сборки Vite. | `nx:run-commands` | `vite preview` |
| `serve` | Запускает Vite dev server для локальной разработки. | `nx:run-commands` | `vite` |
| `serve-static` | Поднимает статический file server для готовых артефактов. | `@nx/web:file-server` | — |
| `test` | Запускает тесты через Vitest. | `nx:run-commands` | `vitest` |
| `typecheck` | Проверяет типы TypeScript без эмита runtime-кода. | `nx:run-commands` | `tsc --build --emitDeclarationOnly` |
| `watch-deps` | Выполняет команду `bun nx watch --projects @zeroquest/zeroquest --includeDependentProjects -- bun nx build-deps @zeroquest/zeroquest`. | `nx:run-commands` | `bun nx watch --projects @zeroquest/zeroquest --includeDependentProjects -- bun nx build-deps @zeroquest/zeroquest` |

### @zeroquest/zeroquest-e2e

- Путь: `apps/zeroquest-e2e`
- Тип: `app`
- Назначение: E2E UI-тесты frontend-приложения (Playwright).

| Таргет | Что делает | Executor | Команда |
| --- | --- | --- | --- |
| `e2e` | Запускает e2e-тесты через Playwright. | `nx:run-commands` | `playwright test` |
| `e2e-ci` | CI-оркестрация Playwright-тестов. | `nx:noop` | — |
| `e2e-ci--merge-reports` | Объединяет atomized Playwright blob-репорты в единый отчет. | `@nx/playwright:merge-reports` | — |
| `e2e-ci--src/example.spec.ts` | CI-прогон Playwright для `src/example.spec.ts`. | `nx:run-commands` | `playwright test src/example.spec.ts --output=test-output/playwright/output/src-example-spec-ts` |
| `lint` | Запускает ESLint для проекта. | `nx:run-commands` | `eslint .` |
| `typecheck` | Проверяет типы TypeScript без эмита runtime-кода. | `nx:run-commands` | `tsc --build tsconfig.json --emitDeclarationOnly` |

### @zeroquest/config

- Путь: `libs/config`
- Тип: `lib`
- Назначение: Общая конфигурация и env-модель для приложений.

| Таргет | Что делает | Executor | Команда |
| --- | --- | --- | --- |
| `lint` | Запускает ESLint для проекта. | `nx:run-commands` | `eslint .` |
| `typecheck` | Проверяет типы TypeScript без эмита runtime-кода. | `nx:run-commands` | `tsc --build tsconfig.json --emitDeclarationOnly` |

### @zeroquest/converters

- Путь: `libs/converters`
- Тип: `lib`
- Назначение: Утилиты конвертации и маппинга данных.

| Таргет | Что делает | Executor | Команда |
| --- | --- | --- | --- |
| `build` | Собирает библиотеку через `tsc` (tsconfig.lib.json). | `nx:run-commands` | `tsc --build tsconfig.lib.json` |
| `build-deps` | Технический таргет Nx для построения графа зависимостей сборки. | `nx:noop` | — |
| `lint` | Запускает ESLint для проекта. | `nx:run-commands` | `eslint .` |
| `test` | Запускает тесты через Vitest. | `nx:run-commands` | `vitest` |
| `test-ci` | CI-таргет Vitest для атомизированного прогона. | `nx:noop` | — |
| `test-ci--src/lib/converters.spec.ts` | Запускает Vitest только для `src/lib/converters.spec.ts`. | `nx:run-commands` | `vitest run src/lib/converters.spec.ts` |
| `typecheck` | Проверяет типы TypeScript без эмита runtime-кода. | `nx:run-commands` | `tsc --build --emitDeclarationOnly` |
| `watch-deps` | Выполняет команду `bun nx watch --projects @zeroquest/converters --includeDependentProjects -- bun nx build-deps @zeroquest/converters`. | `nx:run-commands` | `bun nx watch --projects @zeroquest/converters --includeDependentProjects -- bun nx build-deps @zeroquest/converters` |

### @zeroquest/db

- Путь: `libs/db`
- Тип: `lib`
- Назначение: Prisma schema/client и операции с БД (включая seed).

| Таргет | Что делает | Executor | Команда |
| --- | --- | --- | --- |
| `lint` | Запускает ESLint для проекта. | `nx:run-commands` | `eslint .` |
| `seed` | Запускает script `seed` из package.json: `bun run prisma/seed.ts`. | `nx:run-script` | `bun run prisma/seed.ts` |
| `typecheck` | Проверяет типы TypeScript без эмита runtime-кода. | `nx:run-commands` | `tsc --build tsconfig.json --emitDeclarationOnly` |

### @zeroquest/nest-shared

- Путь: `libs/nest-shared`
- Тип: `lib`
- Назначение: Общие NestJS-утилиты: guards, decorators, shared helpers.

| Таргет | Что делает | Executor | Команда |
| --- | --- | --- | --- |
| `lint` | Запускает ESLint для проекта. | `nx:run-commands` | `eslint .` |
| `typecheck` | Проверяет типы TypeScript без эмита runtime-кода. | `nx:run-commands` | `tsc --build tsconfig.json --emitDeclarationOnly` |

### @zeroquest/types

- Путь: `libs/types`
- Тип: `lib`
- Назначение: Общие доменные и транспортные типы для apps/libs.

| Таргет | Что делает | Executor | Команда |
| --- | --- | --- | --- |
| `build` | Собирает библиотеку через `tsc` (tsconfig.lib.json). | `nx:run-commands` | `tsc --build tsconfig.lib.json` |
| `build-deps` | Технический таргет Nx для построения графа зависимостей сборки. | `nx:noop` | — |
| `lint` | Запускает ESLint для проекта. | `nx:run-commands` | `eslint .` |
| `typecheck` | Проверяет типы TypeScript без эмита runtime-кода. | `nx:run-commands` | `tsc --build tsconfig.json --emitDeclarationOnly` |
| `watch-deps` | Выполняет команду `bun nx watch --projects @zeroquest/types --includeDependentProjects -- bun nx build-deps @zeroquest/types`. | `nx:run-commands` | `bun nx watch --projects @zeroquest/types --includeDependentProjects -- bun nx build-deps @zeroquest/types` |
