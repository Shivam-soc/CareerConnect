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
  const company = await Company.findById(id).populate(
    "recruiter",
    "fullName email"
  );

  if (!company) {
    throw new Error("Company not found");
  }

  return company;
};

export const updateCompany = async (
  id,
  data,
  userId,
  role
) => {
  const company = await Company.findById(id);

  if (!company) {
    throw new Error("Company not found");
  }

  // Recruiter can update only their own company
  if (
    role === "recruiter" &&
    company.recruiter.toString() !== userId.toString()
  ) {
    throw new Error(
      "You are not authorized to update this company."
    );
  }

  Object.assign(company, data);

  await company.save();

  return company;
};

export const deleteCompany = async (
  id,
  userId,
  role
) => {
  const company = await Company.findById(id);

  if (!company) {
    throw new Error("Company not found");
  }

  // Recruiter can delete only their own company
  if (
    role === "recruiter" &&
    company.recruiter.toString() !== userId.toString()
  ) {
    throw new Error(
      "You are not authorized to delete this company."
    );
  }

  await company.deleteOne();

  return company;
};