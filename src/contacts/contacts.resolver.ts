import { Resolver, Query, Args, Float, Mutation } from '@nestjs/graphql';
import { ContactsService } from './contacts.service'
import { Contacts } from './dto/contacts'
import { InsertContacts } from './dto/insert-contacts';
import { ContactsPipe } from './contacts.pipe'

@Resolver()
export class ContactsResolver {
    constructor(private contactsService: ContactsService) { }

    @Query(returns => Contacts)
    async contactsByOwner(@Args('owner', { type: () => Float }) owner: number): Promise<Contacts> {
        return await this.contactsService.findByOwner(owner);
    }

    @Mutation(returns => Contacts)
    async createContact(@Args('contact', ContactsPipe) contact: InsertContacts): Promise<Contacts> {
        const contactOwnerIsCreate = await this.contactsService.findByOwner(contact.owner);
        if (contactOwnerIsCreate)
            return await this.contactsService.pushContact(contact, contactOwnerIsCreate)
        else
            return await this.contactsService.create(contact)
    }
}
