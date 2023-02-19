import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsersDocument = HydratedDocument<chats>;

export class chats {
    @Prop({ type: Number, required: true })
    by: number

    @Prop({ type: Number, required: true })
    to: number

    @Prop({ type: Text })
    message: Text

    @Prop({ type: String })
    status: string

    @Prop({
        type: Date, default: () => {
            const today = new Date();
            return today.setHours(today.getHours() - 5);
        }
    })
    create_at: Date
}

export const UsersSchema = SchemaFactory.createForClass(chats);