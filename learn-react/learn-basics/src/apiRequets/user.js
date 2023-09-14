import axios from "axios";
import { toast } from "react-toastify";

export const loginReq = async (email, password) => {
  try {
    console.log("hhehheheheh");
    const data = await getUsersReq();

    const foundUser = data.find((user) => user.email === email);
    // check if user
    if (foundUser) {
      //check that the password is correct
      if (isVerified(email, password, foundUser)) {
        //handle logged in user
        //persist user record by saving to local storage
        localStorage.setItem(
          "userInfo",
          JSON.stringify(serializeUser(foundUser))
        );
        return serializeUser(foundUser);
      } else {
        throw new Error("User credential is incorrect");
      }
    }
  } catch (err) {
    console.log(err, "err");
    toast.error(err);
  }
};

function isVerified(email, password, data) {
  if (email === data.email && password === data.password) {
    return true;
  }
  return false;
}

export const getUsersReq = async () => {
  const url = `http://localhost:4000/users`;
  const config = {
    headers: {
      "Context-Type": "Application/json",
    },
  };

  try {
    const { data } = await axios.get(url, config);
    console.log("heerrrrererre", data);
    return data;
  } catch (err) {
    console.log(err, "err");
    toast.error(err);
  }
};

export const registerReq = async (email, password, username) => {
  const url = `http://localhost:4000/users`;
  const config = {
    headers: {
      "Context-Type": "Application/json",
    },
  };
  try {
    const users = await getUsersReq();

    const userExist = users.find(
      (user) => user.email === email || user.username === username
    );
    if (userExist) {
      toast.error("User with crediential already exist");
      throw new Error("User with crediential already exist");
    }

    console.log("heerrrrererre");
    //create the user, if it doesent exist
    const { data } = await axios.post(
      url,
      { email, password, username },
      config
    );
    toast.success("successfully registered, please login");
    return serializeUser(data);
  } catch (err) {
    console.log(err, "err");
    toast.error(err);
  }
};

function serializeUser(user) {
  const { password, ...rest } = user;
  const newUser = { ...rest };
  return newUser;
}
