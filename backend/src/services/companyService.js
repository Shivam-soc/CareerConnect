import Company from "../models/Company.js";

export const createCompany = async (data) => {
  return await Company.create(data);
};

export const getCompanies = async () => {
  return await Company.find().populate(
    "recruiter",
    "fullName email"
  );
};

export const getCompanyById = async (id) => {
  const company = await Company.findById(id);

  if (!company) {
    throw new Error("Company not found");
  }

  return company;
};

export const updateCompany = async (id, data) => {
  const company = await Company.findByIdAndUpdate(
    id,
    data,
    { new: true }
  );

  if (!company) {
    throw new Error("Company not found");
  }

  return company;
};

export const deleteCompany = async (id) => {
  const company = await Company.findByIdAndDelete(id);

  if (!company) {
    throw new Error("Company not found");
  }

  return company;
};