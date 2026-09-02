import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RecruiterRoute({ children }) {
  const { user } = useAuth();

  if (user?.role !== "recruiter") {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default RecruiterRoute;