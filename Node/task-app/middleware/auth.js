import JWT from "jsonwebtoken";
import UserModel from "../models/User.js";
import httpStatus from "http-status";
import { config } from "../config/config.js";

//authentication via bearer token - user identity
export const verifyUser = async (req, res, next) => {
  try {
    if (
      !req.headers ||
      !req.headers.authorization ||
      !req.headers.authorization.includes("Bearer")
    ) {
      res.status(httpStatus.BAD_REQUEST).json({
        error: "error",
        message: "Not Athorized, No token",
      });
      return;
    }

    // get teh token
    const token = req.headers.authorization.split(" ")[1];
    //verify the token
    const decoded = JWT.verify(token, config.jwt.jwt_secret);

    const user = await UserModel.findById({ _id: decoded.id });
    if (!user) {
      res.status(httpStatus.BAD_REQUEST).json({
        error: "error",
        message: "User not found",
      });
    }

    //attach the user to the rq object
    req.user = user;
    next();
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      error: "error",
      message: error.message,
    });
  }
};

//authorization - role permission
export const authorized = (permittedRoles) => {
  return (req, res, next) => {
    if (!permittedRoles.includes(req.user.role)) {
      res.status(httpStatus.BAD_REQUEST).json({
        error: "error",
        message: `User with the role ${req.user.role} is not permitted on this route`,
      });
      return;
    }
    next();
  };
};
