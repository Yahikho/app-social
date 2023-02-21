import * as joi from 'joi';

export const createContactSchema = joi.object({
    owner: joi.number().required(),
    contacts: joi.object({
        phone_number: joi.number().required(),
        nickname: joi.string().min(3)
    })
})