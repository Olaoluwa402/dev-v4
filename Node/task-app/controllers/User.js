import httpStatus from "http-status";
import UserModel from "../models/User.js";
import { generateCode } from "../utils/generateUniqueCode.js";

export const createUser = async (req, res) => {
  const { firstName, lastName, email, password, phoneNumber } = req.body;

  try {
    const user = await UserModel.create({
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      userCode: generateCode(6),
    });
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
