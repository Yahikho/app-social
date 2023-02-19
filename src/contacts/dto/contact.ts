import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Contact {
    @Field(type => Number, { description: 'Contact phone number' })
    phone_number: number

    @Field(type => String, { description: 'Contact Nickname' })
    nickname: string

    @Field(type => Date, { description: 'Create at contact', nullable: true })
    create_at?: Date
}