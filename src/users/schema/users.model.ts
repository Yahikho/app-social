import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type UsersDocument = HydratedDocument<Users>;

@Schema({ versionKey: false })
export class Users {
    @Prop({ type: String, required: true, minlength: 3, maxlength: 20 })
    nickname: string

    @Prop({ type: String })
    state?: string

    @Prop({ type: String })
    avatar?: string

    @Prop({ type: Number, unique: true, required: true, min: 100000, max: 9999999999 })
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