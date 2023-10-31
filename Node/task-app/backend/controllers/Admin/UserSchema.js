import Joi from "joi";

export const UserSchemaFromAdmin = Joi.object({
  role: Joi.string().optional(),
  userId:Joi.string().required(),
});
