import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from 'src/users/users.module';
import { ChatsResolver } from './chats.resolver';
import { ChatsService } from './chats.service';
import { Chats, ChatsSchema } from './schema/chats.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Chats.name, schema: ChatsSchema }]),
    UsersModule
  ],
  providers: [ChatsResolver, ChatsService]
})
export class ChatsModule { }
