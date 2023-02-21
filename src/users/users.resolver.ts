import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service'
import { Users } from './dto/get-users';
import { InsertUser } from './dto/insert-user';
import { PhoneNumberPipe } from './validation/phone-number.pipe'
import { CreateUserPipe } from './validation/create-user.pipe';
import { createUserSchema } from './validation/joi-create-user.schema';

@Resolver()
export class UsersResolver {
    constructor(private usersService: UsersService) { }

    @Query(returns => [Users])
    async users(): Promise<Users[]> {
        return await this.usersService.findAll();
    }

    @Mutation(returns => Users)
    async createUser(@Args('user', new CreateUserPipe(createUserSchema), PhoneNumberPipe) user: InsertUser): Promise<Users> {
        return await this.usersService.create(user);
    }

}
