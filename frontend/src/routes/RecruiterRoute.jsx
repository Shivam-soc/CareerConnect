import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RecruiterRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return null;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== "recruiter") {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default RecruiterRoute;