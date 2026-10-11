import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Experience } from '../../generated/prisma/client';

@ObjectType({
  description: 'Модель опыта работы',
})
export class ExperienceModel implements Experience {
  @Field(() => ID, {
    description: 'ID опыта работы',
  })
  id: string;

  @Field(() => String, {
    description: 'Название проекта',
  })
  name: string;

  @Field(() => [String], {
    description: 'Должность на проекте',
  })
  post: string[];

  @Field(() => String, {
    description: 'Достижени в проекте',
  })
  achievements: string;

  @Field(() => Date, {
    description: 'Начало работы на проекте',
  })
  startDate: Date;

  @Field(() => Date, {
    description: 'Конец работы на проекте',
  })
  endDate: Date;

  @Field(() => String, {
    description: 'ID пользователя',
  })
  userId: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
