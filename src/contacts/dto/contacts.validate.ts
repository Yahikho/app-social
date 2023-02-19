import * as Joi from 'joi';

export const contactsValidateSchema = Joi.object({
    owner: Joi.number().message('fua').required().message('nes')
});