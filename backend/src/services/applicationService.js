import Application from "../models/Application.js";
import Job from "../models/Job.js";
import { createNotification } from "./notificationService.js";

// =============================
// Apply for a Job
// =============================
export const applyForJob = async (
  userId,
  jobId,
  data
) => {
  // Check if job exists
  const job = await Job.findById(jobId)
    .populate("company", "name")
    .populate("postedBy", "fullName");

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
    recruiter: job.postedBy._id,
    job: jobId,
    resume: data.resume || "",
    coverLetter: data.coverLetter || "",
  });

  // Populate application
  const populatedApplication =
    await Application.findById(application._id)
      .populate("student", "fullName email")
      .populate("recruiter", "fullName email")
      .populate({
        path: "job",
        populate: {
          path: "company",
          select: "name logo location website",
        },
      });

  // ======================================
  // Notify Recruiter
  // ======================================

  await createNotification({
    user: job.postedBy._id,
    title: "New Job Application",
    message: `${populatedApplication.student.fullName} applied for "${job.title}".`,
    type: "application",
    link: `/recruiter/jobs/${job._id}/applications`,
    metadata: {
      job: job._id,
      application: application._id,
      company: job.company?._id,
    },
  });

  return populatedApplication;
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
// Recruiter Applications
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
  recruiterId,
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
    await Application.findById(applicationId)
      .populate("student", "fullName email")
      .populate({
        path: "job",
        populate: {
          path: "company",
          select: "name",
        },
      });

  if (!application) {
    throw new Error("Application not found");
  }

  if (
    application.recruiter.toString() !==
    recruiterId.toString()
  ) {
    throw new Error("Unauthorized");
  }

  application.status = status;

  await application.save();

  // ======================================
  // Notify Student
  // ======================================

  let title = "";
  let message = "";

  switch (status) {
    case "Under Review":
      title = "Application Under Review";
      message = `Your application for "${application.job.title}" is now under review.`;
      break;

    case "Shortlisted":
      title = "Application Shortlisted";
      message = `Congratulations! You have been shortlisted for "${application.job.title}".`;
      break;

    case "Interview":
      title = "Interview Scheduled";
      message = `Interview round has been scheduled for "${application.job.title}".`;
      break;

    case "Selected":
      title = "Application Selected";
      message = `Congratulations! You have been selected for "${application.job.title}".`;
      break;

    case "Rejected":
      title = "Application Rejected";
      message = `Your application for "${application.job.title}" was not selected.`;
      break;

    default:
      title = "Application Updated";
      message = `Your application status has been updated to "${status}".`;
  }

  await createNotification({
    user: application.student._id,
    title,
    message,
    type: "application",
    link: "/applications",
    metadata: {
      application: application._id,
      job: application.job._id,
      company: application.job.company?._id,
    },
  });

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