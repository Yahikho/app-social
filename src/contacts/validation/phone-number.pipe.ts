import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { InsertContacts } from '../dto/insert-contacts';
import { GraphQLError } from 'graphql'

@Injectable()
export class PhoneNumberPipe implements PipeTransform {
    constructor(private readonly usersService: UsersService) { }
    async transform(contact: InsertContacts, metadata: ArgumentMetadata) {
        const ownerExist = await this.usersService.findByPhoneNumber(contact.owner);
        if (ownerExist === null) {
            throw new GraphQLError('Owner phone number not exist!', {
                extensions: {
                    info: []
                }
            })
        }

        const newContact = await this.usersService.findByPhoneNumber(contact.contacts.phone_number);
        if (newContact === null) {
            throw new GraphQLError('New contact phone number not exist!', {
                extensions: {
                    info: []
                }
            })
        }

        return contact;
    }
}