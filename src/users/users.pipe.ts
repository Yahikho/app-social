import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { GraphQLError } from 'graphql'
import { UserInsert } from './dto/insert-user';
import { UsersService } from './users.service';

@Injectable()
export class UsersPipe implements PipeTransform {
  constructor(
    private readonly usersService: UsersService
  ) { }
  async transform(user: UserInsert, metadata: ArgumentMetadata) {
    const userExist = await this.usersService.findByPhoneNumber(user.phone_number);
    if (userExist !== null) {
      throw new GraphQLError('Phone number aready exist!')
    }
    return user;
  }
}
