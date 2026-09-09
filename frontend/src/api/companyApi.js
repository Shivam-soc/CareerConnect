import api from "./axios";

// Public
export const getCompanies = (params) => {
  return api.get("/companies", {
    params,
  });
};

export const getCompanyById = (id) => {
  return api.get(`/companies/${id}`);
};

// Recruiter
export const getRecruiterCompanies = () => {
  return api.get("/companies/my");
};

// Create
export const createCompany = (data) => {
  return api.post("/companies", data);
};

// Update
export const updateCompany = (id, data) => {
  return api.put(`/companies/${id}`, data);
};

// Delete
export const deleteCompany = (id) => {
  return api.delete(`/companies/${id}`);
};