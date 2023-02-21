import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { GraphQLError } from 'graphql'
import { InsertUser } from '../dto/insert-user';
import { ObjectSchema } from 'joi'

@Injectable()
export class CreateUserPipe implements PipeTransform {
    constructor(private schema: ObjectSchema) { }
    transform(user: InsertUser, metadata: ArgumentMetadata) {
        const { error } = this.schema.validate(user);

        if (error) {
            throw new GraphQLError(error.message, {
                extensions: {
                    info: error.details
                }
            })
        }

        return user;
    }
}