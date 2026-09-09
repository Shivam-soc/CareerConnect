import Job from "../models/Job.js";
import Application from "../models/Application.js";

export const getDashboardData = async (recruiterId) => {
  // Jobs
  const totalJobs = await Job.countDocuments({
    postedBy: recruiterId,
  });

  const activeJobs = await Job.countDocuments({
    postedBy: recruiterId,
    status: "Open",
  });

  const closedJobs = await Job.countDocuments({
    postedBy: recruiterId,
    status: "Closed",
  });

  const jobs = await Job.find({
    postedBy: recruiterId,
  });

  const jobIds = jobs.map((job) => job._id);

  // Applications
  const totalApplications = await Application.countDocuments({
    job: { $in: jobIds },
  });

  const applied = await Application.countDocuments({
    job: { $in: jobIds },
    status: "Applied",
  });

  const underReview = await Application.countDocuments({
    job: { $in: jobIds },
    status: "Under Review",
  });

  const shortlisted = await Application.countDocuments({
    job: { $in: jobIds },
    status: "Shortlisted",
  });

  const interview = await Application.countDocuments({
    job: { $in: jobIds },
    status: "Interview",
  });

  const selected = await Application.countDocuments({
    job: { $in: jobIds },
    status: "Selected",
  });

  const rejected = await Application.countDocuments({
    job: { $in: jobIds },
    status: "Rejected",
  });

  const recentApplications = await Application.find({
    job: { $in: jobIds },
  })
    .populate("student", "fullName email profilePicture")
    .populate("job", "title company")
    .sort({ createdAt: -1 })
    .limit(5);

  const recentJobs = await Job.find({
    postedBy: recruiterId,
  })
    .sort({ createdAt: -1 })
    .limit(5);

  return {
    stats: {
      totalJobs,
      activeJobs,
      closedJobs,
      totalApplications,
      applied,
      underReview,
      shortlisted,
      interview,
      selected,
      rejected,
    },

    recentJobs,

    recentApplications,
  };
};

export const getRecruiterJobs = async (recruiterId) => {
  return await Job.find({
    postedBy: recruiterId,
  }).sort({
    createdAt: -1,
  });
};