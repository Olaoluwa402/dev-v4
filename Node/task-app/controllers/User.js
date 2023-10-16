import httpStatus from "http-status";
import UserModel from "../models/User.js";
import { generateCode } from "../utils/generateUniqueCode.js";
import { serializeUser } from "../utils/serializeUser.js";
import { generateToken } from "../utils/jwt-token.js";
import bcrypt from "bcrypt";

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

export const createUser = async (req, res) => {
  const { firstName, lastName, email, password, phoneNumber } = req.body;

  try {
    //check if email exist
    const userExist = await UserModel.findOne({ email: email });
    if (userExist) {
      res.status(httpStatus.NOT_FOUND).json({
        status: "error",
        payload: "User with email already exist",
      });
      return;
    }

    //has password
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
  } catch (err) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      payload: err.message,
    });
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  console.log(id, "id");
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
  } catch (err) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      payload: err.message,
    });
  }
};

export const updateUser = async (req, res) => {
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
    const updatedUser = await UserModel.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });
    res.status(httpStatus.OK).json({
      status: "success",
      payload: updatedUser,
    });
  } catch (err) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      payload: err.message,
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
