import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service'
import { Users } from './dto/get-users';
import { UserInsert } from './dto/insert-user';
import { UsersPipe } from './users.pipe'

@Resolver()
export class UsersResolver {
    constructor(private usersService: UsersService) { }

    @Query(returns => [Users])
    async users(): Promise<Users[]> {
        return await this.usersService.findAll();
    }

    @Mutation(returns => Users)
    async createUser(@Args('user', UsersPipe) user: UserInsert): Promise<Users> {
        return this.usersService.create(user);
    }

}
