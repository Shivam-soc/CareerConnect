import Application from "../models/Application.js";
import Job from "../models/Job.js";

export const applyForJob = async (
  userId,
  jobId,
  data
) => {
  const job = await Job.findById(jobId);

  if (!job) {
    throw new Error("Job not found");
  }

  const existingApplication = await Application.findOne({
    student: userId,
    job: jobId,
  });

  if (existingApplication) {
    throw new Error("You have already applied for this job.");
  }

  const application = await Application.create({
    student: userId,
    recruiter: job.postedBy,
    job: jobId,
    resume: data.resume,
    coverLetter: data.coverLetter,
  });

  return application;
};

export const getStudentApplications = async (
  userId
) => {
  return await Application.find({
    student: userId,
  })
    .populate("job")
    .populate("recruiter", "fullName email");
};

export const getJobApplications = async (
  jobId
) => {
  return await Application.find({
    job: jobId,
  }).populate(
    "student",
    "fullName email"
  );
};

export const updateApplicationStatus = async (
  applicationId,
  status
) => {
  const application =
    await Application.findById(applicationId);

  if (!application) {
    throw new Error("Application not found");
  }

  application.status = status;

  await application.save();

  return application;
};