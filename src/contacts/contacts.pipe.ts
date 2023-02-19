import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { InsertContacts } from './dto/insert-contacts';
import { GraphQLError } from 'graphql'

@Injectable()
export class ContactsPipe implements PipeTransform {
  constructor(private usersService: UsersService) { }
  async transform(contact: InsertContacts, metadata: ArgumentMetadata) {
    const ownerExist = await this.usersService.findByPhoneNumber(contact.owner);

    if (ownerExist === null) {
      throw new GraphQLError('Owner phone number not exist!')
    }

    const newContact = await this.usersService.findByPhoneNumber(contact.contacts.phone_number);
    if (newContact === null) {
      throw new GraphQLError('New contact phone number not exist!')
    }

    /*if(this.validateNickname){
      throw new GraphQLError('Min length nickname is 3 charaters!')
    }*/

    return contact;
  }

  validateNickname (nickname: string) {
    if(nickname.length <= 3)
      return true;
    else
      return false;
  }
}
