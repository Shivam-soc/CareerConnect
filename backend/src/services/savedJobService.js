import SavedJob from "../models/SavedJob.js";

export const saveJob = async (studentId, jobId) => {
  const existing = await SavedJob.findOne({
    student: studentId,
    job: jobId,
  });

  if (existing) {
    throw new Error("Job already saved.");
  }

  return await SavedJob.create({
    student: studentId,
    job: jobId,
  });
};

export const getSavedJobs = async (studentId) => {
  return await SavedJob.find({
    student: studentId,
  }).populate("job");
};

export const removeSavedJob = async (
  studentId,
  jobId
) => {
  const saved = await SavedJob.findOneAndDelete({
    student: studentId,
    job: jobId,
  });

  if (!saved) {
    throw new Error("Saved job not found.");
  }

  return saved;
};