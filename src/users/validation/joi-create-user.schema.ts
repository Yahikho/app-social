import * as joi from 'joi';

export const createUserSchema = joi.object({
    nickname: joi.string().required(),
    state: joi.string().max(20).min(0),
    avatar: joi.string().max(20).min(0),
    phone_number: joi.number().required().min(100000).max(9999999999)
});