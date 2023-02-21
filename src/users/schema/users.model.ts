import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type UsersDocument = HydratedDocument<Users>;

@Schema({ versionKey: false })
export class Users {
    @Prop({ type: String })
    nickname: string

    @Prop({ type: String })
    state?: string

    @Prop({ type: String })
    avatar?: string

    @Prop({ type: Number, unique: true })
    phone_number: number

    @Prop({
        default: () => {
            const today = new Date();
            return today.setHours(today.getHours() - 5);
        }
    })
    create_at?: Date
}

export const UsersSchema = SchemaFactory.createForClass(Users);