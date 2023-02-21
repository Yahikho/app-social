import * as joi from 'joi';

export const createChatSchema = joi.object({
    transmitter: joi.number().required().min(100000).max(9999999999),
    receiver: joi.number().required().min(100000).max(9999999999),
    message: joi.string().required().min(1).max(500),
    status: joi.string().required().min(1).max(20)
});