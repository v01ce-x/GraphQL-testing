import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

const main = async () => {
  await prisma.user.create({
    data: {
      name: 'Даниил',
      description:
        'Backend-разработчик, специализирующийся на NestJS и TypeScript. Разрабатываю REST API и GraphQL API, работаю с PostgreSQL и Prisma ORM.' +
        'Использую Docker для организации окружения и WebSockets для реализации взаимодействия в реальном времени. Стремлюсь писать чистый, поддерживаемый и масштабируемый код.',
      skills: [
        'NestJs',
        'docker',
        'TypeScript',
        'PostgreSQL',
        'Prisma',
        'GraphQL',
      ],

      experience: {
        create: [
          {
            name: 'ООО ПРДБ (Программное решение для бизнеса)',
            post: ['backend developer', 'frontend developer'],
            achievements:
              'Разработал REST API и GraphQL API, интегрировал API с клиенской частью',
            startDate: new Date('2025-05-09'),
            endDate: new Date('2026-03-10'),
          },
          {
            name: 'Пет-проект',
            post: ['backend developer', 'frontend developer'],
            achievements:
              'Разработал REST API и установил соединение с помощью WebSockets, интегрировал API с клиенской частью',
            startDate: new Date('2026-01-06'),
            endDate: new Date('2026-01-10'),
          },
        ],
      },

      project: {
        create: [
          {
            name: 'Claster',
            linkWebSite: 'promit.tomsk.ru/',
          },
          {
            name: 'Nexo',
            linkGitHub: 'https://github.com/v01ce-x/messenger.git',
          },
        ],
      },
    },
  });
};

main()
  .catch((err) => {
    console.log(err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
