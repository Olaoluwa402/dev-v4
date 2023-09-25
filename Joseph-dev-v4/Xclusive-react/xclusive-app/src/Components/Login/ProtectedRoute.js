import { useContext } from "react";
import { GlobalContext } from "../../context";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const { user } = useContext(GlobalContext);
  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};