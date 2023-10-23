import * as Joi from "joi";

const envValidation = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid("production", "development", "test")
      .required(),
    PORT: Joi.number().default(3000),
    BACKEND_BASE_URL: Joi.string.required(),
    REACT_CLIENT_URL: Joi.string().required(),
  })
  .unknown();

const { value: envVar, error } = envValidation
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export const config = {
  env: envVar.NODE_ENV,
  port: envVar.PORT,
  backend_base_url: envVar.BACKEND_BASE_URL,
  client_base_url: envVar.BACKEND_BASE_URL,
};
