import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./screens/Homepage";
import Signup from "./screens/Signup/Signup";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/" element={<Signup />} />
    </Routes>
  );
};

export default Router;
