import Joi from "joi";
import dotenv from "dotenv";
import path from "path";

// Specify the path to your .env file here
const __dir = path.resolve();

const envFilePath = path.resolve(__dir, ".env");
dotenv.config({ path: envFilePath });

const envValidation = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid("production", "development", "test")
      .required(),
    PORT: Joi.number().default(9000),
    API_KEY: Joi.string().required(),
    MONGO_URI: Joi.string().required(),
    JWT_SECRET: Joi.string().required(),
    JWT_EXPIRY: Joi.string().required(),
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
  jwt: {
    jwt_secret: envVar.JWT_SECRET,
    jwt_expiry: envVar.JWT_EXPIRY,
  },
  api_key: envVar.API_KEY,
  mongodb: {
    db_url: envVar.MONGO_URI,
  },
};
