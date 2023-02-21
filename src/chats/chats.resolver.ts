import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ChatsService } from './chats.service';
import { Chats } from './dto/chats';
import { SearchChats } from './dto/searh-chats';
import { SearchChatsPipe } from './validation/search-chats.pipe';
import { searchChatsSchema } from './validation/joi-search-chats.shema';
import { InsertChat } from './dto/insert-chats';
import { CreateChatPipe } from './validation/create-chats.pipe';
import { createChatSchema } from './validation/joi-create.schema';
import { PhoneNumberPipe } from './validation/phone-number.pipe';

@Resolver()
export class ChatsResolver {
    constructor(private readonly chatsService: ChatsService) { }

    @Query(returns => [Chats])
    async chatsTransmitterAndReceiver(@Args('chats_service', new SearchChatsPipe(searchChatsSchema)) searchUser: SearchChats) {
        return await this.chatsService.findByTransmitterAndReceiver(searchUser);
    }

    @Mutation(returns => Chats)
    async createChat(@Args('create_chat', new CreateChatPipe(createChatSchema), PhoneNumberPipe) insertChat: InsertChat) {
        return await this.chatsService.create(insertChat);
    }
}
