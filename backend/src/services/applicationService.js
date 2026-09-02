import Application from "../models/Application.js";
import Job from "../models/Job.js";

// =============================
// Apply for a Job
// =============================
export const applyForJob = async (
  userId,
  jobId,
  data
) => {
  // Check if job exists
  const job = await Job.findById(jobId);

  if (!job) {
    throw new Error("Job not found");
  }

  // Prevent duplicate applications
  const existingApplication = await Application.findOne({
    student: userId,
    job: jobId,
  });

  if (existingApplication) {
    throw new Error("You have already applied for this job.");
  }

  // Create application
  const application = await Application.create({
    student: userId,
    recruiter: job.postedBy,
    job: jobId,
    resume: data.resume || "",
    coverLetter: data.coverLetter || "",
  });

  // Return populated application
  return await Application.findById(application._id)
    .populate("student", "fullName email")
    .populate("recruiter", "fullName email")
    .populate({
      path: "job",
      populate: {
        path: "company",
        select: "name logo location website",
      },
    });
};

// =============================
// Student Applications
// =============================
export const getStudentApplications = async (
  userId
) => {
  return await Application.find({
    student: userId,
  })
    .populate({
      path: "job",
      populate: {
        path: "company",
        select: "name logo location website",
      },
    })
    .populate(
      "recruiter",
      "fullName email"
    )
    .sort({ createdAt: -1 });
};

// =============================
// Recruiter - Applicants of a Job
// =============================
export const getJobApplications = async (
  jobId
) => {
  return await Application.find({
    job: jobId,
  })
    .populate(
      "student",
      "fullName email profilePicture"
    )
    .populate({
      path: "job",
      populate: {
        path: "company",
        select: "name logo",
      },
    })
    .sort({ createdAt: -1 });
};

// =============================
// Update Application Status
// =============================
export const updateApplicationStatus = async (
  applicationId,
  status
) => {
  const validStatus = [
    "Applied",
    "Under Review",
    "Shortlisted",
    "Interview",
    "Selected",
    "Rejected",
  ];

  if (!validStatus.includes(status)) {
    throw new Error("Invalid application status");
  }

  const application =
    await Application.findById(applicationId);

  if (!application) {
    throw new Error("Application not found");
  }

  application.status = status;

  await application.save();

  return await Application.findById(application._id)
    .populate(
      "student",
      "fullName email profilePicture"
    )
    .populate(
      "recruiter",
      "fullName email"
    )
    .populate({
      path: "job",
      populate: {
        path: "company",
        select: "name logo location website",
      },
    });
};