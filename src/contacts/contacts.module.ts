import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactsResolver } from './contacts.resolver';
import { ContactsService } from './contacts.service';
import { Contacts, ContactsSchema } from './schema/contacts.model';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Contacts.name, schema: ContactsSchema }]),
    UsersModule
  ],
  providers: [ContactsResolver, ContactsService]
})
export class ContactsModule { }
