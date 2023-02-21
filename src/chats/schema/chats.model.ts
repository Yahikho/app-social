import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type ChatsDocument = HydratedDocument<Chats>;

@Schema({ versionKey: false })
export class Chats {
    @Prop({ type: Number })
    transmitter: number

    @Prop({ type: Number })
    receiver: number

    @Prop({ type: String })
    message: string

    @Prop({ type: String })
    status: string

    @Prop({
        type: Date, required: false, default: () => {
            const today = new Date();
            return today.setHours(today.getHours() - 5);
        }
    })
    create_at?: Date
}

export const ChatsSchema = SchemaFactory.createForClass(Chats);