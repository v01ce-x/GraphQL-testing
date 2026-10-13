import { experienceData } from './experience';
import { projectData } from './project';

export const profileData = {
  name: 'Даниил',
  description:
    'Backend-разработчик, специализирующийся на NestJS и TypeScript. Разрабатываю REST API и GraphQL API, работаю с PostgreSQL и Prisma ORM.' +
    'Использую Docker для организации окружения и WebSockets для реализации взаимодействия в реальном времени. Стремлюсь писать чистый, поддерживаемый и масштабируемый код.',
  skills: [
    'NestJs',
    'Docker',
    'TypeScript',
    'PostgreSQL',
    'Prisma',
    'GraphQL',
    'REST API',
  ],
  links: ['https://github.com/v01ce-x'],

  experience: {
    create: experienceData,
  },

  project: {
    create: projectData,
  },
};