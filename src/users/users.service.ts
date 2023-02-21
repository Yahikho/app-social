import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Users, UsersDocument } from './schema/users.model';
import { InjectModel } from '@nestjs/mongoose';
import { InsertUser } from './dto/insert-user';

@Injectable()
export class UsersService {
    constructor(@InjectModel(Users.name) private usersModel: Model<UsersDocument>) { }

    async findAll(): Promise<Users[]> {
        return await this.usersModel.find().exec();
    }

    async create(user: InsertUser): Promise<Users> {
        const userInsert = await this.usersModel.create(user);
        return userInsert;
    }

    async findByPhoneNumber(phone_number: number): Promise<Users> {
        return await this.usersModel.findOne({ phone_number }).exec();
    }
}
