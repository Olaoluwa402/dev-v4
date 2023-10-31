import Joi from "joi";

export const UserSchemaFromAdmin = Joi.object({
  role: Joi.string().valid("admin", "default", "supervisor").optional(),
  userId: Joi.string().required(),
});
