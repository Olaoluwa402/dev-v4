import httpStatus from "http-status";

export const createUsers =
  ("/",
  (req, res) => {
    res.status(httpStatus.OK).json({
      status: "success",
      payload: "Request successful: User created on server",
    });
  });

export const getUsers =
  ("/",
  (req, res) => {
    res.status(httpStatus.OK).json({
      status: "success",
      payload: "Request successful: Users fetched",
    });
  });

export const getUser =
  ("/:id",
  (req, res) => {
    res.status(httpStatus.OK).json({
      status: "success",
      payload: "Request successful: Single user fetched",
    });
  });

export const editUser =
  ("/:id",
  (req, res) => {
    res.status(httpStatus.OK).json({
      status: "success",
      payload: "Request successful: User data updated",
    });
  });

export const deleteUsers =
  ("/:id",
  (req, res) => {
    res.status(httpStatus.OK).json({
      status: "success",
      payload: "Request successful: user deleted",
    });
  });
