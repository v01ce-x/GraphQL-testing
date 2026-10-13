# GraphQL Testing

Backend-проект на NestJS с использованием GraphQL, Apollo Server, Prisma ORM и PostgreSQL. База данных запускается через Docker Compose, Prisma используется для миграций и заполнения тестовыми данными.

## Технологии

- NestJS
- GraphQL
- Apollo Server
- Prisma ORM 7
- PostgreSQL 17
- Docker Compose
- Yarn Classic

## Установка и запуск

### 1. Установка зависимостей

    yarn install

### 2. Настройка окружения

Создай файл `.env` в корне проекта и поместите в него содержимое `.env.example`:

    POSTGRES_USER=root
    POSTGRES_PASSWORD=123456
    POSTGRES_HOST=localhost
    POSTGRES_PORT=5433
    POSTGRES_DB=testing
    
    DATABASE_URL=postgresql://root:123456@localhost:5433/testing?schema=public
    
    BACKEND_PORT=3000

### 3. Запуск PostgreSQL и NESTJS

    docker compose up -d --build

Проверить состояние контейнера:

    docker compose ps

### 4. Заполнение базы тестовыми данными

Запусти сидер:

    yarn prisma db seed

Seed-скрипт находится в `prisma/seed.ts`. Команда использует настройку `seed` из `prisma.config.ts`.

### 5. Проверка на работоспособность

GraphQL endpoint по умолчанию:

    http://localhost:3000/graphql