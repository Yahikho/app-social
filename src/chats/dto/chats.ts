import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Chats {
    @Field(type => Number, { description: 'Phone number who send message' })
    transmitter: number

    @Field(type => Number, { description: 'Phone number of the who get message' })
    receiver: number

    @Field(type => String, { description: 'Message' })
    message: string

    @Field(type => String, { description: 'Message status' })
    status: string

    @Field(type => Date, { description: 'Message creation date' })
    create_at: Date
}