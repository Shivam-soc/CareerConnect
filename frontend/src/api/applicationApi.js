import api from "./axios";

export const applyJob = (data) => {
  return api.post("/applications", data);
};

export const getMyApplications = () => {
  return api.get("/applications/my");
};