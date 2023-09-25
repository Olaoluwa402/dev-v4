import axios from "axios";
import { toast } from "react-toastify";

export const loginReq = async (email, password) => {
    try {
        const data = await getUsersReq();

        const foundUser = data.find((user) => user.email === email) ;

        if(foundUser){
            if(isVerified(email, password, foundUser)) {
                localStorage.setItem(
                    "userInfo",
                    JSON.stringify(serializeUser(foundUser))
                  );
                  return serializeUser(foundUser);
            }
            else {
                throw new Error("User credential is incorrect");
              }
            }
        }
    catch (err) {
        console.log(err, "err");
        toast.error(err); 
    }

};

function isVerified (email, password, data) {
    if ( email === data.email && password === data.password){
    return true};

    return false;
};

export const getUsersReq = async () => {
    const url = `http://localhost:3004/users`;
    const config = {
      headers: {
        "Context-Type": "Application/json",
      },
    };
  
    try {
      const { data } = await axios.get(url, config);
      return data;
    } catch (err) {
      console.log(err, "err");
      toast.error(err);
    }
  };

export const registerReq = async (email, password, username) => {
    const url = `http://localhost:3004/users`;
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
        throw new Error("User with this crediential already exist");
      }

    
      const { data } = await axios.post(
        url,
        { email, password, username },
        config
      );
      toast.success("You are Successfully registered, please login");
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