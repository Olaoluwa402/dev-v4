import httpStatus from "http-status";
import UserModel from "../../models/User.js";
import taskModel from "../../models/Task.js";
import { paginate } from "../../utils/pagination.js";

export const createTask = async (req, res) => {
  // collect required field from the body
  const { title, desc } = req.body;
  //    get the current user id
  const userId = req.user.id;
  // create the task record
  try {
    const titleExists = await taskModel.findOne({ title: title });
    if (titleExists) {
      res.status(httpStatus.BAD_REQUEST).json({
        status: "error",
        payload: "Title exists.",
      });
      return;
    }
    const task = await taskModel.create({
      title,
      desc,
      userId,
    });
    // pass the created task as reference to the user model
    const user = await UserModel.findOne({ _id: userId });
    user.tasks.push(task._id);
    await user.save();
    res.status(httpStatus.CREATED).json({
      status: "success",
      payload: task,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      payload: error.message,
    });
  }
};

export const getTasks = async (req, res) => {
  try {
    const model = "Task";
    const query = { userId: req.user.id };
    const page = 1;
    const pageSize = 10;
    const populateField = ["userId"];
    const data = await paginate(model, query, page, pageSize, populateField);

    // const tasks = await taskModel
    //   .find({ userId: req.user.id })
    //   .populate("userId");

    res.status(httpStatus.OK).json({
      status: "success",
      payload: data,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      payload: error.message,
    });
  }
};

export const updateTask = async (req, res) => {
  console.log("here");
  const { title, desc } = req.body;
  const taskId = req.params.id;
  try {
    const taskExists = await taskModel.findOne({ _id: taskId });
    console.log(taskExists, "taskId");
    if (!taskExists) {
      res.status(httpStatus.NOT_FOUND).json({
        status: "error",
        payload: "tasks does not exists.",
      });
      return;
    }

    const updatedTasks = await taskModel.findOneAndUpdate(
      { _id: taskId },
      { desc, title },
      { new: true }
    );
    res.status(httpStatus.OK).json({
      status: "success",
      payload: updatedTasks,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      payload: error.message,
    });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await taskModel.findById({ _id: id });
    if (!task) {
      res.status(httpStatus.NOT_FOUND).json({
        status: "error",
        payload: "task not found",
      });
      return;
    }
    await taskModel.findByIdAndDelete({ _id: id });
    res.status(httpStatus.OK).json({
      status: "success",
      payload: "delete success",
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      payload: error.message,
    });
  }
};

export const getTask = async (req, res) => {
  const { id } = req.params;
  console.log("here");
  try {
    const task = await taskModel.findById({ _id: id });
    if (!task) {
      console.log("not founc");
      res.status(httpStatus.NOT_FOUND).json({
        status: "error",
        payload: "task not found",
      });
      return;
    }
    res.status(httpStatus.OK).json({
      status: "success",
      payload: task,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      payload: error.message,
    });
  }
};
