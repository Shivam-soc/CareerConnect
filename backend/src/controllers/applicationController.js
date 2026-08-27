import {
  applyForJob,
  getStudentApplications,
  getJobApplications,
  updateApplicationStatus,
} from "../services/applicationService.js";

export const apply = async (req, res) => {
  try {
    const application =
      await applyForJob(
        req.user._id,
        req.body.jobId,
        req.body
      );

    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      application,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const myApplications = async (
  req,
  res
) => {
  try {
    const applications =
      await getStudentApplications(
        req.user._id
      );

    res.json({
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

export const recruiterApplications =
  async (req, res) => {
    try {
      const applications =
        await getJobApplications(
          req.params.jobId
        );

      res.json({
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

export const updateStatus = async (
  req,
  res
) => {
  try {
    const application =
      await updateApplicationStatus(
        req.params.id,
        req.body.status
      );

    res.json({
      success: true,
      message:
        "Application status updated",
      application,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};