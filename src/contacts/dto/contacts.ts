import { Field, ObjectType } from '@nestjs/graphql';
import { Contact } from './contact';
import { IsNumber } from 'class-validator'

@ObjectType()
export class Contacts {
    @IsNumber()
    @Field(type => Number, { description: 'Owner phone number contacts' })
    owner: number

    @Field(type => [Contact], { description: 'List contacts' })
    contacts: Contact[]
}