import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },

    type: {
      type: String,
      enum: [
        "application",
        "job",
        "company",
        "profile",
        "system",
        "interview",
        "account",
      ],
      default: "system",
    },

    link: {
      type: String,
      default: "",
    },

    isRead: {
      type: Boolean,
      default: false,
    },

    metadata: {
      job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
      },

      company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
      },

      application: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Application",
      },
    },
  },
  {
    timestamps: true,
  }
);

notificationSchema.index({
  user: 1,
  isRead: 1,
  createdAt: -1,
});

export default mongoose.model(
  "Notification",
  notificationSchema
);