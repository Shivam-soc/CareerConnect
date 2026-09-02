import api from "./axios";

// Get all jobs
export const getJobs = (params) => {
  return api.get("/jobs", { params });
};

// Get single job
export const getJobById = (id) => {
  return api.get(`/jobs/${id}`);
};

// Recruiter - Get my jobs
export const getRecruiterJobs = () => {
  return api.get("/recruiter/jobs");
};

// Create job
export const createJob = (data) => {
  return api.post("/jobs", data);
};

// Update job
export const updateJob = (id, data) => {
  return api.put(`/jobs/${id}`, data);
};

// Delete job
export const deleteJob = (id) => {
  return api.delete(`/jobs/${id}`);
};