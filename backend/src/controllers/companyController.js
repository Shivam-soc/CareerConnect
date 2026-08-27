import {
  createCompany,
  getCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany,
} from "../services/companyService.js";

export const create = async (req, res) => {
  try {
    const company = await createCompany({
      ...req.body,
      recruiter: req.user._id,
    });

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

export const getAll = async (req, res) => {
  try {
    const companies = await getCompanies();

    res.json({
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

export const getOne = async (req, res) => {
  try {
    const company = await getCompanyById(
      req.params.id
    );

    res.json({
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

export const update = async (req, res) => {
  try {
    const company = await updateCompany(
      req.params.id,
      req.body
    );

    res.json({
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

export const remove = async (req, res) => {
  try {
    await deleteCompany(req.params.id);

    res.json({
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