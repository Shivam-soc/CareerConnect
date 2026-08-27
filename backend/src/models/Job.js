import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
      
    },

    location: {
      type: String,
      required: true,
    },

    employmentType: {
      type: String,
      enum: [
        "Full-Time",
        "Part-Time",
        "Internship",
        "Contract",
      ],
      default: "Full-Time",
    },

    experience: {
      type: String,
      default: "0-1 Years",
    },

    salary: {
      type: String,
      default: "Not Disclosed",
    },

    description: {
      type: String,
      required: true,
    },

    responsibilities: [
      {
        type: String,
      },
    ],

    requirements: [
      {
        type: String,
      },
    ],

    skills: [
      {
        type: String,
      },
    ],

    deadline: {
      type: Date,
    },

    status: {
      type: String,
      enum: ["Open", "Closed"],
      default: "Open",
    },

    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", jobSchema);

export default Job;