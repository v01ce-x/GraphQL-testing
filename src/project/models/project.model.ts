import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Project } from '../../generated/prisma/client';

@ObjectType({
  description: 'Модель проекта',
})
export class ProjectModel implements Project {
  @Field(() => ID, {
    description: 'ID прокета',
  })
  id: string;

  @Field(() => String, {
    description: 'Название проекта',
  })
  name: string;

  @Field(() => String, {
    description: 'Ссылка на GitHub',
    nullable: true,
  })
  linkGitHub: string;

  @Field(() => String, {
    description: 'Ссылка на сайт',
    nullable: true,
  })
  linkWebSite: string;

  @Field(() => String, {
    description: 'ID пользователя',
  })
  userId: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
