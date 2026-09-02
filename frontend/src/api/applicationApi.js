import api from "./axios";

// Student - Apply for Job
export const applyForJob = (data) => {
  return api.post("/applications", data);
};

// Student - My Applications
export const getMyApplications = () => {
  return api.get("/applications/my");
};

// Recruiter - Get Applicants for a Job
export const getJobApplications = (jobId) => {
  return api.get(`/applications/job/${jobId}`);
};

// Recruiter - Update Status
export const updateApplicationStatus = (id, status) => {
  return api.put(`/applications/${id}/status`, {
    status,
  });
};