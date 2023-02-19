import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type UsersDocument = HydratedDocument<Contact>;

@Schema({ versionKey: false, _id: false })
export class Contact {
    @Prop({ type: Number, required: true })
    phone_number: number

    @Prop({ type: String, required: true, minlength: 3, maxlength: 20 })
    nickname: string

    @Prop({
        type: Date, required: false, default: () => {
            const today = new Date();
            return today.setHours(today.getHours() - 5);
        }
    })
    create_at?: Date
}

export const ContactSchema = SchemaFactory.createForClass(Contact);