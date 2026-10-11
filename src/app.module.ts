import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { getGraphQLConfig } from './config/graphql.config';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      useFactory: getGraphQLConfig(),
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
    UserModule,
    PrismaModule,
  ],
})
export class AppModule {}
