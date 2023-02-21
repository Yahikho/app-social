import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { GraphQLError } from 'graphql'
import { InsertUser } from '../dto/insert-user';
import { UsersService } from '../users.service';

@Injectable()
export class PhoneNumberPipe implements PipeTransform {
    constructor(
        private readonly usersService: UsersService
    ) { }
    async transform(user: InsertUser, metadata: ArgumentMetadata) {
        const userExist = await this.usersService.findByPhoneNumber(user.phone_number);
        if (userExist !== null) {
            throw new GraphQLError('Phone number aready exist!', {
                extensions: {
                    info: []
                }
            })
        }
        return user;
    }
}
