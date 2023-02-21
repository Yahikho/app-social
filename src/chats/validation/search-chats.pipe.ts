import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { SearchChats } from '../dto/searh-chats';
import { ObjectSchema } from 'joi';
import { GraphQLError } from 'graphql';

@Injectable()
export class SearchChatsPipe implements PipeTransform {
    constructor(private schema: ObjectSchema) { }
    transform(chats: SearchChats, metadata: ArgumentMetadata) {
        const { error } = this.schema.validate(chats);
        if (error) {
            throw new GraphQLError(error.message, {
                extensions: {
                    info: error.details
                }
            })
        }
        return chats;
    }
}