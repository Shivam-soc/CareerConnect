import Job from "../models/Job.js";

export const createJob = async (jobData) => {
  const job = await Job.create(jobData);
  return job;
};

export const getAllJobs = async (query) => {
  const {
    search,
    location,
    employmentType,
    experience,
    company,
    page = 1,
    limit = 10,
    sort = "latest",
  } = query;

  const filter = {};

  // Search
  if (search) {
    filter.title = {
      $regex: search,
      $options: "i",
    };
  }

  // Filters
  if (location) {
    filter.location = location;
  }

  if (employmentType) {
    filter.employmentType = employmentType;
  }

  if (experience) {
    filter.experience = experience;
  }

  if (company) {
    filter.company = company;
  }

  // Sorting
  let sortOption = {};

  switch (sort) {
    case "oldest":
      sortOption = { createdAt: 1 };
      break;

    case "salary":
      sortOption = { salary: -1 };
      break;

    default:
      sortOption = { createdAt: -1 };
      break;
  }

  const jobs = await Job.find(filter)
    .populate(
      "company",
      "name logo website industry location"
    )
    .populate(
      "postedBy",
      "fullName email"
    )
    .sort(sortOption)
    .skip((Number(page) - 1) * Number(limit))
    .limit(Number(limit));

  const totalJobs = await Job.countDocuments(filter);

  return {
    jobs,
    totalJobs,
    totalPages: Math.ceil(totalJobs / Number(limit)),
    currentPage: Number(page),
  };
};

export const getJobById = async (id) => {
  const job = await Job.findById(id)
    .populate(
      "company",
      "name logo website industry location"
    )
    .populate(
      "postedBy",
      "fullName email"
    );

  if (!job) {
    throw new Error("Job not found");
  }

  return job;
};

export const updateJob = async (id, data, userId) => {
  const job = await Job.findById(id);

  if (!job) {
    throw new Error("Job not found");
  }

  if (job.postedBy.toString() !== userId.toString()) {
    throw new Error(
      "You are not authorized to update this job"
    );
  }

  Object.assign(job, data);

  await job.save();

  return await Job.findById(job._id)
    .populate(
      "company",
      "name logo website industry location"
    )
    .populate(
      "postedBy",
      "fullName email"
    );
};

export const deleteJob = async (id, userId) => {
  const job = await Job.findById(id);

  if (!job) {
    throw new Error("Job not found");
  }

  if (job.postedBy.toString() !== userId.toString()) {
    throw new Error(
      "You are not authorized to delete this job"
    );
  }

  await Job.findByIdAndDelete(id);

  return;
};

export const getRecruiterJobs = async (userId) => {
  const jobs = await Job.find({
    postedBy: userId,
  })
    .populate(
      "company",
      "name logo website industry location"
    )
    .sort({ createdAt: -1 });

  return jobs;
};