import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { InsertContacts } from '../dto/insert-contacts';
import { ObjectSchema } from 'joi';
import { GraphQLError } from 'graphql';

@Injectable()
export class CreateContactPipe implements PipeTransform {
    constructor(private schema: ObjectSchema) { }
    transform(contact: InsertContacts, metadata: ArgumentMetadata) {
        const { error } = this.schema.validate(contact)
        if (error) {
            throw new GraphQLError(error.message, {
                extensions: {
                    info: error.details
                }
            });
        }
        return contact;
    }
}