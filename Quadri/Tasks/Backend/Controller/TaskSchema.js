import joi from "joi"

export const createTaskSchema = joi.object({
    title: joi.string().required(),
    desc: joi.string().required()
});