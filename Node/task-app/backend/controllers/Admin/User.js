import httpStatus from "http-status";
import UserModel from "../../models/User.js";
import { serializeUser } from "../../utils/serializeUser.js";

export const getAllUsers = async (req, res) => {
  const users = await UserModel.find({}).populate("tasks");

  const allUsers = users.map((user) => serializeUser(user));
  res.status(httpStatus.OK).json({
    status: "success",
    payload: allUsers,
  });
};

export const updateRole = async (req, res) => {
  const data = req.body;
  try {
    //find user first
    const user = await UserModel.findById({ _id: data.userId });
    if (!user) {
      res.status(httpStatus.NOT_FOUND).json({
        status: "error",
        payload: "user not found",
      });
      return;
    }

    //if user is found, update user record
    const updatedRole = await UserModel.findOneAndUpdate(
      { _id: data.userId },
      data,
      {
        new: true,
      }
    );
    res.status(httpStatus.OK).json({
      status: "success",
      payload: "Role updated successfully",
    });
  } catch (err) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      payload: err.message,
    });
  }
};
