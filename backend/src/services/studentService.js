import Application from "../models/Application.js";
import Job from "../models/Job.js";
import SavedJob from "../models/SavedJob.js";

export const getStudentDashboard = async (studentId) => {
  // Total Applications
  const totalApplications = await Application.countDocuments({
    student: studentId,
  });

  // Total Saved Jobs
  const savedJobs = await SavedJob.countDocuments({
    student: studentId,
  });

  // Interviews
  const interviews = await Application.countDocuments({
    student: studentId,
    status: "Interview",
  });

  // Offers
  const offers = await Application.countDocuments({
    student: studentId,
    status: "Selected",
  });

  // Recent Applications
  const recentApplications = await Application.find({
    student: studentId,
  })
    .populate({
      path: "job",
      populate: {
        path: "company",
        select: "name",
      },
    })
    .sort({ createdAt: -1 })
    .limit(5);

  // Recommended Jobs
  const recommendedJobs = await Job.find({
    status: "Open",
  })
    .populate("company", "name logo")
    .sort({ createdAt: -1 })
    .limit(5);

  return {
    totalApplications,
    savedJobs,
    interviews,
    offers,
    recentApplications,
    recommendedJobs,
  };
};