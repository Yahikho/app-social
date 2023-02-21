import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Contact } from './contact.model';

export type ContactsDocument = HydratedDocument<Contacts>;

@Schema({ versionKey: false })
export class Contacts {
    @Prop({ type: Number })
    owner: number

    @Prop({ type: Boolean, default: false })
    block: boolean

    @Prop([Contact])
    contacts: Contact[]
}

export const ContactsSchema = SchemaFactory.createForClass(Contacts);