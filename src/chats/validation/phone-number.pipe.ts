import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { GraphQLError } from 'graphql';
import { InsertChat } from '../dto/insert-chats';
import { UsersService } from 'src/users/users.service';


@Injectable()
export class PhoneNumberPipe implements PipeTransform {
    constructor(private readonly userService: UsersService) { }
    async transform(insertChat: InsertChat, metadata: ArgumentMetadata) {
        const transmitter = await this.userService.findByPhoneNumber(insertChat.transmitter);
        if (transmitter === null) {
            throw new GraphQLError('Phone number transmitter no exist.', {
                extensions: {
                    info: []
                }
            })
        }
        const receiver = await this.userService.findByPhoneNumber(insertChat.receiver);
        if (receiver === null) {
            throw new GraphQLError('Phone number receiver no exist.', {
                extensions: {
                    info: []
                }
            })
        }

        return insertChat;
    }
}