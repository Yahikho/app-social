import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chats, ChatsDocument } from './schema/chats.model';
import { SearchChats } from './dto/searh-chats';
import { InsertChat } from './dto/insert-chats';

@Injectable()
export class ChatsService {
    constructor(@InjectModel(Chats.name) private chatsModel: Model<ChatsDocument>) { }

    async findByTransmitterAndReceiver(searchChats: SearchChats): Promise<Chats[]> {
        return await this.chatsModel.find({
            transmitter: searchChats.transmitter,
            receiver: searchChats.receiver
        }).exec()
    }

    async create(insertChat: InsertChat): Promise<Chats> {
        return await this.chatsModel.create(insertChat);
    }
}
