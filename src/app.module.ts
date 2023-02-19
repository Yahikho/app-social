import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo'
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersModule } from './users/users.module';
import { ChatsModule } from './chats/chats.module';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: false,
      playground: true,
    }),
    MongooseModule.forRoot('mongodb://jhon:jhon@localhost:27017/whatsapp_clone'),
    UsersModule,
    ChatsModule,
    ContactsModule],
  providers: [],
})
export class AppModule { }
