import Job from "../models/Job.js";
import Application from "../models/Application.js";

export const getDashboard = async (req, res) => {
  try {
    const recruiterId = req.user._id;

    const totalJobs = await Job.countDocuments({
      postedBy: recruiterId,
    });

    const jobs = await Job.find({
      postedBy: recruiterId,
    });

    const jobIds = jobs.map((job) => job._id);

    const totalApplications = await Application.countDocuments({
      job: { $in: jobIds },
    });

    const recentApplications = await Application.find({
      job: { $in: jobIds },
    })
      .populate("student", "fullName email")
      .populate("job", "title company")
      .sort({ createdAt: -1 })
      .limit(5);

    res.status(200).json({
      success: true,
      dashboard: {
        totalJobs,
        totalApplications,
        recentApplications,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getMyJobs = async (req, res) => {
  try {
    const jobs = await Job.find({
      postedBy: req.user._id,
    }).sort({ createdAt: -1 });

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