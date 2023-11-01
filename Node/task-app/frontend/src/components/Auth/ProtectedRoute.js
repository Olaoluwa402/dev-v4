import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
export const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.loginUser);

  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};
