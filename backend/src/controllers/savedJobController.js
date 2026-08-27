import {
  saveJob,
  getSavedJobs,
  removeSavedJob,
} from "../services/savedJobService.js";

export const save = async (req, res) => {
  try {
    const saved = await saveJob(
      req.user._id,
      req.body.jobId
    );

    res.status(201).json({
      success: true,
      message: "Job saved successfully",
      saved,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getSaved = async (req, res) => {
  try {
    const jobs = await getSavedJobs(req.user._id);

    res.json({
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

export const remove = async (req, res) => {
  try {
    await removeSavedJob(
      req.user._id,
      req.params.jobId
    );

    res.json({
      success: true,
      message: "Saved job removed successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};