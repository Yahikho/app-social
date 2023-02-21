import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class InsertUser {
    @Field(type => String, { description: 'Nickname user' })
    nickname: string

    @Field(type => String, { description: 'State user', nullable: true })
    state?: string

    @Field(type => String, { description: 'URI img avatar user', nullable: true })
    avatar?: string

    @Field(type => Number, { description: 'Phone number', })
    phone_number: number
}