import Joi from "joi";
export const validation=Joi.object({
    username:Joi.string().alphanum().required().messages({
        'any.required':'username is req'}

    ),
    email:Joi.string().email({maxDomainSegments:3,tlds:{allow:['com','edu','net']}}).required(),
    password:Joi.string().required(),
    cpassword:Joi.string().valid(Joi.ref('password')).required(),
}).required()