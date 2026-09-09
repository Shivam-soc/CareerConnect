import User from "../models/User.js";
import Company from "../models/Company.js";
import Job from "../models/Job.js";
import Application from "../models/Application.js";

// ======================================
// Dashboard
// ======================================

export const getDashboardData = async () => {
  const totalStudents = await User.countDocuments({
    role: "student",
  });

  const totalRecruiters = await User.countDocuments({
    role: "recruiter",
  });

  const totalAdmins = await User.countDocuments({
    role: "admin",
  });

  const totalCompanies = await Company.countDocuments();

  const totalJobs = await Job.countDocuments();

  const totalApplications =
    await Application.countDocuments();

  const recentUsers = await User.find()
    .select("fullName email role createdAt")
    .sort({ createdAt: -1 })
    .limit(5);

  const recentJobs = await Job.find()
    .populate("company", "name")
    .populate("postedBy", "fullName")
    .sort({ createdAt: -1 })
    .limit(5);

  return {
    totalStudents,
    totalRecruiters,
    totalAdmins,
    totalCompanies,
    totalJobs,
    totalApplications,
    recentUsers,
    recentJobs,
  };
};

// ======================================
// Users
// ======================================

export const getAllUsers = async () => {
  return await User.find()
    .select("-password")
    .sort({ createdAt: -1 });
};

export const deleteUser = async (id) => {
  const user = await User.findByIdAndDelete(id);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

// ======================================
// Companies
// ======================================

export const getAllCompanies = async () => {
  return await Company.find()
    .populate("recruiter", "fullName email")
    .sort({ createdAt: -1 });
};

export const deleteCompany = async (id) => {
  const company = await Company.findByIdAndDelete(id);

  if (!company) {
    throw new Error("Company not found");
  }

  return company;
};

// ======================================
// Jobs
// ======================================

export const getAllJobs = async () => {
  return await Job.find()
    .populate("company", "name")
    .populate("postedBy", "fullName")
    .sort({ createdAt: -1 });
};

export const deleteJob = async (id) => {
  const job = await Job.findByIdAndDelete(id);

  if (!job) {
    throw new Error("Job not found");
  }

  return job;
};

// ======================================
// Applications
// ======================================

export const getAllApplications = async () => {
  return await Application.find()
    .populate("student", "fullName email")
    .populate("recruiter", "fullName email")
    .populate({
      path: "job",
      populate: {
        path: "company",
        select: "name",
      },
    })
    .sort({ createdAt: -1 });
};

export const deleteApplication = async (id) => {
  const application =
    await Application.findByIdAndDelete(id);

  if (!application) {
    throw newError("Application not found");
  }

  return application;
};