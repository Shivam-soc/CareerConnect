import api from "./axios";

export const getRecruiterDashboard = () => {
  return api.get("/recruiter/dashboard");
};