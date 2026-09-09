import api from "./axios";

// ================= Dashboard =================

export const getAdminDashboard = () => {
  return api.get("/admin/dashboard");
};

// ================= Users =================

export const getUsers = () => {
  return api.get("/admin/users");
};

export const deleteUser = (id) => {
  return api.delete(`/admin/users/${id}`);
};

// ================= Companies =================

export const getCompanies = () => {
  return api.get("/admin/companies");
};

export const deleteCompany = (id) => {
  return api.delete(`/admin/companies/${id}`);
};

// ================= Jobs =================

export const getJobs = () => {
  return api.get("/admin/jobs");
};

export const deleteJob = (id) => {
  return api.delete(`/admin/jobs/${id}`);
};

// ================= Applications =================

export const getApplications = () => {
  return api.get("/admin/applications");
};

export const deleteApplication = (id) => {
  return api.delete(`/admin/applications/${id}`);
};