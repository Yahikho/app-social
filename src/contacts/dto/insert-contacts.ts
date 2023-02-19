import { InputType, Field } from '@nestjs/graphql';
import { InsertContact } from './insert-contact'
import { MinLength, IsInt } from 'class-validator';

@InputType()
export class InsertContacts {
    @Field(type => Number, { description: 'Owner phone number contacts' })
    owner: number

    @Field(type => InsertContact)
    contacts: InsertContact
}