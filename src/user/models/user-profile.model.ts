import { Experience, User } from '../../generated/prisma/client';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ExperienceModel } from './experience.model';
import { ProjectModel } from './project.model';

@ObjectType({
  description: 'Модель профиля пользователя',
})
export class UserProfileModel implements User {
  @Field(() => ID, {
    description: 'ID пользователя',
  })
  id: string;

  @Field(() => String, {
    description: 'Имя пользователя',
  })
  name: string;

  @Field(() => String, {
    description: 'Описание пользователя',
  })
  description: string;

  @Field(() => [String], {
    description: 'Навыки пользователя',
  })
  skills: string[];

  @Field(() => [String], {
    description: 'Профессиональные соцсети пользователя',
  })
  links: string[];

  @Field(() => [ExperienceModel], {
    description: 'Опыт пользовател',
  })
  experience: Experience[];

  @Field(() => [ProjectModel], {
    description: 'Прокеты пользователя',
  })
  project: ProjectModel[];

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
