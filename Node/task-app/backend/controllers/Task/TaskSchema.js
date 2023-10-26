import Joi from "joi";

export const createTaskShema = Joi.object({
  title: Joi.string().required(),
  desc: Joi.string().required(),
});
