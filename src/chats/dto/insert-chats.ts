import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class InsertChat {
    @Field(type => Number, { description: 'Phone number who send message' })
    transmitter: number

    @Field(type => Number, { description: 'Phone number of the who get message' })
    receiver: number

    @Field(type => String, { description: 'Message' })
    message: string

    @Field(type => String, { description: 'Message status' })
    status: string
}