import api from "./axios";

export const getCompanies = (params) => {
  return api.get("/companies", {
    params,
  });
};

export const getCompanyById = (id) => {
  return api.get(`/companies/${id}`);
};

export const createCompany = (data) => {
  return api.post("/companies", data);
};

export const updateCompany = (id, data) => {
  return api.put(`/companies/${id}`, data);
};

export const deleteCompany = (id) => {
  return api.delete(`/companies/${id}`);
};