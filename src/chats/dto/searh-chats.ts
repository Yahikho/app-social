import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SearchChats {
    @Field(type => Number, { description: 'Phone number who send message' })
    transmitter: number

    @Field(type => Number, { description: 'Phone number of the who get message' })
    receiver: number
}