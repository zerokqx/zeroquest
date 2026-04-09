# Описание проекта
Проект предоставляет из себя `headless` приложения для запуска магазина на базе API `3x-ui`

## Установка NX
1. `npm add --global nx` - установка Nx глобально
2. `nx --version` - проверка что Nx устаноился
3. `npm update --global nx` - обновление глобальной установки

## Backend Контейнеры
 Redis контейнер `nx docker:redis api -- up -d`
 Postgres контейнер `nx docker:db api -- up -d`


## Список Apps (./apps/*)
1. `api` - слой это основной слой с backend написаный на `NestJS`
2. `zeroquest` - слой `frontend` написаный с использованием `React`
3. `telegram-bot` - слой используеться для доступа к магазину через telegram бота

## Список Libs (./libs/*)
1. `types` - все общие типы которые используют больше одного слоя `apps`


## Backend Nx комманды
1. `nx docker:down:all` - останавливает все контейнеры для backend (`Redis`, `Postgres`)
