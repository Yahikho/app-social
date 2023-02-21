import { Field, ObjectType } from '@nestjs/graphql';
import { Contact } from './contact';

@ObjectType()
export class Contacts {
    @Field(type => Number, { description: 'Owner phone number contacts' })
    owner: number

    @Field(type => [Contact], { description: 'List contacts' })
    contacts: Contact[]
}