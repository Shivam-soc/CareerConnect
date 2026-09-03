import api from "./axios";

export const getStudentDashboard = () => {
  return api.get("/student/dashboard");
};