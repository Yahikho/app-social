import { Injectable } from '@nestjs/common';
import { Contacts, ContactsDocument } from './schema/contacts.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InsertContacts } from './dto/insert-contacts'

@Injectable()
export class ContactsService {
    constructor(@InjectModel(Contacts.name) private conctacsModel: Model<ContactsDocument>) { }

    async findByOwner(owner: number): Promise<Contacts> {
        return await this.conctacsModel.findOne({ owner }).exec();
    }

    async create(contact: InsertContacts): Promise<Contacts> {
        return await this.conctacsModel.create(contact);
    }

    async pushContact(contact: InsertContacts, contacts: Contacts): Promise<Contacts> {
        await this.conctacsModel.updateOne(
            { owner: contacts.owner},
            {
                $push: {
                    contacts: contact.contacts
                }
            })
        return await this.findByOwner(contact.owner);
    }
}
