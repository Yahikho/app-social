import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Users {
    @Field(type => String, { description: 'Nickname user' })
    nickname: string

    @Field(type => String, { description: 'State user', nullable: true })
    state?: string

    @Field(type => String, { description: 'URI img avatar user', nullable: true })
    avatar?: string

    @Field(type => Number, { description: 'Phone number', })
    phone_number: number

    @Field(type => Date, {nullable: true})
    create_at?: Date

}