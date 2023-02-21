import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { ObjectSchema } from 'joi';
import { InsertChat } from '../dto/insert-chats';
import { GraphQLError } from 'graphql';

@Injectable()

export class CreateChatPipe implements PipeTransform {
    constructor(private schema: ObjectSchema) { }
    transform(insertChat: InsertChat, metadata: ArgumentMetadata) {
        const { error } = this.schema.validate(insertChat);
        if (error)
            throw new GraphQLError(error.message, {
                extensions: {
                    info: error.details
                }
            });

        return insertChat;
    }
}