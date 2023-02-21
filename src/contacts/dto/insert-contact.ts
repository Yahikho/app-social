import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class InsertContact {
    @Field(type => Number, { description: 'Contact phone number' })
    phone_number: number

    @Field(type => String, { description: 'Contact Nickname' })
    nickname: string
}