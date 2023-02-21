import * as joi from 'joi';

export const searchChatsSchema = joi.object({
    transmitter: joi.number().required().min(100000).max(9999999999),
    receiver: joi.number().required().min(100000).max(9999999999)
})