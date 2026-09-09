import api from "./axios";

// ===========================
// Public Jobs
// ===========================

export const getJobs = (params) => {
  return api.get("/jobs", { params });
};

export const getJobById = (id) => {
  return api.get(`/jobs/${id}`);
};

// ===========================
// Recruiter
// ===========================

export const getRecruiterJobs = () => {
  return api.get("/recruiter/jobs");
};

export const getRecruiterDashboard = () => {
  return api.get("/recruiter/dashboard");
};

// ===========================
// Job CRUD
// ===========================

export const createJob = (data) => {
  return api.post("/jobs", data);
};

export const updateJob = (id, data) => {
  return api.put(`/jobs/${id}`, data);
};

export const deleteJob = (id) => {
  return api.delete(`/jobs/${id}`);
};