import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
      index: true,
    },

    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    location: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
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
      trim: true,
    },

    salary: {
      type: String,
      default: "Not Disclosed",
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 5000,
    },

    responsibilities: [
      {
        type: String,
        trim: true,
      },
    ],

    requirements: [
      {
        type: String,
        trim: true,
      },
    ],

    skills: [
      {
        type: String,
        trim: true,
      },
    ],

    deadline: {
      type: Date,
    },

    status: {
      type: String,
      enum: ["Open", "Closed"],
      default: "Open",
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

// =========================
// Indexes
// =========================

jobSchema.index({ title: "text", description: "text" });

jobSchema.index({
  company: 1,
  status: 1,
});

jobSchema.index({
  location: 1,
});

jobSchema.index({
  createdAt: -1,
});

const Job = mongoose.model("Job", jobSchema);

export default Job;