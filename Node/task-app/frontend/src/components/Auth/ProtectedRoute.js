import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  // const { user } = useContext(GlobalContext);
  const user = {};
  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};
