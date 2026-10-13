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

### 1. Настройка окружения

Создай файл `.env` в корне проекта и поместите в него содержимое `.env.example`:

    POSTGRES_USER=root
    POSTGRES_PASSWORD=123456
    POSTGRES_HOST=localhost
    POSTGRES_PORT=5433
    POSTGRES_DB=testing
    
    DATABASE_URL=postgresql://root:123456@localhost:5433/testing?schema=public
    
    BACKEND_PORT=3000

### 2. Запуск PostgreSQL и NESTJS

    docker compose up -d --build

### 3. Запушить схему БД и заполнить тестовыми данными

    docker compose exec nestjs npx prisma db push
    docker compose exec nestjs npx prisma db seed

Seed-скрипт находится в `prisma/seed.ts`. Команда использует настройку `seed` из `prisma.config.ts`.

### 4. Проверка на работоспособность

GraphQL endpoint по умолчанию:

    http://localhost:3000/graphql