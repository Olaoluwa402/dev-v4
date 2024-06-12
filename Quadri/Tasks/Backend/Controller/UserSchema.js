import joi from "joi"

export const createUserSchema = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    phoneNumber: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().min(5).max(20).required
})