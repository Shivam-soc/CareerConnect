import api from "./axios";

export const saveJob = (jobId) => {
  return api.post("/saved-jobs", { jobId });
};

export const getSavedJobs = () => {
  return api.get("/saved-jobs");
};

export const removeSavedJob = (jobId) => {
  return api.delete(`/saved-jobs/${jobId}`);
};