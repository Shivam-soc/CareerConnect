import Company from "../models/Company.js";

import {
  createCompany,
  getCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany,
} from "../services/companyService.js";

// ======================================
// Create Company
// ======================================

export const create = async (req, res) => {
  try {
    const companyData = {
      ...req.body,
      recruiter: req.user._id,
    };

    if (req.file) {
      companyData.logo = req.file.path;
    }

    const company = await createCompany(companyData);

    res.status(201).json({
      success: true,
      company,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================
// Get All Companies
// ======================================

export const getAll = async (req, res) => {
  try {
    const companies = await getCompanies();

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

// ======================================
// Recruiter's Companies
// ======================================

export const getRecruiterCompanies = async (req, res) => {
  try {
    const companies = await Company.find({
      recruiter: req.user._id,
    }).sort({ createdAt: -1 });

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

// ======================================
// Get One Company
// ======================================

export const getOne = async (req, res) => {
  try {
    const company = await getCompanyById(req.params.id);

    res.status(200).json({
      success: true,
      company,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================
// Update Company
// ======================================

export const update = async (req, res) => {
  try {
    const updateData = {
      ...req.body,
    };

    if (req.file) {
      updateData.logo = req.file.path;
    }

    const company = await updateCompany(
      req.params.id,
      updateData,
      req.user._id,
      req.user.role
    );

    res.status(200).json({
      success: true,
      company,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================
// Delete Company
// ======================================

export const remove = async (req, res) => {
  try {
    await deleteCompany(
      req.params.id,
      req.user._id,
      req.user.role
    );

    res.status(200).json({
      success: true,
      message: "Company deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};