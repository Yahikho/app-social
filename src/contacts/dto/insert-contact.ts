import { InputType, Field } from '@nestjs/graphql';
import { Contact } from './contact'

@InputType()
export class InsertContact {
    @Field(type => Number, { description: 'Contact phone number' })
    phone_number: number

    @Field(type => String, { description: 'Contact Nickname' })
    nickname: string
}