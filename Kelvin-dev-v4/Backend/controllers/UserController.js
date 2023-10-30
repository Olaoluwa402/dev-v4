import httpStatus from "http-status";
import UserModel from "../models/User.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt-token.js";
import { serializeUser } from "../utils/serializeUser.js";
import { generateCode } from "../utils/generateUniqueCode.js";

export const createUsers = async (req, res) => {
  const { firstName, lastName, email, password, phoneNumber } = req.body;
  console.log(firstName);
  try {
    // check for email match
    const userExist = await UserModel.findOne({ email: email });
    if (userExist) {
      res.status(httpStatus.NOT_FOUND).json({
        status: "error",
        payload: "User with email already exists",
      });
      return;
    }

    // To encrypt password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await UserModel.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phoneNumber,
      userCode: generateCode(6),
    });

    res.status(httpStatus.OK).json({
      status: "success",
      payload: serializeUser(user),
    });
  } catch (err) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "success",
      payload: err.message,
    });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    //confirm that email exist in db
    const userExist = await UserModel.findOne({ email: email });
    if (!userExist) {
      res.status(httpStatus.NOT_FOUND).json({
        status: "error",
        payload: "User does not exist, please register",
      });
      return;
    }

    //check that the supplied password matched the existing password for the account in db
    const decodeRes = await bcrypt.compare(password, userExist.password);
    if (!decodeRes) {
      res.status(httpStatus.FORBIDDEN).json({
        status: "error",
        payload: "Credential does not match",
      });
      return;
    }

    res.status(httpStatus.OK).json({
      status: "success",
      payload: serializeUser(userExist),
      token: generateToken(userExist._id, userExist.email),
    });
  } catch (err) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      payload: err.message,
    });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(httpStatus.OK).json({
      status: "success",
      payload: users,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      payload: error.message,
    });
  }
};

export const getUser = async (req, res) => {
  const { id } = req.param;
  try {
    const user = await UserModel.findById({ _id: id });
    if (!user) {
      res.status(httpStatus.NOT_FOUND).json({
        status: "error",
        payload: "user not found",
      });
      return;
    }
    res.status(httpStatus.OK).json({
      status: "success",
      payload: user,
    });
  } catch (error) {
    res.status(httpStatus.OK).json({
      status: "error",
      payload: error.message,
    });
  }
};

export const editUser = async (req, res) => {
  const { id } = req.param;
  const data = req.body;
  try {
    const user = await UserModel.findById({ _id: id });
    if (!user) {
      res.status(httpStatus.NOT_FOUND).json({
        status: "error",
        payload: "user not found",
      });
      return;
    }

    // If user exists, update user
    const updateUser = await UserModel.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });

    res.status(httpStatus.OK).json({
      status: "success",
      payload: serializeUser(updateUser),
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      payload: error.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    //find user first
    const user = await UserModel.findById({ _id: id });
    if (!user) {
      res.status(httpStatus.NOT_FOUND).json({
        status: "error",
        payload: "user not found",
      });
      return;
    }

    //if user is found, update user record
    await UserModel.findByIdAndDelete({ _id: id });
    res.status(httpStatus.OK).json({
      status: "success",
      payload: "user removed",
    });
  } catch (err) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      payload: err.message,
    });
  }
};
