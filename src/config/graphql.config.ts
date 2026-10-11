import { ApolloDriverConfig } from '@nestjs/apollo';
import { GqlContext } from '../interfaces/gql-context.interface';

export function getGraphQLConfig(): ApolloDriverConfig {
  return {
    autoSchemaFile: true,
    sortSchema: true,
    playground: true,
    context: ({ res, req }: GqlContext) => ({ res, req }),
  };
}
