import {
  applyForJob,
  getStudentApplications,
  getJobApplications,
  updateApplicationStatus,
} from "../services/applicationService.js";

// ======================================
// Student - Apply for Job
// ======================================
export const apply = async (req, res) => {
  try {
    const { jobId, coverLetter } = req.body;

    if (!jobId) {
      return res.status(400).json({
        success: false,
        message: "Job ID is required",
      });
    }

    const application = await applyForJob(
      req.user._id,
      jobId,
      {
        coverLetter,
        resume: req.file ? req.file.path : "",
      }
    );

    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      application,
    });
  } catch (error) {
    console.error(error);

    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================
// Student - My Applications
// ======================================
export const myApplications = async (req, res) => {
  try {
    const applications = await getStudentApplications(
      req.user._id
    );

    res.status(200).json({
      success: true,
      applications,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================
// Recruiter - Applications for a Job
// ======================================
export const recruiterApplications = async (
  req,
  res
) => {
  try {
    const applications = await getJobApplications(
      req.params.jobId
    );

    res.status(200).json({
      success: true,
      applications,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================
// Recruiter - Update Application Status
// ======================================
export const updateStatus = async (
  req,
  res
) => {
  try {
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({
        success: false,
        message: "Status is required",
      });
    }

    const application =
      await updateApplicationStatus(
        req.params.id,
        status
      );

    res.status(200).json({
      success: true,
      message: "Application status updated successfully",
      application,
    });
  } catch (error) {
    console.error(error);

    const statusCode =
      error.message === "Application not found"
        ? 404
        : 400;

    res.status(statusCode).json({
      success: false,
      message: error.message,
    });
  }
};