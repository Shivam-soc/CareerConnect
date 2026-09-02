import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function StudentRoute({ children }) {
  const { user } = useAuth();

  if (user?.role !== "student") {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default StudentRoute;