import {
  getDashboardData,
  getAllUsers,
  deleteUser,
  getAllCompanies,
  deleteCompany,
  getAllJobs,
  deleteJob,
  getAllApplications,
  deleteApplication,
} from "../services/adminService.js";

// ======================================
// Dashboard
// ======================================

export const getDashboard = async (req, res) => {
  try {
    const dashboard = await getDashboardData();

    res.status(200).json({
      success: true,
      dashboard,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================
// Users
// ======================================

export const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();

    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const removeUser = async (req, res) => {
  try {
    await deleteUser(req.params.id);

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================
// Companies
// ======================================

export const getCompanies = async (req, res) => {
  try {
    const companies = await getAllCompanies();

    res.status(200).json({
      success: true,
      companies,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const removeCompany = async (req, res) => {
  try {
    await deleteCompany(req.params.id);

    res.status(200).json({
      success: true,
      message: "Company deleted successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================
// Jobs
// ======================================

export const getJobs = async (req, res) => {
  try {
    const jobs = await getAllJobs();

    res.status(200).json({
      success: true,
      jobs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const removeJob = async (req, res) => {
  try {
    await deleteJob(req.params.id);

    res.status(200).json({
      success: true,
      message: "Job deleted successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================
// Applications
// ======================================

export const getApplications = async (req, res) => {
  try {
    const applications = await getAllApplications();

    res.status(200).json({
      success: true,
      applications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const removeApplication = async (req, res) => {
  try {
    await deleteApplication(req.params.id);

    res.status(200).json({
      success: true,
      message: "Application deleted successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};